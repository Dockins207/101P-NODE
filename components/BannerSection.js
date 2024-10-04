import { useEffect, useState } from 'react';
import styles from './BannerSection.module.css';
import Button from '../components/Button'; // Import the reusable button

const BannerSection = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the complete data including description, location, and price
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://sqb4dkpp.api.sanity.io/v2023-09-17/data/query/production?query=*[_type == "banner"]{description, "imageUrl": image.asset->url, propertyName, location, price, uuid}'
        );
        const data = await response.json();

        if (response.ok && data.result) {
          setSlides(data.result);
        } else {
          throw new Error('No result found in data or fetch failed');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load banners.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Preload images for smoother transitions
  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.imageUrl;
    });
  }, [slides]);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.sliderContainer}>
      {loading ? (
        <div className={styles.loadingSpinner}>
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      ) : (
        slides.map((slide, index) => (
          <div
            key={slide.uuid}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.description}
              className={styles.image}
              loading="lazy"
              width="600"
              height="400"
            />
            <div className={styles.bannerText}>
              {slide.propertyName && <h2>{slide.propertyName}</h2>}
              {slide.location && <p>{slide.location}</p>}
              {slide.description && <p>{slide.description}</p>}
              {slide.price && <p>{slide.price}</p>}          
              
              {/* Replacing 'More Info' button with the reusable Button component */}
              <Button href="#" text="More Info" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BannerSection;
