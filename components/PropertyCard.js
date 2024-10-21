import React from 'react';
import { useRouter } from 'next/router';
import styles from './PropertyCard.module.css';

const PropertyCard = ({ property, slug }) => {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/property/${slug}`);
  };

  return (
    <div className={styles.card}>
      <img src={property.imageUrl} alt={property.name} className={styles['property-image']} />
      <div className={styles['card-content']}>
        <h3 className={styles['property-name']}>{property.name || 'No Name Provided'}</h3>

        {/* Property Details as a list */}
        <ul className={styles['property-details']}>
          <li className={styles['detail']}>
            <span className={styles['label']}>Location: </span>
            <span className={styles['value']} style={{ direction: 'ltr' }}>{property.location || 'N/A'}</span>
          </li>
          <li className={styles['detail']}>
            <span className={styles['label']}>Purpose: </span>
            <span className={styles['value']} style={{ direction: 'ltr' }}>{property.purpose || 'N/A'}</span>
          </li>
          <li className={styles['detail']}>
            <span className={styles['label']}>Size: </span>
            <span className={styles['size-value']} style={{ direction: 'ltr' }}>{property.size || 'N/A'}</span>
          </li>
        </ul>

        {/* Prices in a list format */}
        <ul className={styles['price-container']}>
          <li className={styles['cash-price-container']}>
            <strong>Price: </strong>
            Ksh. {property.cashPrice ? property.cashPrice.toLocaleString() : 'N/A'}
          </li>
          <li className={styles['installment-price-container']}>
            <strong>Deposit: </strong>
            Ksh. {property.installmentPrice ? property.installmentPrice.toLocaleString() : '0'}
          </li>
        </ul>

        {/* Button for viewing details */}
        <button className={styles['view-details']} onClick={handleViewDetails}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
