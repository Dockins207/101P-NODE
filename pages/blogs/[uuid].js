// BlogDetails.js
import { sanityClient, urlFor } from '../../sanity/lib/client';
import { useRouter } from 'next/router';
import styles from '../styles/BlogDetails.module.css'; // Import styles

export default function BlogDetails({ blog }) {
  const router = useRouter();

  // Handle loading state for fallback pages
  if (router.isFallback) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{blog.title}</h1>
      {blog.image && (
        <img className={styles.image} src={urlFor(blog.image).url()} alt={blog.title} />
      )}
      <div className={styles.content}>
        {/* Render blog content as blocks */}
        {blog.content.map((block, index) => {
          if (block._type === 'block') {
            return (
              <p key={index} className={styles.paragraph}>
                {block.children.map((child) => child.text).join(' ')}
              </p>
            );
          }
          return null;
        })}
      </div>
      <button className={styles.backButton} onClick={() => router.back()}>
        Back to Blogs
      </button>
    </div>
  );
}

// Fetch paths for static generation
export async function getStaticPaths() {
  const query = '*[_type == "blog"].uuid';
  const uuids = await sanityClient.fetch(query);
  const paths = uuids.map((uuid) => ({ params: { uuid } }));

  return {
    paths,
    fallback: true,
  };
}

// Fetch static props for each blog
export async function getStaticProps({ params }) {
  const query = `*[_type == "blog" && uuid == $uuid][0]`;
  const blog = await sanityClient.fetch(query, { uuid: params.uuid });

  return {
    props: {
      blog,
    },
    revalidate: 30,
  };
}
