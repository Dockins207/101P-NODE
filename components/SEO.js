import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, image, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Open Graph (for social media preview) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:site" content="@your_twitter_handle" /> {/* Optional */}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Charset and viewport settings */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="101 Properties" />

      {/* Real Estate Specific Meta Tags */}
      <meta name="geo.position" content="1.2921;36.8219" /> {/* Latitude and longitude for Nairobi, Kenya */}
      <meta name="geo.placename" content="Kenya" />
      <meta name="geo.region" content="KE" />

      {/* Optional: Mobile-specific meta tags */}
      <meta name="theme-color" content="#0056A4" />
    </Helmet>
  );
};

export default SEO;
