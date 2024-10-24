import React from 'react';
import Link from 'next/link';
import styles from './AboutSection.module.css';
import { motion } from 'framer-motion';
import Button from '../components/Button';

export default function AboutSection() {
  return (
    <motion.section
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>
        <strong>Unlock Your Dream Home with Us</strong>
      </h2>
      <p>
        At our core, we believe everyone deserves a place to call home. With our
        deep industry knowledge and unwavering commitment to your vision, we
        make the path to homeownership both seamless and achievable. Our team,
        driven by passion and backed by years of experience, is here{' '}
        <strong>to turn your dream into reality</strong>. From finding the
        perfect property to guiding you through every step, we ensure that your
        journey to owning a home is as smooth and rewarding as possible.
      </p>
    </motion.section>
  );
}
