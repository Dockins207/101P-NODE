import React from 'react';
import styles from './styles/Awards.module.css';

export default function Awards() {
  return (
    <main className={styles.awardsSection}>
      <h2>Our Awards & Achievements</h2>
      <div className={styles.awardsList}>
        <div className={styles.award}>
          <img
            src="/awards-photos/award1.webp"
            alt="Award 1"
            className={styles.awardImage}
          />
        </div>
        <div className={styles.award}>
          <img
            src="/awards-photos/award2.webp"
            alt="Award 2"
            className={styles.awardImage}
          />
        </div>
        <div className={styles.award}>
          <img
            src="/awards-photos/award3.webp"
            alt="Award 3"
            className={styles.awardImage}
          />
        </div>
      </div>
    </main>
  );
}