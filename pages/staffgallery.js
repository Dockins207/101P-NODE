import { sanityClient } from '../sanity/lib/client';
import { useState } from 'react';
import Head from 'next/head';
import styles from './styles/Staffgallery.module.css';

const query = `*[_type == "gallery" && category == "Staff Photos"]{
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
        <title>Meet Our Team | 101 Properties</title>
        <meta
          name="description"
          content="Discover the dedicated professionals behind 101 Properties. Meet our team and learn about their expertise in real estate."
        />
        <meta
          name="keywords"
          content="staff photos, team, 101 Properties, real estate professionals"
        />
        <meta property="og:title" content="Meet Our Team" />
        <meta
          property="og:description"
          content="Get to know the dedicated professionals who drive our success at 101 Properties."
        />
        <meta
          property="og:image"
          content="https://101-properties.com/staff-team-image.jpg"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://101-properties.com/staff-gallery" />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>
            The People Behind Our Success
          </h1>
          <p className={styles.headerText}>
            Get to know the dedicated professionals who drive our success,
            bringing expertise and passion to every step of your real estate
            journey.
          </p>
        </div>

        {/* Right Grid Section */}
        <div className={styles.right}>
          {galleryItems && galleryItems.length > 0 ? (
            galleryItems.map((item) =>
              item.images && item.images.length > 0
                ? item.images.map((img, i) => (
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
                          e.target.onerror = null;
                          e.target.src = 'https://101-properties.com/default-image.jpg';
                        }}
                      />
                    </div>
                  ))
                : null
            )
          ) : (
            <p>No staff photos available.</p>
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
    </>
  );
};

export default Gallery;
