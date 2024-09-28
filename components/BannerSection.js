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
          'https://sqb4dkpp.api.sanity.io/v2023-09-17/data/query/production?query=*[_type == "banner"]{description, "imageUrl": image.asset->url, propertyName, location, price, uuid}'
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
            {slides.map((slide) => (
              <li key={slide.uuid} className="glide__slide">
                <img
                  src={slide.imageUrl}
                  alt={slide.description}
                  className={styles.image}
                />
                <div
                  className={styles.bannerText}
                  id={`banner-text-${slide.uuid}`} // Unique ID for each banner based on uuid
                >
                  <h2>{slide.propertyName || 'No Title Available'}</h2>
                  <p>{slide.location || 'Location Not Available'}</p>
                  <p>{slide.description}</p>
                  <p>{slide.price ? `${slide.price}` : 'Price Not Available'}</p>
                  <a href="#" className={styles.moreInfoButton}>
                    More Info
                  </a>
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
