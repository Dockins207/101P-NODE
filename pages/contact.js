import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './styles/Contact.module.css';
import FeaturedProperties from '../components/FeaturedProperties';
import { sanityClient } from '../sanity/lib/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [responseType, setResponseType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sanityClient.create({
        _type: 'contactSubmission',
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        createdAt: new Date().toISOString(),
      });

      setResponseMessage('Thank you for reaching out! Your message has been successfully sent.');
      setResponseType('success');
      setFormData({ fullName: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission failed:', error);
      setResponseMessage('Sorry, there was an issue sending your message. Please try again later.');
      setResponseType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [responseMessage]);

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
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Pop-up notification */}
            {responseMessage && (
              <div
                className={`${styles.popupMessage} ${
                  responseType === 'success' ? styles.successMessage : styles.errorMessage
                }`}
              >
                {responseMessage}
              </div>
            )}
          </form>
        </div>
      </section>

      <FeaturedProperties />
    </>
  );
};

export default Contact;
