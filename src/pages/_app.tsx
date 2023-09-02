import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dk9ktxdpj/image/upload/v1693174330/o0gndzk5i6kikgzo6f1w.png"
        />
        <title>WebStackme</title>
        <meta name="title" content="WebStack portafolio web" />
        <meta
          name="description"
          content="Conoceras mis habilidades en el mundo del TI"
        />
        <meta name="theme-color" content="#1E1B1E"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  ); 
}
