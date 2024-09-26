import Link from 'next/link'; 
import { sanityClient } from '../sanity/lib/client';
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
);

export default Properties;
