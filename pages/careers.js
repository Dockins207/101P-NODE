import styles from './styles/Careers.module.css';

const Careers = () => {
  return (
    <section className={styles.careersSection}>
      <div className={styles.careersContent}>
        <h2>Current Opportunities</h2>
        <p className={styles.introText}>
          We appreciate your interest in joining 101 Properties. Currently,
          there are no available job openings.
        </p>
        <p className={styles.highlightText}>
          Please keep checking this page for future opportunities.
        </p>
        <div className={styles.noJobs}>
          <h3>View Latest Jobs</h3>
          <p>
            Currently, there are no available job openings. Please keep checking
            for future opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Careers;
