import React, { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import styles from './styles/SellingNow.module.css';

const SellingNow = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProperties = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://sqb4dkpp.api.sanity.io/v2023-09-17/data/query/production?query=*[_type == "sellingNow"]{name, location, purpose, size, cashPrice, installmentPrice, "imageUrl": image.asset->url, slug}'
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setProperties(data.result);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setError('Failed to load properties. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className={styles['selling-now']}>
      <h2>PROPERTIES AVAILABLE FOR IMMEDIATE PURCHASE</h2>

      {error && (
        <div className={styles['error']}>
          <p>{error}</p>
          <button onClick={fetchProperties} className={styles['retry-button']}>Retry</button>
        </div>
      )}

      {loading && !error && <p>Loading properties...</p>}

      {properties.length > 0 ? (
        <div className={styles['property-list']}>
          {properties.map((property) => (
            <PropertyCard 
              key={property.slug.current} 
              property={property} 
              slug={property.slug.current} 
            />
          ))}
        </div>
      ) : (
        <p>No properties available for sale at the moment.</p>
      )}
    </div>
  );
};

export default SellingNow;
