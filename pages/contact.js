import styles from './styles/Contact.module.css';

const Contact = () => {
  return (
    <>
      <section id={styles.contactPageSection}>
        <div className={styles.contactSection}>
          <div className={styles.contactHeader}>
            <h1>Contact Us</h1>
            <p>How Can We Help?</p>
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactBox}>
              <h2>Working Hours</h2>
              <p>Monday to Friday: 8:00am - 5:00pm</p>
              <p>Saturday: 9:00am - 3:00pm</p>
              <p>Sunday: Available on calls as agreed</p>
            </div>
            <div className={styles.contactBox}>
              <h2>Sales</h2>
              <p>
                Phone: <a href="tel:+2547 0010 1101">+2547 0010 1101</a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:101properties@gmail.com">
                  101properties@gmail.com
                </a>
              </p>
            </div>
            <div className={styles.contactBox}>
              <h2>Customer Support</h2>
              <p>
                Phone: <a href="tel:+254722227066">+2547 2222 7066</a>
              </p>
              <p>
                Phone: <a href="tel:+254790730302">+2547 9073 0302</a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:101properties@gmail.com">
                  101properties@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h2>Quick Enquiry</h2>
          <form action="#">
            <div className={styles.formGroup}>
              <input type="text" placeholder="Enter Full Name" required />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Enter Your Phone" required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Enter Your Email" required />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Email Message..." required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
