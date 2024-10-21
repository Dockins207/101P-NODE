import { useState, useEffect } from 'react';
import { sanityClient } from '../../sanity/lib/client';
import styles from '../styles/PropertyDetail.module.css';
import Head from 'next/head';
import { PortableText } from '@portabletext/react';
import ContactForm from '../ContactForm';

// Query to get property details
const propertyQuery = `*[_type in ["sellingNow", "offers", "newProperties", "soldOut", "featuredProperties"] && slug.current == $slug][0]{
  name,
  cashPrice,
  location,
  "mainImage": mainImage.asset->url,
  detailedPage {
    detailedGallery[] {
      asset-> {
        url
      }
    },
    description,
    detailedInformation
  }
}`;

export async function getStaticPaths() {
  const pathsQuery = `*[_type in ["sellingNow", "offers", "newProperties", "soldOut", "featuredProperties"]]{ "slug": slug.current }`;
  const properties = await sanityClient.fetch(pathsQuery);
  const paths = properties.map((property) => ({
    params: { slug: String(property.slug) },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  try {
    const property = await sanityClient.fetch(propertyQuery, { slug });

    if (!property) {
      return { notFound: true };
    }

    return {
      props: { property },
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
}

const PropertyDetails = ({ property }) => {
  const images = property?.detailedPage?.detailedGallery || [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); 

  useEffect(() => {
    if (property) {
      setLoading(false);
    }
  }, [property]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error loading property details. Please try again later.</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${property?.name || 'Property'} - Property Details`}</title>
        <meta name="description" content={property?.detailedPage?.description || 'Property details'} />
        <meta property="og:title" content={`${property?.name} - Property Details`} />
        <meta property="og:description" content={property?.detailedPage?.description || 'Property details'} />
        <meta property="og:image" content={property?.mainImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={styles.mainContent}>
        {/* Left Side */}
        <div className={styles.leftSide}>
          <div className={styles.card}>
            {/* Combined Hero Section with Gallery */}
            <section className={styles.heroSection}>
              <div className={styles.heroText}>
                <h1>{property?.name}</h1>
                <p className={styles.price}>Ksh. {property?.cashPrice}</p>
              </div>

              <div className={styles.heroSlider}>
                <button className={styles.navArrow} onClick={handlePrevImage} aria-label="Previous image">
                  &#8249;
                </button>
                <img
                  src={images.length > 0 ? images[currentImageIndex]?.asset?.url : property?.mainImage}
                  alt={property?.name}
                  className={styles.heroImage}
                  loading="lazy"
                />
                <button className={styles.navArrow} onClick={handleNextImage} aria-label="Next image">
                  &#8250;
                </button>
              </div>

              {/* Thumbnail Gallery under Hero Section */}
              {images.length > 0 ? (
                <div className={styles.thumbnailGallery}>
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`${styles.imageThumbnail} ${index === currentImageIndex ? styles.activeThumbnail : ''}`}
                      onClick={() => handleImageClick(index)}
                    >
                      <img
                        src={image.asset.url}
                        alt={`Detail ${index}`}
                        className={styles.thumbnailImage}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p>No additional images available.</p>
              )}
            </section>
          </div>

          <div className={styles.card}>
            {/* Description Section */}
            <div className={styles.description}>
              <h2 className={styles.heading}>Description</h2>
              <p>{property?.detailedPage?.description || 'No description available.'}</p>
            </div>
          </div>

          <div className={styles.card}>
            {/* Additional Information */}
            <div className={styles.detailedInformation}>
              <h2 className={styles.heading}>Additional Information</h2>
              <PortableText value={property?.detailedPage?.detailedInformation || 'No additional information available.'} />
            </div>
          </div>
        </div>

        {/* Right Side with Contact Form */}
        <div className={styles.rightSide}>
          <div className={styles.card}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
