// pages/blogs.js
import { sanityClient, urlFor } from '../sanity/lib/client';
import Link from 'next/link';
import SEO from '../components/SEO';
import styles from './styles/Blogs.module.css';

export default function BlogsPage({ blogs }) {
  return (
    <div className={styles.blogsContainer}>
      <SEO
        title="Blogs - 101 Properties"
        description="Explore our latest blogs about land ownership and real estate in Kenya."
        keywords={['land ownership', 'real estate', 'blogs', 'Kenya']}
        image="https://101-properties.com/blog-image.jpg"
        url="https://101-properties.com/blogs"
      />

      <h1>Our Blogs</h1>
      <div className={styles.blogsList}>
        {blogs.map((blog) => (
          <div className={styles.blogCard} key={blog.uuid}>
            {blog.image ? (
              <img src={urlFor(blog.image).url()} alt={blog.title} className={styles.blogImage} />
            ) : (
              <img src="/path/to/default-image.jpg" alt="Default Image" className={styles.blogImage} />
            )}
            <h3>{blog.title}</h3>
            <p>{blog.briefContent}</p>
            <Link href={`/blogs/${blog.uuid}`} className={styles.readMore}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Fetching data from Sanity for blogs
export async function getServerSideProps() {
    const query = `*[_type == "blog"]|order(publishedAt desc)[0..3]{
      _id, 
      title, 
      briefContent, 
      image, 
      uuid
    }`; 
    const blogs = await sanityClient.fetch(query);
  
    return {
      props: {
        blogs,
      },
    };
  }
