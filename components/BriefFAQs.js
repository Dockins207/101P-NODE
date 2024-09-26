import styles from './BriefFAQs.module.css';

const BriefFAQs = () => {
  return (
    <section className={styles.briefFaqSection}>
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
      <div className={styles.briefFaqItem}>
        <p className={styles.briefQuestion}>Where are your projects located?</p>
        <p className={styles.briefAnswer}>
          We have properties in Kitengela, Kisaju, Isinya, Lenchani, Malindi, Watamu...
          <a href="/faqspage">Read more</a>.
        </p>
      </div>
      <div className={styles.briefFaqItem}>
        <p className={styles.briefQuestion}>
          Can someone from diaspora buy a plot?
        </p>
        <p className={styles.briefAnswer}>
          Yes, they can. You can choose your preferred plot, and we'll reserve
          it for you...
          <a href="/faqspage">Read More</a>.
        </p>
      </div>
      <div className={styles.briefFaqItem}>
        <p className={styles.briefQuestion}>Are there any hidden fees?</p>
        <p className={styles.briefAnswer}>
          No, all costs are clearly outlined during the purchase process, so
          there are no surprises...
          <a href="/faqspage">Read More</a>.
        </p>
      </div>
      <div className={styles.seeAllFaqs}>
        <a
          href="/faqspage"
          className={styles.seeAllLink}
        >
          View More FAQs &rarr;
        </a>
      </div>
    </section>
  );
};

export default BriefFAQs;
