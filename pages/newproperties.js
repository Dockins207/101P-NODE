import Link from 'next/link';
import { sanityClient } from '../sanity/lib/client';
import styles from './styles/SellingNow.module.css';

// Query to fetch properties from the "New Properties" schema
const query = `*[_type == "newProperties"]{
  title,
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
  <div className={styles.container}>
    {/* Header Section */}
    <div className={styles.headerContainer}>
      <h1 className={styles.header}>DISCOVER NEWLY LISTED PROPERTIES</h1>
      <p className={styles.headerText}>
        Explore the latest properties freshly added to the market.
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
);

export default Properties;
