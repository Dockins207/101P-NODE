// components/PropertyCard.js

import Link from 'next/link';
import styles from './FeaturedProperties.module.css'; // Move the card styles here

const PropertyCard = ({ imageUrl, title, location, price, slug }) => {
  return (
    <Link href={`/property/${slug}`} className={styles.propertyCard} role="link">
      <div
        className={styles.propertyImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.style.backgroundImage = 'url(https://101-properties.com/default-image.jpg)';
        }}
      ></div>

      <div className={styles.propertyInfo}>
        <h2 className={styles.propertyTitle}>{title}</h2>
        <p className={styles.propertyLocation}>{location}</p>
        <p className={styles.propertyPrice}>{price}</p>
      </div>
    </Link>
  );
};

export default PropertyCard;
