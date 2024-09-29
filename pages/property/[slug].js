import { useState } from 'react';
import { sanityClient } from '../../sanity/lib/client';
import styles from '../styles/PropertyDetail.module.css';
import Head from 'next/head';
import { PortableText } from '@portabletext/react';

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
  // Fetch paths for all property schemas
  const pathsQuery = `*[_type in ["sellingNow", "offers", "newProperties", "soldOut"]]{ "slug": slug.current }`;
  const properties = await sanityClient.fetch(pathsQuery);

  const paths = properties.map((property) => ({
    params: { slug: String(property.slug) },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // Fetch property details based on slug
  const property = await sanityClient.fetch(query, { slug });

  if (!property) {
    return {
      notFound: true,
    };
  }

  return {
    props: { property },
    revalidate: 10,
  };
}

const PropertyDetails = ({ property }) => {
  // Handle image selection, defaulting to the mainImage or the first gallery image
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

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          src={selectedImage}
          alt={property.title}
          className={styles.heroImage}
        />
        <div className={styles.heroText}>
          <h1>{property.title}</h1>
          <p className={styles.price}>Price: {property.price}</p>
          <p className={styles.location}>Location: {property.location}</p>
        </div>
      </section>

      {/* Property Gallery Section */}
      <section className={styles.gallerySection}>
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

      {/* Description Section */}
      <div className={styles.description}>
        <h2 className={styles.heading}>Description</h2>
        <p>{property.detailedPage?.description}</p>
      </div>

      {/* Additional Information Section */}
      <div className={styles.detailedInformation}>
        <h2 className={styles.heading}>Additional Information</h2>
        <PortableText value={property.detailedPage?.detailedInformation} />
      </div>
    </div>
  );
};

export default PropertyDetails;
