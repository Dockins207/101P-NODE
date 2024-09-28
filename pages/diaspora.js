import styles from './styles/Diaspora.module.css';

const Diaspora = () => {
  return (
    <>
      <head>
        <title>Invest in Kenyan Real Estate from Abroad - 101 Properties</title>
        <meta
          name="description"
          content="Simplifying Kenyan real estate investment for the diaspora. Trustworthy processes and dedicated support for your investment journey."
        />
      </head>
      <section className={styles.diasporaSection}>
        <div className={styles.diasporaContent}>
          <h1>Investing in Kenyan Real Estate from Abroad Made Easy</h1>
          <p>
            Navigating the real estate market in Kenya while living abroad can
            often feel overwhelming. At{' '}
            <span className={styles.highlight}>101 Properties</span>, we recognize
            these challenges and have created a streamlined process that makes
            investing in property from the diaspora simple and stress-free.
          </p>
          <p>
            We’ve built a reputation on trust by ensuring that all our diaspora
            clients receive their title deeds promptly, reinforcing confidence in
            the real estate industry. Our investment process is fully transparent,
            efficient, and easily accessible online, allowing you to manage your
            investment from anywhere in the world.
          </p>
          <p>
            Understanding the value of your hard-earned money, we are committed to
            delivering excellent returns on your investment. To support you
            throughout your journey, we assign you a dedicated relationship
            manager from the outset. This expert will guide you in choosing the
            right plot that meets your specific needs and investment goals.
          </p>
          <p>
            Your relationship manager is also your go-to resource, handling all
            your inquiries and ensuring that your title deed is processed
            according to our policies. At{' '}
            <span className={styles.highlight}>101 Properties</span>, we make it
            our mission to simplify your investment experience, providing you with
            peace of mind and confidence as you invest in your future.
          </p>

          <div className={styles.relationshipManager}>
            "Your dedicated relationship manager is here to assist you every step
            of the way."
          </div>

          <a
            href="../101 properties pages/sellingnow.html"
            className={styles.ctaLink}
          >
            Start Your Investment Journey
          </a>
        </div>
      </section>
    </>
  );
};

export default Diaspora;
