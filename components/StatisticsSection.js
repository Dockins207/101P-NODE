import { useEffect, useRef, useState } from 'react';
import styles from './StatisticsSection.module.css';
import { sanityClient } from '../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url'; // Import image URL builder

const builder = imageUrlBuilder(sanityClient); // Initialize image URL builder

const StatisticsSection = () => {
  const containerRef = useRef(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [imageLoadingError, setImageLoadingError] = useState(false); // State for image loading error

  const animateCount = (element, target) => {
    let count = 0;
    const speed = target / 100;

    const updateCount = () => {
      count += speed;
      if (count >= target) {
        element.textContent = target;
      } else {
        element.textContent = Math.floor(count);
        requestAnimationFrame(updateCount);
      }
    };
    updateCount();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await sanityClient.fetch(`
          *[_type == "statistics"][0]{
            clientsServed, 
            projectsCompleted, 
            diasporaClients, 
            yearsOfExperience,
            backgroundImage { asset->{ url } } // Fetch the image URL
          }
        `);

        if (result) {
          setData(result);
        } else {
          setError('No statistics found.');
        }
      } catch (err) {
        setError('Failed to fetch statistics. Please try again later.');
        console.error('Fetch Error:', err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && containerRef.current) {
      const statNumbers = containerRef.current.querySelectorAll(`.${styles.statNumber}`);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            statNumbers.forEach((statNumber) => {
              const target = parseInt(statNumber.getAttribute('data-target'), 10);
              animateCount(statNumber, target);
            });
            containerRef.current.classList.add(styles.show);
          } else {
            containerRef.current.classList.remove(styles.show);
          }
        });
      }, { threshold: 0.1 });

      observer.observe(containerRef.current);

      return () => observer.disconnect();
    }
  }, [data]);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  // Fallback function for image loading error
  const handleImageError = () => {
    setImageLoadingError(true);
  };

  const renderStatBoxes = () => (
    <>
      <div className={styles.statBox}>
        <h3 className={styles.statHeading}>Clients Served</h3>
        <div className={styles.statNumberWrapper}>
          <p className={styles.statNumber} data-target={data?.clientsServed || 0}>
            {data?.clientsServed || 0}
          </p>
          <span className={styles.plusSign}>+</span>
        </div>
      </div>

      <div className={styles.statBox}>
        <h3 className={styles.statHeading}>Years of Service</h3>
        <div className={styles.statNumberWrapper}>
          <p className={styles.statNumber} data-target={data?.yearsOfExperience || 0}>
            {data?.yearsOfExperience || 0}
          </p>
          <span className={styles.plusSign}>+</span>
        </div>
      </div>

      <div className={styles.statBox}>
        <h3 className={styles.statHeading}>Projects Completed</h3>
        <div className={styles.statNumberWrapper}>
          <p className={styles.statNumber} data-target={data?.projectsCompleted || 0}>
            {data?.projectsCompleted || 0}
          </p>
          <span className={styles.plusSign}>+</span>
        </div>
      </div>

      <div className={styles.statBox}>
        <h3 className={styles.statHeading}>International Clients</h3>
        <div className={styles.statNumberWrapper}>
          <p className={styles.statNumber} data-target={data?.diasporaClients || 0}>
            {data?.diasporaClients || 0}
          </p>
          <span className={styles.plusSign}>+</span>
        </div>
      </div>
    </>
  );

  return (
    <section className={styles.statisticsSection} id="statistics" style={{
      backgroundColor: imageLoadingError ? '#f0f0f0' : 'transparent', // Fallback color
      backgroundImage: data?.backgroundImage?.asset ? `url(${data.backgroundImage.asset.url})` : 'none', // Correctly access the image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className={styles.statisticsBackground}>
        <h2>Why Choose 101 Properties?</h2>
        <p className={styles.statDescription}>Trusted by property buyers worldwide.</p>
        <div className={styles.statisticsContainer} ref={containerRef}>
          {renderStatBoxes()}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
