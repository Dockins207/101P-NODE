import { useState } from 'react';
import { sanityClient } from '../../sanity/lib/client';
import styles from '../styles/PropertyDetail.module.css';
import Head from 'next/head';
import { PortableText } from '@portabletext/react';
import ContactForm from '../ContactForm';

// Query to get property details
const query = `*[_type in ["sellingNow", "offers", "newProperties", "soldOut"] && slug.current == $slug][0]{
  title,
  price,
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
  const pathsQuery = `*[_type in ["sellingNow", "offers", "newProperties", "soldOut"]]{ "slug": slug.current }`;
  const properties = await sanityClient.fetch(pathsQuery);
  const paths = properties.map((property) => ({
    params: { slug: String(property.slug) },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const property = await sanityClient.fetch(query, { slug });

  if (!property) {
    return { notFound: true };
  }

  return {
    props: { property },
    revalidate: 10,
  };
}

const PropertyDetails = ({ property }) => {
  const [selectedImage, setSelectedImage] = useState(
    property.mainImage ||
    property.detailedPage?.detailedGallery?.[0]?.asset?.url
  );

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${property.title} - Property Details`}</title>
        <meta name="description" content={property.detailedPage?.description} />
      </Head>

      <div className={styles.mainContent}>
        {/* Left side with property details */}
        <div className={styles.leftSide}>
          <section className={styles.gallerySection}>
            <img
              src={selectedImage}
              alt={property.title}
              className={styles.heroImage}
            />
            <div className={styles.gallery}>
              {property.detailedPage?.detailedGallery?.map((image, index) => (
                <div
                  key={index}
                  className={styles.imageThumbnail}
                  onClick={() => handleImageClick(image.asset.url)}
                >
                  <img
                    src={image.asset.url}
                    alt={`Detail ${index}`}
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          </section>

          <div className={styles.description}>
            <h2 className={styles.heading}>Description</h2>
            <p>{property.detailedPage?.description}</p>
          </div>

          <div className={styles.detailedInformation}>
            <h2 className={styles.heading}>Additional Information</h2>
            <PortableText value={property.detailedPage?.detailedInformation} />
          </div>
        </div>
  
        {/* Right side with the contact form */}
        <div className={styles.rightSide}>
          <ContactForm />
        </div>
      </div>
        {/* Map Section */}
        <section className={styles.mapSection}>
        <h2 className={styles.heading}>Location</h2>
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(property.location)}`}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default PropertyDetails;
