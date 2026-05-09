import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { useEffect } from "react";

import "~/styles/globals.css";
import { useBoundStore } from "~/hooks/useBoundStore";

const MyApp: AppType = ({ Component, pageProps }) => {
  // Manual rehydrate after mount avoids SSG/hydration mismatches when the
  // persisted state (active course, lessons completed, etc.) differs from defaults.
  useEffect(() => {
    void useBoundStore.persist.rehydrate();
  }, []);

  return (
    <>
      <Head>
        <title>¡Qué difícil es hablar el español!</title>
        <meta
          name="description"
          content="Custom courses for Spain Spanish (A1–C2) and Malaysian Mandarin (HSK 1–6), with listening, writing, and speaking exercises."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A0" />
        <link rel="manifest" href="/app.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
