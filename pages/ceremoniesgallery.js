import { sanityClient } from '../sanity/lib/client';
import { useState } from 'react';
import styles from './styles/Ceremoniesgallery.module.css';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const query = `*[_type == "gallery" && category == "Ceremonies"]{
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
    <div className={styles.container}>
      <Head>
        <title>Memorable Ceremonies Gallery - 101 Properties</title>
        <meta name="description" content="Explore our memorable ceremonies celebrating property handovers and milestone events at 101 Properties." />
      </Head>

      <NextSeo
        title="Memorable Ceremonies Gallery"
        description="Celebrate with us as we capture the joy of property handovers and special milestone events."
        openGraph={{
          title: 'Memorable Ceremonies Gallery',
          description: 'Explore our memorable ceremonies celebrating property handovers and milestone events at 101 Properties.',
          images: galleryItems.map(item => ({
            url: item.images[0], // Example, include URLs for Open Graph images
            width: 800,
            height: 600,
            alt: item.title,
          })),
        }}
      />

      {/* Header Section */}
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Memorable Ceremonies</h1>
        <p className={styles.headerText}>
          Celebrate with us as we capture the joy of property handovers and special milestone events.
        </p>
      </div>

      {/* Left and Right Split */}
      <div className={styles.content}>
        {/* Right Grid Section */}
        <div className={styles.right}>
          {galleryItems.map((item) =>
            item.images.map((img, index) => (
              <div key={`${item.title}-${index}`} className={styles.gridItem}>
                <img
                  src={img}
                  alt={`Ceremony event: ${item.title}`}  // Use meaningful alt text
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
          <img src={selectedImage} alt="Enlarged ceremony image" className={styles.popupImage} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
