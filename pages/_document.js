// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Link to favicon */}
        <link rel="icon" href="/favicon.ico" /> {/* or /favicon.png */}
        {/* Add any other metadata */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
