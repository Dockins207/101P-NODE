import Head from 'next/head';
import styles from './styles/Careers.module.css';
import FeaturedProperties from '../components/FeaturedProperties';

const Careers = () => {
  return (
    <>
      <Head>
        <title>Careers at 101 Properties</title>
        <meta name="description" content="Explore current job opportunities at 101 Properties. Check back for future openings." />
      </Head>
      <section className={styles.careersSection}>
        <div className={styles.careersContent}>
          <h1>Current Opportunities</h1>
          <p className={styles.introText}>
            We appreciate your interest in joining 101 Properties. Currently, there are no available job openings.
          </p>
          <p className={styles.highlightText}>
            Please keep checking this page for future opportunities.
          </p>
          <div className={styles.noJobs}>
            <h2>View Latest Jobs</h2>
            <p>
              Currently, there are no available job openings. Please keep checking for future opportunities.
            </p>
          </div>
          <div className={styles.cta}>
            <h3>Stay Updated!</h3>
            <p>Subscribe to our newsletter for updates on job openings and company news.</p>
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
        </div>
        <FeaturedProperties />
      </section>
    </>
  );
};

export default Careers;
