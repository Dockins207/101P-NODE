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
        <div className={styles['property-details']}>
          <div className={styles['detail']}>
            <span className={styles['label']}>Location </span>
            <span className={styles['value']} style={{ direction: 'ltr' }}>{property.location || 'N/A'}</span>
          </div>
          <div className={styles['detail']}>
            <span className={styles['label']}>Purpose </span>
            <span className={styles['value']} style={{ direction: 'ltr' }}>{property.purpose || 'N/A'}</span>
          </div>
          <div className={styles['detail']}>
            <span className={styles['label']}>Size </span>
            <span className={styles['size-value']} style={{ direction: 'ltr' }}>{property.size || 'N/A'}</span>
          </div>
        </div>

        <div className={styles['price-container']}>
          <div className={styles['cash-price-container']}>
            <p className={styles['property-label']} style={{ direction: 'ltr' }}><strong>Price</strong></p>
            <p className={styles['property-value']} style={{ direction: 'ltr' }}>
              Ksh. {property.cashPrice ? property.cashPrice.toLocaleString() : 'N/A'}
            </p>
          </div>

          <div className={styles['installment-price-container']}>
            <p className={styles['property-label']} style={{ direction: 'ltr' }}><strong>Deposit</strong></p>
            <p className={styles['property-value']} style={{ direction: 'ltr' }}>
              Ksh. {property.installmentPrice ? property.installmentPrice.toLocaleString() : '0'}
            </p>
          </div>
        </div>

        <button className={styles['view-details']} onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
