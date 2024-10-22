import { useState, useEffect } from 'react';
import { sanityClient } from '../sanity/lib/client'; // Import Sanity client
import styles from './styles/ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    siteVisit: false,
    visitDate: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState(''); // success or error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Send the form data to Sanity
      await sanityClient.create({
        _type: 'siteVisitRequest',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        siteVisit: formData.siteVisit,
        visitDate: formData.visitDate,
        createdAt: new Date().toISOString(),
      });

      setResponseMessage('Your request has been submitted successfully.');
      setResponseType('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        siteVisit: false,
        visitDate: '',
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      setResponseMessage('There was an error submitting your request. Please try again.');
      setResponseType('error');
    } finally {
      setIsSubmitting(false);
      // Auto-hide the message after 5 seconds
      setTimeout(() => {
        setResponseMessage('');
      }, 5000); // Message will disappear after 5 seconds
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <h2>Book Site Visit</h2>
      <input
        type="text"
        name="name"
        placeholder="Name..."
        value={formData.name}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone..."
        value={formData.phone}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email..."
        value={formData.email}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <textarea
        name="message"
        placeholder="Message..."
        value={formData.message}
        onChange={handleChange}
        className={styles.textarea}
        required
      />
      <input
        type="date"
        name="visitDate"
        value={formData.visitDate}
        onChange={handleChange}
        className={styles.input}
      />
      <div className={styles.checkboxGroup}>
        <label>
          <input
            type="checkbox"
            name="siteVisit"
            checked={formData.siteVisit}
            onChange={handleChange}
          />{' '}
          Site Visit
        </label>
      </div>
      <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Send Request'}
      </button>

      {responseMessage && (
        <p className={`${styles.responseMessage} ${responseType === 'success' ? styles.success : styles.error}`}>
          {responseMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
