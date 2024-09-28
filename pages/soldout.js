import Link from 'next/link';
import { sanityClient } from '../sanity/lib/client';
import Head from 'next/head';
import styles from './styles/SellingNow.module.css';

// Query to fetch properties from the "Sold Out" schema
const query = `*[_type == "soldOut"]{
  title,
  status,
  price,
  location,
  "imageUrl": mainImage.asset->url,  // Updated to reference the correct field
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
      <title>Sold Out Properties | 101 Properties</title>
      <meta
        name="description"
        content="Explore our sold-out properties at 101 Properties, showcasing successful real estate transactions."
      />
      <meta
        name="keywords"
        content="sold out properties, real estate, 101 Properties, success stories"
      />
      <meta property="og:title" content="Sold Out Properties" />
      <meta
        property="og:description"
        content="These properties have recently been sold to happy buyers. Discover our success stories at 101 Properties."
      />
      <meta
        property="og:image"
        content="https://101-properties.com/sold-out-image.jpg" // Replace with an appropriate image URL
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content="https://101-properties.com/sold-out" />
      <meta property="og:type" content="website" />
    </Head>

    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>SOLD OUT PROPERTIES: SUCCESS STORIES</h1>
        <p className={styles.headerText}>
          These properties have recently been sold to happy buyers.
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
