// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Link to the favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Optionally link to a PNG favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" /> */
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
