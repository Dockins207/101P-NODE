import { sanityClient } from '../sanity/lib/client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
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

  useEffect(() => {}, [galleryItems]);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Head>
        <title>Team Hikes Gallery | 101 Properties</title>
        <meta
          name="description"
          content="Explore our team hikes and outdoor adventures at 101 Properties. Join us in our fun and friendly outings while enjoying the beauty of nature."
        />
        <meta
          name="keywords"
          content="team hikes, outdoor adventures, 101 Properties, gallery, team bonding"
        />
        <meta property="og:title" content="Team Hikes Gallery" />
        <meta
          property="og:description"
          content="Join our team as we hike outdoors together. Explore the gallery of our adventures."
        />
        <meta
          property="og:image"
          content="https://101-properties.com/team-hike-image.jpg" // Replace with the appropriate image URL
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://101-properties.com/gallery" />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>Adventure Awaits: Our Team Hikes</h1>
          <p className={styles.headerText}>
            Join us for fun and friendship as we hike outdoors together.
          </p>
        </div>

        {/* Right Grid Section */}
        <div className={styles.right}>
          {galleryItems.map((item) =>
            item.images && item.images.length > 0
              ? item.images.map((img, i) => (
                  <div key={i} className={styles.gridItem}>
                    <img
                      src={img}
                      alt={item.title}
                      className={styles.gridImage}
                      onClick={() => handleImageClick(img)}
                    />
                  </div>
                ))
              : null
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
