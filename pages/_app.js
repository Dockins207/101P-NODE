import './styles/globals.css';
import Script from 'next/script';
import Layout from '../components/Layout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Application({ Component, pageProps }) {
  return (
    <>
      {/* Load external JavaScript files with lazy loading for better performance */}
      <Script src="/js/header.js" strategy="lazyOnload" />
      <Script src="/js/reviews.js" strategy="lazyOnload" />
      <Script src="/js/reviews-months.js" strategy="lazyOnload" />
      <Script src="/js/searchbar.js" strategy="lazyOnload" />

      {/* Main layout of the application */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default Application;
