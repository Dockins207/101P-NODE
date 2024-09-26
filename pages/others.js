import { sanityClient } from '../sanity/lib/client';
import { useState, useEffect } from 'react';
import styles from './styles/Sitevisitsgallery.module.css';

const query = `*[_type == "gallery" && category == "Others"]{
  title,
  category,
  "images": images[].asset->url
}`;

export async function getStaticProps() {
  const galleryItems = await sanityClient.fetch(query);
  return {
    props: { galleryItems },
  };
}

const Gallery = ({ galleryItems }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const pileImages = document.querySelectorAll(`.${styles.pileImage}`);
    pileImages.forEach((image, index) => {
      image.style.setProperty('--index', index);
    });
  }, [galleryItems]);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Captured Moments</h1>
        <p className={styles.headerText}>
          Discover a variety of unique events, milestones, and behind-the-scenes
          glimpses from our journey.
        </p>
      </div>

      {/* Left and Right Split */}
      <div className={styles.content}>
        {/* Right Grid Section */}
        <div className={styles.right}>
          {galleryItems.map((item) =>
            item.images.map((img, i) => (
              <div key={i} className={styles.gridItem}>
                <img
                  src={img}
                  alt={item.title}
                  className={styles.gridImage}
                  onClick={() => handleImageClick(img)}
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Image Popup */}
      {selectedImage && (
        <div className={styles.popup} onClick={closePopup}>
          <span className={styles.closeButton} onClick={closePopup}>
            &times;
          </span>
          <img src={selectedImage} alt="Popup" className={styles.popupImage} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
