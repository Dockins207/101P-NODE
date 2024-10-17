import React from 'react';
import styles from './Notice.module.css';

const Notice = () => {
  return (
    <div className={styles.noticeContainer}>
      <p>
        <strong>Polite Notice:</strong> This site is currently under development and may not be fully functional.
        For inquiries, feel free to contact us.
      </p>
    </div>
  );
};

export default Notice;
