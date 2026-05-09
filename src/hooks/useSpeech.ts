import { useCallback, useEffect, useRef, useState } from "react";

type SpeechRecognitionAlt = { transcript: string };
type SpeechRecognitionRes = ArrayLike<SpeechRecognitionAlt> & {
  isFinal?: boolean;
};
type SpeechRecognitionEventLike = {
  results: ArrayLike<SpeechRecognitionRes>;
  resultIndex?: number;
};

type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: { error: string; message?: string }) => void) | null;
  onend: (() => void) | null;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

const friendlyError = (code: string): string => {
  switch (code) {
    case "not-allowed":
    case "service-not-allowed":
      return "Microphone permission denied. Allow it in your browser/OS settings.";
    case "no-speech":
      return "No speech detected — try again, closer to the mic.";
    case "audio-capture":
      return "No microphone found.";
    case "network":
      return "Network error reaching the speech service. Try again.";
    case "aborted":
      return "Recognition stopped.";
    case "language-not-supported":
      return "This language isn't supported by your browser's recognizer.";
    default:
      return code ? `Mic error: ${code}` : "Unknown microphone error.";
  }
};

const getSpeechRecognition = (): SpeechRecognitionConstructor | null => {
  if (typeof window === "undefined") return null;
  return window.SpeechRecognition ?? window.webkitSpeechRecognition ?? null;
};

const pickVoice = (lang: string): SpeechSynthesisVoice | null => {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;
  const exact = voices.find((v) => v.lang === lang);
  if (exact) return exact;
  const prefix = lang.split("-")[0] ?? lang;
  const starts = voices.find((v) => v.lang.startsWith(prefix));
  return starts ?? null;
};

export function speak(
  text: string,
  lang: string,
  rate = 0.95,
): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      resolve();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = pickVoice(lang);
    if (voice) utterance.voice = voice;
    utterance.lang = lang;
    utterance.rate = rate;
    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
}

export function useTtsReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    if (window.speechSynthesis.getVoices().length > 0) {
      setReady(true);
      return;
    }
    const handler = () => setReady(true);
    window.speechSynthesis.addEventListener("voiceschanged", handler);
    return () =>
      window.speechSynthesis.removeEventListener("voiceschanged", handler);
  }, []);
  return ready;
}

export type RecognitionState = "idle" | "listening" | "unsupported" | "error";

export function useSpeechRecognition(lang = "es-ES") {
  const [state, setState] = useState<RecognitionState>("idle");
  const [transcript, setTranscript] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  useEffect(() => {
    const Ctor = getSpeechRecognition();
    if (!Ctor) {
      setState("unsupported");
    }
  }, []);

  const start = useCallback(() => {
    const Ctor = getSpeechRecognition();
    if (!Ctor) {
      setState("unsupported");
      return;
    }
    setTranscript("");
    setErrorMessage(null);
    const recognition = new Ctor();
    recognition.lang = lang;
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.maxAlternatives = 3;
    recognition.onresult = (event) => {
      let pieces = "";
      for (let i = 0; i < event.results.length; i++) {
        const r = event.results[i];
        if (!r) continue;
        const alt = r[0];
        if (alt) pieces += alt.transcript;
      }
      if (pieces) setTranscript(pieces);
    };
    recognition.onerror = (event) => {
      setErrorMessage(friendlyError(event.error));
      setState("error");
    };
    recognition.onend = () => {
      setState((prev) => (prev === "listening" ? "idle" : prev));
    };
    recognitionRef.current = recognition;
    setState("listening");
    try {
      recognition.start();
    } catch (e) {
      setErrorMessage(
        e instanceof Error ? e.message : "Could not start microphone.",
      );
      setState("error");
    }
  }, [lang]);

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
    setState("idle");
  }, []);

  const reset = useCallback(() => {
    setTranscript("");
    setErrorMessage(null);
    setState("idle");
  }, []);

  return { state, transcript, errorMessage, start, stop, reset };
}

let t2sFn: ((s: string) => string) | null = null;
let t2sLoadPromise: Promise<void> | null = null;

export function preloadChineseConverter(): Promise<void> {
  if (t2sFn) return Promise.resolve();
  if (!t2sLoadPromise) {
    t2sLoadPromise = import("opencc-js").then((m) => {
      t2sFn = m.Converter({ from: "t", to: "cn" });
    });
  }
  return t2sLoadPromise;
}

const isChineseLang = (lang: string | undefined) =>
  !!lang && lang.toLowerCase().startsWith("zh");

export function normalizeText(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[¿?¡!.,;:"。,?!、:""'']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Aggressive normalization for matching: also strip every whitespace,
// useful for Chinese where word boundaries are not marked.
function normalizeForMatch(input: string, lang?: string): string {
  let n = normalizeText(input).replace(/\s+/g, "");
  if (isChineseLang(lang) && t2sFn) {
    // Map both inputs into the Simplified namespace so traditional
    // and simplified are treated as equivalent. (Falls back gracefully
    // before the converter is loaded.)
    n = t2sFn(n);
  }
  return n;
}

export function answersMatch(
  input: string,
  accepted: readonly string[],
  lang?: string,
): boolean {
  const normalizedInput = normalizeForMatch(input, lang);
  return accepted.some((a) => normalizeForMatch(a, lang) === normalizedInput);
}

export function speakingMatches(
  transcript: string,
  target: string,
  lang?: string,
): boolean {
  const a = normalizeForMatch(transcript, lang);
  const b = normalizeForMatch(target, lang);
  if (a === b) return true;
  // For space-delimited languages, do word-level partial match.
  const aWordsRaw = normalizeText(transcript).split(/\s+/).filter(Boolean);
  const bWordsRaw = normalizeText(target).split(/\s+/).filter(Boolean);
  if (bWordsRaw.length > 1 && !isChineseLang(lang)) {
    const matchedCount = bWordsRaw.filter((w) =>
      aWordsRaw.includes(w),
    ).length;
    return matchedCount / bWordsRaw.length >= 0.8;
  }
  // Fallback to character-level overlap (helps for Chinese).
  const aChars = [...a];
  const bChars = [...b];
  if (bChars.length === 0) return false;
  const aSet = new Set(aChars);
  const matchedCount = bChars.filter((c) => aSet.has(c)).length;
  return matchedCount / bChars.length >= 0.7;
}
