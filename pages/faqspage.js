import { useState } from 'react';
import styles from './styles/FAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFAQClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <head>
        <title>Frequently Asked Questions - Land Properties</title>
        <meta
          name="description"
          content="Find answers to the most frequently asked questions about buying land, financing options, and property details on our website."
        />
        <meta name="robots" content="index, follow" />
      </head>
      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <button
            className={styles.faqQuestion}
            onClick={() => handleFAQClick(0)}
          >
            How can I buy land from your website?
          </button>
          <div
            className={styles.faqAnswer}
            style={{ maxHeight: activeIndex === 0 ? '500px' : '0' }}
          >
            <p>
              You can choose your preferred plot, and we'll reserve it for you.
              We will then provide our company’s account details so you can wire
              the payment. After that, you'll share the details for how you'd
              like the title to be transferred. We process the title deeds
              within 6 to 10 months after payment. Once your title is ready, you
              can either instruct us to issue it to a family member or your
              lawyer, or we can ship/mail it directly to you.
            </p>
          </div>
        </div>

        <div className={styles.faqItem}>
          <button
            className={styles.faqQuestion}
            onClick={() => handleFAQClick(1)}
          >
            Do you offer financing options?
          </button>
          <div
            className={styles.faqAnswer}
            style={{ maxHeight: activeIndex === 1 ? '500px' : '0' }}
          >
            <p>
              Yes, we offer flexible financing plans to suit your needs. Reach
              out to us for more details on the financing options.
            </p>
          </div>
        </div>

        <div className={styles.faqItem}>
          <button
            className={styles.faqQuestion}
            onClick={() => handleFAQClick(2)}
          >
            Are there any hidden fees?
          </button>
          <div
            className={styles.faqAnswer}
            style={{ maxHeight: activeIndex === 2 ? '500px' : '0' }}
          >
            <p>
              No hidden fees! All charges are clearly displayed during the
              checkout process.
            </p>
          </div>
        </div>

        <div className={styles.faqItem}>
          <button
            className={styles.faqQuestion}
            onClick={() => handleFAQClick(3)}
          >
            How long does it take to process a title deed?
          </button>
          <div
            className={styles.faqAnswer}
            style={{ maxHeight: activeIndex === 3 ? '500px' : '0' }}
          >
            <p>
              We process title deeds within 6 to 10 months after full payment.
              You will be kept updated on the process at every step.
            </p>
          </div>
        </div>

        <div className={styles.faqItem}>
          <button
            className={styles.faqQuestion}
            onClick={() => handleFAQClick(4)}
          >
            What types of properties do you offer?
          </button>
          <div
            className={styles.faqAnswer}
            style={{ maxHeight: activeIndex === 4 ? '500px' : '0' }}
          >
            <p>
              We offer a variety of plots including residential, commercial, and
              agricultural land across different locations in Kenya.
            </p>
          </div>
        </div>

        <div className={styles.backToHome}>
          <a href="../index.html" className={styles.backHomeLink}>
            Back Home &rarr;
          </a>
        </div>
      </section>
    </>
  );
};

export default FAQ;
