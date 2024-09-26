import { sanityClient } from '../sanity/lib/client';
import { useState, useEffect } from 'react';
import styles from './styles/Staffgallery.module.css';

const query = `*[_type == "gallery" && category == "Team hike"]{
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
        <h1 className={styles.header}>
          Adventure Awaits: Our Team Hikes
        </h1>
        <p className={styles.headerText}>
        Join us for fun and friendship as we hike outdoors together.
        </p>
      </div>

      {/* Right Grid Section */}
      <div className={styles.right}>
        {galleryItems.map((item) =>
          item.images && item.images.length > 0 ? (
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
          ) : null
        )}
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
