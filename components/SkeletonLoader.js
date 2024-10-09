import React from 'react';
import styles from './SkeletonLoader.module.css';

const SkeletonLoader = () => (
  <div className={styles['skeleton-card']}>
    <div className={styles['skeleton-image']} />
    <div className={styles['skeleton-text']} />
    <div className={styles['skeleton-text']} />
  </div>
);

export default SkeletonLoader;
