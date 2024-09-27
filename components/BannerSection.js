import { useEffect, useRef, useState } from 'react';
import Glide from '@glidejs/glide';
import styles from './BannerSection.module.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

const BannerSection = () => {
  const glideRef = useRef(null);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://sqb4dkpp.api.sanity.io/v2023-09-17/data/query/production?query=*%5B_type+%3D%3D+%22banner%22%5D%7B%0A++description%2C%0A++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++propertyName%2C%0A++location%2C%0A++price%2C%0A++relatedProperty-%3E%7B+title%2C+price%2C+location%7D%0A%7D&returnQuery=false'
        );
        const data = await response.json();

        console.log('Fetched data:', data);

        if (data.result) {
          setSlides(data.result);
        } else {
          console.error('No result found in data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (slides.length > 0 && glideRef.current) {
      const glide = new Glide(glideRef.current, {
        type: 'carousel',
        perView: 1,
        autoplay: 5000,
        hoverpause: true,
        rewind: false,
      });

      glide.mount();

      return () => {
        glide.destroy();
      };
    }
  }, [glideRef, slides]);

  return (
    <div className={styles.sliderContainer}>
      <div className="glide" ref={glideRef} id="banner-slider">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {slides.map((slide, index) => (
              <li key={index} className="glide__slide">
                <img src={slide.imageUrl} alt={slide.description} className={styles.image} />
                <div className={styles.bannerText}>
                  {/* Display Property Name */}
                  <h2>{slide.propertyName || 'No Title Available'}</h2>

                  {/* Display Property Location */}
                  <p>{slide.location || 'Location Not Available'}</p>

                  {/* Display Description */}
                  <p>{slide.description}</p>

                  {/* Display Property Price */}
                  <p>{slide.price ? `${slide.price}` : 'Price Not Available'}</p>

                  {/* More Info Button */}
                  <a href="#" className={styles.moreInfoButton}>More Info</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
