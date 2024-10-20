import Head from 'next/head';
import styles from './styles/Contact.module.css';
import FeaturedProperties from '../components/FeaturedProperties';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - 101 Properties</title>
        <meta
          name="description"
          content="Get in touch with 101 Properties for inquiries about Kenyan real estate. We’re here to help you with your property investment questions."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <section id={styles.contactPageSection}>
        <div className={styles.contactSection}>
          <div className={styles.contactHeader}>
            <h1>Contact Us</h1>
            <p>How Can We Help?</p>
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactBox}>
              <h2>Working Hours</h2>
              <p>Monday to Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 3:00 PM</p>
              <p>Sunday: Available on calls as agreed</p>
            </div>
            <div className={styles.contactBox}>
              <h2>Sales</h2>
              <p>
                Phone: <a href="tel:+254700101101">+254 700 101 101</a>
              </p>
              <p>
                Email: <a href="mailto:101properties@gmail.com">101properties@gmail.com</a>
              </p>
            </div>
            <div className={styles.contactBox}>
              <h2>Customer Support</h2>
              <p>
                Phone: <a href="tel:+254722227066">+254 722 227 066</a>
              </p>
              <p>
                Phone: <a href="tel:+254790730302">+254 790 730 302</a>
              </p>
              <p>
                Email: <a href="mailto:101properties@gmail.com">101properties@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h2>Quick Enquiry</h2>
          <form action="#" method="post">
            <div className={styles.formGroup}>
              <input type="text" placeholder="Enter Full Name" required />
            </div>
            <div className={styles.formGroup}>
              <input type="tel" placeholder="Enter Your Phone" required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Enter Your Email" required />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Message..." required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </section>
      <FeaturedProperties />
    </>
  );
};

export default Contact;
