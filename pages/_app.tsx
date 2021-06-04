import NextNprogress from "nextjs-progressbar";

import Global from "../src/styles/global";

import type { AppProps } from "next/app";
import Head from "next/head";

import Header from "components/Header";
import Toast from "components/Toast";

import { ToastProvider } from 'contexts/toastContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="PickPallet é uma plataforma gratuita e open source com coleção de diversas paletas. Desenvolvida especialmente para designers."
        />
        <meta name="robots" content="nofollow" />
        <meta name="revisit-after" content="1 day" />
        <meta property="”og:type”" content="”website”" />
        <meta property="”og:locale”" content="”pt_BR”" />
        <meta
          name="google-site-verification"
          content="aKtK-3BCP2uXAEvU06gCcV2VXtHZgrHxmWmX1iU5LLQ"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;600&display=swap"
          rel="stylesheet"
        />
        <title>Palletas | PickPallet</title>
      </Head>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <Header />
      <ToastProvider>
        <Component {...pageProps} />
        <Toast />
      </ToastProvider>
      <Global />
    </>
  );
}
export default MyApp;
