import React from 'react';
import Head from 'next/head';
import styles from './styles/Newsletter.module.css';

const Newsletter = () => {
  return (
    <>
      <Head>
        <title>Subscribe to Our Newsletter</title>
        <meta
          name="description"
          content="Stay updated with the latest news and investment opportunities in the Kenyan real estate market."
        />
        <meta
          name="keywords"
          content="newsletter, real estate, investment, updates, Kenyan market"
        />
      </Head>

      <section className={styles.newsletterSection}>
        <div
          className={styles.newsletterRow}
          onClick={() => (window.location.href = 'newsletter1.html')}
        >
          <div className={styles.imageContainer}>
            <img
              src="newsletter1.jpg"
              alt="Newsletter Image 1"
              className={styles.newsletterImg}
            />
          </div>
          <div className={styles.newsletterContent}>
            <h2>Stay Informed</h2>
            <p>
              Receive the latest updates on our real estate offers and
              investment tips.
            </p>
          </div>
        </div>

        <div
          className={styles.newsletterRow}
          onClick={() => (window.location.href = 'newsletter2.html')}
        >
          <div className={styles.imageContainer}>
            <img
              src="newsletter2.jpg"
              alt="Newsletter Image 2"
              className={styles.newsletterImg}
            />
          </div>
          <div className={styles.newsletterContent}>
            <h2>Exclusive Insights</h2>
            <p>
              Get access to special reports and market trends in the Kenyan real
              estate sector.
            </p>
          </div>
        </div>

        <div
          className={styles.newsletterRow}
          onClick={() => (window.location.href = 'newsletter3.html')}
        >
          <div className={styles.imageContainer}>
            <img
              src="newsletter3.jpg"
              alt="Newsletter Image 3"
              className={styles.newsletterImg}
            />
          </div>
          <div className={styles.newsletterContent}>
            <h2>Join Our Community</h2>
            <p>
              Be part of a growing community of diaspora investors building a
              secure future.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.subscriptionSection}>
        <div className={styles.subscriptionContent}>
          <h2>Subscribe to Our Newsletter</h2>
          <p>Stay updated with the latest news and investment opportunities.</p>
          <form className={styles.subscriptionForm}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className={styles.subscriptionInput}
            />
            <button type="submit" className={styles.subscribeBtn}>
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
