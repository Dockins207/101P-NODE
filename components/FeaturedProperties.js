import React, { useEffect, useState } from 'react';
import Glide from '@glidejs/glide';
import Link from 'next/link';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import PropertyCard from './PropertyCard';
import styles from './FeaturedProperties.module.css';

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch properties from Sanity
  const fetchProperties = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://sqb4dkpp.api.sanity.io/v2023-09-17/data/query/production?query=*[_type == "featuredProperties"]{name, location, purpose, size, cashPrice, installmentPrice, "imageUrl": image.asset->url, "slug": slug.current}'
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data.result);
      setProperties(data.result);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setError('Failed to load properties. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch properties on component mount
  useEffect(() => {
    fetchProperties();
  }, []);

  // Initialize Glide when properties are loaded
  useEffect(() => {
    if (properties.length === 0) return;

    const glide = new Glide('#featured-properties-glide', {
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
      <div>
        <h2 className={styles.title}>Affordable Land for Sale</h2>
        <p className={styles.description}>
          Explore prime land available in Kitengela, Kisaju, Isinya, Lenchani, Malindi, and Watamu.
        </p>
      </div>

      {loading && <p>Loading properties...</p>}

      {error && (
        <div className={styles['error']}>
          <p>{error}</p>
          <button onClick={fetchProperties} className={styles['retry-button']}>Retry</button>
        </div>
      )}

      {!loading && !error && properties.length === 0 && (
        <p>No featured properties available at the moment.</p>
      )}

      {properties.length > 0 && (
        <div id="featured-properties-glide" className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {properties.map((property) => (
                <li className="glide__slide" key={property.slug ? property.slug : property.name}>
                  <Link href={`/property/${property.slug ? property.slug : ''}`}>
                    <PropertyCard property={property} slug={property.slug ? property.slug : ''} />
                  </Link>
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
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProperties;
