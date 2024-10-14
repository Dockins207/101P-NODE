import { sanityClient } from '../sanity/lib/client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './styles/Staffgallery.module.css';

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
    <>
      <Head>
        <title>Gallery | Captured Moments</title>
        <meta
          name="description"
          content="Discover unique events, milestones, and behind-the-scenes glimpses from our journey at 101 Properties."
        />
        <meta
          name="keywords"
          content="gallery, site visits, events, milestones, real estate, 101 Properties"
        />
        <meta property="og:title" content="Gallery | Captured Moments" />
        <meta
          property="og:description"
          content="Discover unique events, milestones, and behind-the-scenes glimpses from our journey at 101 Properties."
        />
        <meta property="og:image" content="https://101-properties.com/gallery-image.jpg" /> 
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://101-properties.com/gallery" />
        <meta property="og:type" content="website" />
      </Head>

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
                <div key={`${item.title}-${i}`} className={styles.gridItem}>
                  <img
                    src={img}
                    alt={item.title}
                    className={styles.gridImage}
                    onClick={() => handleImageClick(img)}
                    role="button"
                    tabIndex={0} 
                    onKeyPress={(e) => e.key === 'Enter' && handleImageClick(img)} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://101-properties.com/default-image.jpg'; 
                    }}
                    loading="lazy" 
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
