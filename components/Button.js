// components/Button.js

import React from 'react';
import styles from './Button.module.css'; // Create a separate CSS module for styling

const Button = ({ href, text }) => {
  return (
    <a href={href} className={styles.button}>
      {text}
    </a>
  );
};

export default Button;
