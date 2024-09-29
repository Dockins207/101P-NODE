import Link from 'next/link';
import { sanityClient } from '../sanity/lib/client';
import styles from './styles/SellingNow.module.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';

// Query to fetch properties from the "New Properties" schema
const query = `*[_type == "newProperties"]{
  title,
  price,
  location,
  "imageUrl": mainImage.asset->url,
  slug
}`;

export async function getStaticProps() {
  try {
    const properties = await sanityClient.fetch(query);
    return {
      props: { properties },
    };
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    return {
      props: { properties: [] },
    };
  }
}

const Properties = ({ properties }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <meta name="robots" content="index, follow" />
        <title>Newly Listed Properties</title>
        <meta name="description" content="Discover the latest properties freshly added to the market." />
      </Head>

      {/* Header Section */}
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>DISCOVER NEWLY LISTED PROPERTIES</h1>
        <p className={styles.headerText}>
          Explore the latest properties freshly added to the market.
        </p>
      </div>

      {/* Property Grid Section */}
      <div className={styles.content}>
        {loading ? (
          <p>Loading properties...</p> 
        ) : (
          <div className={styles.right}>
            {properties.length > 0 ? (
              properties.map((property) => (
                <Link
                  href={`/property/${property.slug.current}`}
                  key={property.slug.current}
                  className={styles.propertyCard}
                >
                  <article>
                    <div
                      className={styles.propertyImage}
                      style={{ backgroundImage: `url(${property.imageUrl})` }}
                      aria-label={`Image of ${property.title}`} 
                    ></div>
                    <div className={styles.propertyInfo}>
                      <h2 className={styles.propertyTitle}>{property.title}</h2>
                      <p className={styles.propertyLocation}>{property.location}</p>
                      <p className={styles.propertyPrice}>
                        ${property.price.toLocaleString()}
                      </p>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <p>No properties found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
