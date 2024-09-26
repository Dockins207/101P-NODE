import React from 'react';
import styles from './VideoGallery.module.css'; // Import CSS module

const videos = [
  { src: 'https://www.youtube.com/embed/CBEj2CPIXXE', title: 'Video Title 1' },
  { src: 'https://www.youtube.com/embed/CBEj2CPIXXE', title: 'Video Title 2' },
  { src: 'https://www.youtube.com/embed/Z3W3Q8n5YOg', title: 'Video Title 3' },
  { src: 'https://www.youtube.com/embed/Z3W3Q8n5YOg', title: 'Video Title 4' }, // Fourth video
];

export default function VideoGallery() {
  return (
    <section className={styles['video-gallery']}>
      <h2>
        <strong>WATCH AND LEARN ABOUT OUR PROJECTS</strong>
      </h2>
      <div className={styles['video-grid']}>
        {videos.map((video, index) => (
          <div key={index} className={styles['video-item']}>
            <iframe
              src={video.src}
              frameBorder="0"
              allowFullScreen
              title={`Video ${index + 1}`}
            ></iframe>
          </div>
        ))}
      </div>
      {/* Add the button below the video grid */}
      <a
        href="https://www.youtube.com/@101propertiesmedia" // Add your YouTube channel link here
        className={styles['youtube-button']}
      >
        Visit Our YouTube Channel
      </a>
    </section>
  );
}
