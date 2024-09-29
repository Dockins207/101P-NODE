import { sanityClient } from '../sanity/lib/client';
import { useState } from 'react';
import Head from 'next/head';
import styles from './styles/Sitevisitsgallery.module.css';

const query = `*[_type == "gallery" && category == "Site Visits"]{
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

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Head>
        <title>Our Site Visits | 101 Properties</title>
        <meta
          name="description"
          content="Explore our site visits showcasing properties and client engagements at 101 Properties."
        />
        <meta
          name="keywords"
          content="site visits, real estate, property tours, 101 Properties"
        />
        <meta property="og:title" content="Our Site Visits" />
        <meta
          property="og:description"
          content="Explore moments from our on-site visits where we guide clients through potential properties."
        />
        <meta
          property="og:image"
          content="https://101-properties.com/site-visits-image.jpg" 
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://101-properties.com/site-visits" />
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
          {/* Right Grid Section */}
          <div className={styles.right}>
            {galleryItems && galleryItems.length > 0 ? (
              galleryItems.map((item) =>
                item.images.map((img, i) => (
                  <div key={i} className={styles.gridItem}>
                    <img
                      src={img}
                      alt={item.title}
                      className={styles.gridImage}
                      onClick={() => handleImageClick(img)}
                      role="button"
                      tabIndex={0}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleImageClick(img);
                        }
                      }}
                      onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop
                        e.target.src = 'https://101-properties.com/default-image.jpg';
                      }}
                    />
                  </div>
                ))
              )
            ) : (
              <p>No site visit photos available.</p>
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
