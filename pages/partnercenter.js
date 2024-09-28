import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './styles/PartnerCenter.module.css';

const PartnerCenter = () => {
  return (
    <>
      <Head>
        <title>Partner with 101 Properties | Earn Commission</title>
        <meta
          name="description"
          content="Join 101 Properties as a partner and earn a 2% commission on every successful sale by referring friends and family."
        />
        <meta
          name="keywords"
          content="partner, referral program, earn commission, real estate, 101 Properties"
        />
        <meta property="og:title" content="Partner with 101 Properties" />
        <meta
          property="og:description"
          content="Invite your friends and family to invest in affordable properties and earn a rewarding 2% commission on every successful sale."
        />
        <meta property="og:image" content="https://101-properties.com/partner-image.jpg" /> {/* Replace with a relevant image URL */}
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://101-properties.com/partner" />
        <meta property="og:type" content="website" />
      </Head>

      <section className={styles.partnerCenterSection}>
        <div className={styles.partnerContent}>
          <h1 className={styles.partnerTitle}>Partner with 101 Properties</h1>
          <p className={styles.partnerText}>
            Invite your relatives, friends, and colleagues to invest in our
            strategically located, affordable, and value-added properties. Earn a
            rewarding <span className={styles.highlight}>2% commission</span> on
            every successful sale.
          </p>
          <p className={styles.partnerText}>
            By referring them to{' '}
            <span className={styles.highlight}>101 Properties</span>, you’re
            guiding them towards smart investments that offer substantial returns
            in the real estate market.
          </p>
          <p className={styles.partnerText}>
            Your referral could unlock the door to someone’s dream home!
          </p>

          <div className={styles.terms}>Terms and Conditions Apply</div>

          <Link href="/referral-form" legacyBehavior>
            <a className={styles.ctaLink}>Refer Now</a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PartnerCenter;
