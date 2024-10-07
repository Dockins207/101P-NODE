import React, { useEffect, useState } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import styles from './FeaturedProperties.module.css';

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          'https://sqb4dkpp.api.sanity.io/v2023-09-17/data/query/production?query=*[_type == "featuredProperties"]{name, location, purpose, size, cashPrice, installmentPrice, "imageUrl": image.asset->url, slug}'
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProperties(data.result);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setError('Failed to load properties.');
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    if (properties.length === 0) return;

    const glide = new Glide('#featured-properties-glide', {
      direction: 'rtl',
      type: 'carousel',
      autoplay: 5000,
      hoverpause: true,
      perView: 3,
      gap: 10,
      focusAt: 'center',
      breakpoints: {
        800: {
          perView: 2,
        },
        500: {
          perView: 1,
        },
      },
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, [properties]);

  return (
    <div className={styles['featured-properties']}>
  <h2>Affordable Land for Sale</h2>
  <p>Explore prime land available in kitengela Kisaju, Isinya, Lenchani, Malindi, Watamu.</p>
  {error && <p className={styles['error']}>{error}</p>}
  {properties.length > 0 ? (
    <div id="featured-properties-glide" className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {properties.map((property) => (
            <li className="glide__slide" key={property.slug ? property.slug.current : property.name}>
              <div className={styles['card']}>
                <img src={property.imageUrl} alt={property.name} className={styles['property-image']} />
                <div className={styles['card-content']}>
                  <h3 className={styles['property-name']}>{property.name}</h3>
                  <div className={styles['property-details']}>
  <div className={styles['detail']}>
    <span className={styles['label']}>Location </span>
    <span className={styles['value']}>{property.location}</span>
  </div>
  <div className={styles['detail']}>
    <span className={styles['label']}>Purpose </span>
    <span className={styles['value']}>{property.purpose}</span>
  </div>
  <div className={styles['detail']}>
    <span className={styles['label']}>Size </span>
    <span className={styles['size-value']}>{property.size}</span>
  </div>
</div>


                  <div className={styles['price-container']}>
                    <div className={styles['cash-price-container']}>
                      <p className={styles['property-label']}><strong>Price</strong> </p>
                      <p className={styles['property-value']}>
                      Ksh. {property.cashPrice ? property.cashPrice.toLocaleString() : 'N/A'}
                      </p>
                    </div>

                    <div className={styles['installment-price-container']}>
                      <p className={styles['property-label']}><strong>Installments</strong></p>
                      <p className={styles['property-value']}>
                      Ksh. {property.installmentPrice ? property.installmentPrice.toLocaleString() : '0'}
                      </p>
                    </div>
                  </div>

                  <button className={styles['view-details']}>View Details</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="glide__bullets" data-glide-el="controls">
        {properties.map((_, index) => (
          <button
            className="glide__bullet"
            key={index}
            data-glide-dir={`=${index}`}
          ></button>
        ))}
      </div>
    </div>
  ) : (
    !error && <p>Loading properties...</p>
  )}
</div>

  );
};

export default FeaturedProperties;
