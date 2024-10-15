import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Add FontAwesome stylesheet */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        
        {/* Add the favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Optionally, you can specify other favicon formats for different devices */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.ico" />
        <link rel="icon" type="image/ico" sizes="32x32" href="/favicon-32x32.ico" />
        <link rel="icon" type="image/ic0" sizes="16x16" href="/favicon-16x16.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
