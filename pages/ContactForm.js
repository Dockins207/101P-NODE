import { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone..."
        value={formData.phone}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Email..."
        value={formData.email}
        onChange={handleChange}
        className={styles.input}
      />
      <textarea
        name="message"
        placeholder="Hey, I would like to visit [property name]"
        value={formData.message}
        onChange={handleChange}
        className={styles.textarea}
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
      <button type="submit" className={styles.submitButton}>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
