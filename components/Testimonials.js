import React, { useState } from 'react';
import styles from './Testimonials.module.css';
import VideoGallery from './VideoGallery';
import ClientReviews from './ClientReviews';

export default function ReviewsTabs() {
  const [activeTab, setActiveTab] = useState('youtube');

  return (
    <section>
      <h2 style={{ textAlign: 'center',}}>Testimonials</h2>
     

      {/* Tab buttons */}
      <div className={styles['tabs-container']}>
        <div
          className={`${styles.tab} ${activeTab === 'youtube' ? styles.active : ''}`}
          onClick={() => setActiveTab('youtube')}
        >
          Youtube Reviews
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'google' ? styles.active : ''}`}
          onClick={() => setActiveTab('google')}
        >
          Google Reviews
        </div>
      </div>

      {/* Conditionally render components based on the active tab */}
      <div>
        {activeTab === 'youtube' && <VideoGallery />}
        {activeTab === 'google' && <ClientReviews />}
      </div>
    </section>
  );
}
