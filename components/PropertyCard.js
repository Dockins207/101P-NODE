import React from 'react';
import styles from './PropertyCard.module.css';

const PropertyCard = ({ imageUrl, title, location, purpose, size, cashPrice, installmentPrice }) => {
  return (
    <div className={styles.propertyCard}>
      <div className={styles.propertyImage}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.propertyDetails}>
        <h2>{title}</h2>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Purpose:</strong> {purpose}</p>
        <p><strong>Sizes:</strong> <span className={styles.sizeTag}>{size}</span></p>
        <div className={styles.priceSection}>
          <p><strong>Cash price:</strong> {cashPrice.toLocaleString('en-US')}</p>
          <p><strong>Installments:</strong> {installmentPrice.toLocaleString('en-US')}</p>
        </div>
      </div>
      <button className={styles.viewDetailsBtn}>View Details</button>
    </div>
  );
};

export default PropertyCard;
