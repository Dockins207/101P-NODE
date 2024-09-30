import { useRouter } from 'next/router';
import { client } from '../sanity/lib/client';
import Link from 'next/link';


export default function SearchResults({ properties, totalPages, currentPage }) {
  const router = useRouter();
  const { location } = router.query;

  return (
    <div>
      <h1>Properties in {location}</h1>
      <ul>
        {properties.length > 0 ? (
          properties.map((property) => (
            <li key={property._id}>
              <h2>{property.title}</h2>
              <p>{property.location}</p>
              <img src={property.mainImage?.asset?.url} alt={property.title} />
            </li>
          ))
        ) : (
          <li>No properties found in {location}.</li>
        )}
      </ul>

      {/* Pagination controls */}
      <div className="pagination">
        {currentPage > 1 && (
          <Link href={`/search-results?location=${location}&page=${currentPage - 1}`}>
            <a>Previous</a>
          </Link>
        )}
        {Array.from({ length: totalPages }, (_, i) => (
          <Link key={i} href={`/search-results?location=${location}&page=${i + 1}`}>
            <a className={currentPage === i + 1 ? 'active' : ''}>{i + 1}</a>
          </Link>
        ))}
        {currentPage < totalPages && (
          <Link href={`/search-results?location=${location}&page=${currentPage + 1}`}>
            <a>Next</a>
          </Link>
        )}
      </div>
    </div>
  );
}

// Get server-side properties for search results
export async function getServerSideProps(context) {
  const { location, page = 1 } = context.query;
  const perPage = 10; // Number of properties per page
  const start = (page - 1) * perPage;

  // Query to fetch limited properties for the current page
  const query = `*[_type in ["featuredProperties", "sellingNow", "offers", "newProperties", "soldOut"] && location match $location] | order(_createdAt desc) {
    _id,
    title,
    location,
    mainImage {
      asset -> {
        url
      }
    }
  } [${start}...${start + perPage}]`;

  const properties = await client.fetch(query, { location: `${location}*` });

  // Get the total number of properties for the location
  const totalQuery = `count(*[_type in ["featuredProperties", "sellingNow", "offers", "newProperties", "soldOut"] && location match $location])`;
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
