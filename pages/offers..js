import Link from 'next/link';
import { sanityClient } from '../sanity/lib/client';
import Head from 'next/head';
import styles from './styles/SellingNow.module.css';

// Query to fetch properties from the "Offers" schema
const query = `*[_type == "offers"]{
  title,
  price,
  location,
  "imageUrl": mainImage.asset->url,
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
      <title>Exclusive Offers on Premium Properties</title>
      <meta
        name="description"
        content="Discover exclusive deals and discounts on premium properties. Don't miss out on your dream home!"
      />
      <meta
        name="keywords"
        content="real estate, properties for sale, exclusive offers, premium properties"
      />
      <meta property="og:title" content="Exclusive Offers on Premium Properties" />
      <meta
        property="og:description"
        content="Discover exclusive deals and discounts on premium properties. Don't miss out on your dream home!"
      />
      <meta property="og:image" content="https://101-properties.com/default-image.jpg" /> {/* Replace with a relevant image URL */}
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content="https://101-properties.com/selling-now" />
      <meta property="og:type" content="website" />
    </Head>

    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>EXCLUSIVE OFFERS ON PREMIUM PROPERTIES</h1>
        <p className={styles.headerText}>
          Don’t miss out on special property deals and discounts.
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
