import React from 'react';
import Head from 'next/head';
import styles from './styles/Awards.module.css';

export default function Awards() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Explore our awards and achievements that highlight our commitment to excellence in real estate." />
        <meta name="keywords" content="awards, achievements, real estate, excellence, Kenya" />
        <title>Our Awards & Achievements | 101 Properties</title>
      </Head>
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
    </>
  );
}
