import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import styles from './FeaturedProperties.module.css';

const FeaturedProperties = () => {
  const properties = [
    { id: 1, name: 'Emerald Gardens', location: 'Watamu', price: 'Ksh. 1,500,000', img: '/101 properties imgs/house2.jpeg' },
    { id: 2, name: 'Sunset Villas', location: 'Diani', price: 'Ksh. 2,300,000', img: '/101 properties imgs/house1.jpeg' },
    { id: 3, name: 'Ocean Breeze', location: 'Malindi', price: 'Ksh. 3,000,000', img: '/101 properties imgs/house3.jpeg' },
    { id: 4, name: 'Ocean Breeze', location: 'Malindi', price: 'Ksh. 3,000,000', img: '/101 properties imgs/imgF.jpg' },
    { id: 5, name: 'Ocean Breeze', location: 'Malindi', price: 'Ksh. 3,000,000', img: '/101 properties imgs/imgF2.jpg' },
    { id: 6, name: 'Ocean Breeze', location: 'Malindi', price: 'Ksh. 3,000,000', img: '/101 properties imgs/imgF3.jpg' },
    { id: 7, name: 'Ocean Breeze', location: 'Malindi', price: 'Ksh. 3,000,000', img: '/101 properties imgs/imgF4.jpg' },
    { id: 8, name: 'Ocean Breeze', location: 'Malindi', price: 'Ksh. 3,000,000', img: '/101 properties imgs/imgF5.jpg' },
    { id: 9, name: 'Ocean Breeze', location: 'Malindi', price: 'Ksh. 3,000,000', img: '/101 properties imgs/imgF6.jpg' },
    { id: 10, name: 'Ocean Breeze', location: 'Malindi', price: 'Ksh. 3,000,000', img: '/101 properties imgs/imgF7.jpg' },
  ];
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
    glide.mount();
  
    return () => {
      glide.destroy();
    };
  }, []);
  

  return (
    <div className={styles['featured-properties']}>
      <h2>FEATURED PROPERTIES</h2>
      <div id="featured-properties-glide" className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {properties.map((property) => (
              <li className="glide__slide" key={property.id}>
                <div className={styles['card']}>
                  <img src={property.img} alt={property.name} />
                  <h3>{property.name}</h3>
                  <p>{property.location}</p>
                  <p className={styles['price']}>{property.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="glide__bullets" data-glide-el="controls">
          {properties.map((_, index) => (
            <button className="glide__bullet" key={index} data-glide-dir={`=${index}`}></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
