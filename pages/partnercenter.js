import React from 'react';
import Link from 'next/link';
import styles from './styles/PartnerCenter.module.css';

const PartnerCenter = () => {
  return (
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
  );
};

export default PartnerCenter;
