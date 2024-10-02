import { useEffect, useRef, useState } from 'react';
import { sanityClient } from '../sanity/lib/client';
import { urlFor } from '../sanity/lib/image';
import styles from './StatisticsSection.module.css';

const StatisticsSection = () => {
  const containerRef = useRef(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

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
        const query = '*[_type == "statistics"]';
        const result = await sanityClient.fetch(query);
        if (result.length > 0) {
          const statisticsData = result[0];
          statisticsData.image = urlFor(statisticsData.image);
          setData(statisticsData);
        } else {
          setError('No statistics found.');
        }
      } catch (err) {
        setError('Failed to fetch statistics. Please try again later.');
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && containerRef.current && !hasAnimated) {
      const statNumbers = containerRef.current.querySelectorAll(`.${styles.statNumber}`);
      statNumbers.forEach((statNumber) => {
        const target = parseInt(statNumber.getAttribute('data-target'), 10);
        animateCount(statNumber, target);
      });
      setHasAnimated(true);
      containerRef.current.classList.add(styles.show);
    }
  }, [data, hasAnimated]);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  const renderStatBoxes = () => (
    <>
      <div className={styles.statBox}>
        <h3 className={styles.statHeading}>Happy Clients</h3>
        <p className={styles.statNumber} data-target={data?.happyClients || 0}>
          {data?.happyClients || 0}
          <span className={styles.plusSign}>+</span>
        </p>
      </div>
      <div className={styles.statBox}>
        <h3 className={styles.statHeading}>Years of Experience</h3>
        <p className={styles.statNumber} data-target={data?.yearsOfExperience || 0}>
          {data?.yearsOfExperience || 0}
          <span className={styles.plusSign}>+</span>
        </p>
      </div>
      <div className={styles.statBox}>
        <h3 className={styles.statHeading}>Title Deeds Awarded</h3>
        <p className={styles.statNumber} data-target={data?.titleDeeds || 0}>
          {data?.titleDeeds || 0}
          <span className={styles.plusSign}>+</span>
        </p>
      </div>
    </>
  );

  return (
    <section className={styles.statisticsSection} id="statistics">
      <div
        className={styles.statisticsBackground}
        style={{ backgroundImage: data?.image ? `url(${data.image})` : 'none' }}
      >
        <h2>Current Statistics</h2>
        {!data?.image && <p>No background image available.</p>}
        <div className={styles.statisticsContainer} ref={containerRef}>
          {renderStatBoxes()}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
