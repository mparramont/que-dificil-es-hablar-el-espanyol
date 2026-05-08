import { useCallback, useEffect, useRef, useState } from "react";

type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: { results: ArrayLike<{ 0: { transcript: string } } & ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

const getSpeechRecognition = (): SpeechRecognitionConstructor | null => {
  if (typeof window === "undefined") return null;
  return window.SpeechRecognition ?? window.webkitSpeechRecognition ?? null;
};

const pickSpanishVoice = (): SpeechSynthesisVoice | null => {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;
  const esES = voices.find((v) => v.lang === "es-ES");
  if (esES) return esES;
  const esStartsWith = voices.find((v) => v.lang.startsWith("es"));
  return esStartsWith ?? null;
};

export function speakSpanish(text: string, rate = 0.95): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      resolve();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = pickSpanishVoice();
    if (voice) utterance.voice = voice;
    utterance.lang = "es-ES";
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
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 3;
    recognition.onresult = (event) => {
      const result = event.results[0];
      if (!result) return;
      const best = result[0]?.transcript ?? "";
      setTranscript(best);
    };
    recognition.onerror = (event) => {
      setErrorMessage(event.error);
      setState("error");
    };
    recognition.onend = () => {
      setState((prev) => (prev === "listening" ? "idle" : prev));
    };
    recognitionRef.current = recognition;
    setState("listening");
    try {
      recognition.start();
    } catch {
      setState("idle");
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

export function normalizeSpanish(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[¿?¡!.,;:"]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function answersMatch(input: string, accepted: readonly string[]): boolean {
  const normalizedInput = normalizeSpanish(input);
  return accepted.some((a) => normalizeSpanish(a) === normalizedInput);
}

export function speakingMatches(transcript: string, target: string): boolean {
  const a = normalizeSpanish(transcript);
  const b = normalizeSpanish(target);
  if (a === b) return true;
  const aWords = a.split(" ").filter(Boolean);
  const bWords = b.split(" ").filter(Boolean);
  if (bWords.length === 0) return false;
  const matchedCount = bWords.filter((w) => aWords.includes(w)).length;
  return matchedCount / bWords.length >= 0.8;
}
