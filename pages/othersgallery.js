import { sanityClient } from '../sanity/lib/client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './styles/Othersgallery.module.css';

const query = `*[_type == "gallery"]{
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
    <>
      <Head>
        <title>Gallery | Explore Our Site Visits</title>
        <meta
          name="description"
          content="Explore our gallery showcasing site visits and potential properties. Discover investment opportunities with 101 Properties."
        />
        <meta
          name="keywords"
          content="gallery, site visits, real estate, 101 Properties, investment opportunities"
        />
        <meta property="og:title" content="Gallery | Explore Our Site Visits" />
        <meta
          property="og:description"
          content="Explore our gallery showcasing site visits and potential properties. Discover investment opportunities with 101 Properties."
        />
        <meta property="og:image" content="https://101-properties.com/gallery-image.jpg" /> {/* Replace with a relevant image URL */}
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://101-properties.com/gallery" />
        <meta property="og:type" content="website" />
      </Head>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>Our Site Visits</h1>
          <p className={styles.headerText}>
            Explore moments from our on-site visits, where we guide clients
            through potential properties and future investments.
          </p>
        </div>

        {/* Left and Right Split */}
        <div className={styles.content}>
          {/* Left Pile Effect */}
          <div className={styles.left}>
            {galleryItems.map((item) =>
              item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={item.title}
                  className={styles.pileImage}
                  onClick={() => handleImageClick(img)}
                />
              ))
            )}
          </div>

          {/* Vertical Blue Line */}
          <div className={styles.divider} />

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
    </>
  );
};

export default Gallery;
