import { useRouter } from 'next/router';
import { sanityClient as client } from '../sanity/lib/client';
import Link from 'next/link';
import styles from './styles/Properties.module.css';

export default function NewSearchResults({ properties, totalPages, currentPage }) {
  const router = useRouter();
  const { location } = router.query;

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Explore Properties Available in {location}
      </h1>
      <p className={styles.headerText}>Browse our current listings of properties ready for sale.</p>

      <div className={styles.gridContainer}>
        {properties.length > 0 ? (
          properties.map((property) => (
            <Link key={property._id} href={`/property/${property.slug.current}`} passHref>
              <div className={styles.propertyCard}>
                <img src={property.mainImage?.asset?.url} alt={property.title} className={styles.propertyImage} />
                <div className={styles.propertyDetails}>
                  <h2 className={styles.propertyTitle}>{property.title}</h2>
                  <p className={styles.propertyLocation}>{property.location}</p>
                  <p className={styles.propertyPrice}>Ksh. {property.price}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No properties found in {location}.</p>
        )}
      </div>

      {/* Pagination controls */}
      <div className={styles.pagination}>
        {currentPage > 1 && (
          <Link href={`/search-results?location=${location}&page=${currentPage - 1}`}>
            Previous
          </Link>
        )}
        {Array.from({ length: totalPages }, (_, i) => (
          <Link key={i} href={`/search-results?location=${location}&page=${i + 1}`}>
            <span className={currentPage === i + 1 ? styles.active : ''}>{i + 1}</span>
          </Link>
        ))}
        {currentPage < totalPages && (
          <Link href={`/search-results?location=${location}&page=${currentPage + 1}`}>
            Next
          </Link>
        )}
      </div>
    </div>
  );
}

// Get server-side properties for search results
export async function getServerSideProps(context) {
  const { location, page = 1 } = context.query;
  const perPage = 10;
  const start = (page - 1) * perPage;

  // Query to fetch limited properties for the current page
  const query = `*[_type in ["featuredProperties", "sellingNow", "offers", "newProperties"] && location match $location] | order(_createdAt desc) {
    _id,
    title,
    location,
    mainImage {
      asset -> {
        url
      }
    },
    price,
    slug // Ensure you include the slug in the query
  } [${start}...${start + perPage}]`;

  const properties = await client.fetch(query, { location: `${location}*` });

  // Get the total number of properties for the location
  const totalQuery = `count(*[_type in ["featuredProperties", "sellingNow", "offers", "newProperties"] && location match $location])`;
  const totalResults = await client.fetch(totalQuery, { location: `${location}*` });

  const totalPages = Math.ceil(totalResults / perPage);

  return {
    props: {
      properties,
      totalPages,
      currentPage: Number(page),
    },
  };
}
