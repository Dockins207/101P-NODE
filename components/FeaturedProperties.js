import React, { useEffect, useState } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import styles from './FeaturedProperties.module.css';

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch(
        'https://sqb4dkpp.api.sanity.io/v2023-09-17/data/query/production?query=*[_type == "featuredProperties"]{name, location, price, "imageUrl": image.asset->url, slug}'
      );

      const data = await response.json();
      setProperties(data.result);
    };

    fetchProperties();
  }, []);

  useEffect(() => {
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

    if (properties.length > 0) {
      glide.mount();
    }

    return () => {
      glide.destroy();
    };
  }, [properties]);

  return (
    <div className={styles['featured-properties']}>
      <h2>FEATURED PROPERTIES</h2>
      <div id="featured-properties-glide" className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {properties.map((property) => (
              <li className="glide__slide" key={property.slug ? property.slug.current : property.name}>
                <div className={styles['card']}>
                  <img src={property.imageUrl} alt={property.name} />
                  <h3>{property.name}</h3>
                  <p>{property.location}</p>
                  <p className={styles['price']}>Ksh: {property.price}</p>
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
    </div>
  );
};

export default FeaturedProperties;
