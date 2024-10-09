import { useEffect, useRef, useState } from 'react';
import styles from './StatisticsSection.module.css';
import { sanityClient } from '../sanity/lib/client';

const StatisticsSection = () => {
  const containerRef = useRef(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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
            yearsOfExperience
          }
        `);

        if (result) {
          setData(result); // Set the fetched data
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
            containerRef.current.classList.remove(styles.show); // Reset animation when out of view
          }
        });
      }, { threshold: 0.1 });

      observer.observe(containerRef.current);

      return () => observer.disconnect(); // Clean up observer on unmount
    }
  }, [data]);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }
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
    <section className={styles.statisticsSection} id="statistics">
      <div
        className={styles.statisticsBackground}
        style={{
          backgroundImage: `url('/logo/STATISTICS2.jpg')`,
        }}
      >
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
