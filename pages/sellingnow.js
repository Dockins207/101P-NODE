import Link from 'next/link';
import { sanityClient } from '../sanity/lib/client';
import Head from 'next/head';
import styles from './styles/SellingNow.module.css';

// Query to fetch properties from the "Selling Now" schema
const query = `*[_type == "sellingNow"]{
  title,
  price,
  location,
  "imageUrl": mainImage.asset->url,  // Correct field for the main image
  slug
}`;

export async function getStaticProps() {
  const properties = await sanityClient.fetch(query);
  return {
    props: { properties },
  };
}

const Properties = ({ properties }) => (
  <>
    <Head>
      <title>Explore Properties for Sale | 101 Properties</title>
      <meta
        name="description"
        content="Browse current listings of properties available for immediate purchase at 101 Properties."
      />
      <meta
        name="keywords"
        content="properties for sale, real estate, buy properties, 101 Properties"
      />
      <meta property="og:title" content="Explore Properties for Sale" />
      <meta
        property="og:description"
        content="Discover properties ready for immediate purchase at 101 Properties."
      />
      <meta
        property="og:image"
        content="https://101-properties.com/selling-now-image.jpg" // Replace with a relevant image URL
      />
      <meta property="og:url" content="https://101-properties.com/selling-now" />
      <meta property="og:type" content="website" />
    </Head>

    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>
          EXPLORE PROPERTIES AVAILABLE FOR IMMEDIATE PURCHASE
        </h1>
        <p className={styles.headerText}>
          Browse our current listings of properties ready for sale.
        </p>
      </div>

      {/* Property Grid Section */}
      <div className={styles.content}>
        <div className={styles.right}>
          {properties.map((property) => (
            <Link
              href={`/property/${property.slug.current}`}
              key={property.slug.current}
              className={styles.propertyCard}
            >
              <div
                className={styles.propertyImage}
                style={{ backgroundImage: `url(${property.imageUrl})` }}
              ></div>
              <div className={styles.propertyInfo}>
                <h2 className={styles.propertyTitle}>{property.title}</h2>
                <p className={styles.propertyLocation}>{property.location}</p>
                <p className={styles.propertyPrice}>{property.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Properties;
