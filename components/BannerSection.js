import { useEffect, useState } from 'react';
import styles from './BannerSection.module.css';

const BannerSection = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://sqb4dkpp.api.sanity.io/v2023-09-17/data/query/production?query=*[_type == "banner"]{description, "imageUrl": image.asset->url, propertyName, location, price, uuid}'
        );
        const data = await response.json();

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
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.sliderContainer}>
      {slides.map((slide, index) => (
        <div
          key={slide.uuid}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.description}
            className={styles.image}
            loading="lazy" // Lazy load images
          />
          <div className={styles.bannerText}>
            <h2>{slide.propertyName || 'No Title Available'}</h2>
            <p>{slide.location || 'Location Not Available'}</p>
            <p>{slide.description}</p>
            <p>{slide.price ? `${slide.price}` : 'Price Not Available'}</p>
            <a href="#" className={styles.moreInfoButton}>
              More Info
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerSection;
