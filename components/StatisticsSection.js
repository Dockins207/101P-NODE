import { useEffect, useRef } from 'react';
import styles from './StatisticsSection.module.css';

const StatisticsSection = () => {
  const containerRef = useRef(null);

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
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const statNumbers = containerRef.current.querySelectorAll(`.${styles.statNumber}`);
        statNumbers.forEach((statNumber) => {
          const target = parseInt(statNumber.getAttribute('data-target'), 10);
          animateCount(statNumber, target);
        });
        containerRef.current.classList.add(styles.show);
      }
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.statisticsSection} id="statistics">
      <div className={styles.statisticsBackground}>
        <h2>CURRENT STATISTICS</h2>
        <div className={styles.statisticsContainer} ref={containerRef}>
          <div className={styles.statBox}>
            <h3 className={styles.statHeading}>Happy Clients</h3>
            <p className={styles.statNumber} data-target="1347">0</p>
          </div>
          <div className={styles.statBox}>
            <h3 className={styles.statHeading}>Years of Experience</h3>
            <p className={styles.statNumber} data-target="6">0</p>
          </div>
          <div className={styles.statBox}>
            <h3 className={styles.statHeading}>Title Deeds Awarded</h3>
            <p className={styles.statNumber} data-target="639">0</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
