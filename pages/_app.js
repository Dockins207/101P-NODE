import './styles/globals.css';
import Script from 'next/script';
import Layout from '../components/Layout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const GA_TRACKING_ID = 'G-W82X5Y5T1L';

function Application({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Function to track page views
    const handleRouteChange = (url) => {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    };

    // Listen for route changes to track page views
    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Cleanup event listener on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Load Google Analytics script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>

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
