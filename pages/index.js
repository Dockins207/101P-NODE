import BannerSection from '../components/BannerSection';
import FeaturedProperties from '../components/FeaturedProperties';
import AboutSection from '../components/AboutSection';
import StatisticsSection from '../components/StatisticsSection';
import FloatingIcons from '../components/FloatingIcons';
import BriefFAQs from '../components/BriefFAQs';
import SEO from '../components/SEO';
import { sanityClient, urlFor } from '../sanity/lib/client';
import styles from './styles/Blogs.module.css'; 
import Testimonials from '../components/Testimonials';

export default function HomePage({ blogs }) {
  return (
    <div>
      {/* Add the SEO component here */}
      <SEO
        title="101 Properties - Buy Affordable Land in Kenya"
        description="Discover affordable land for sale in Kenya. 101 Properties offers flexible payment plans and guaranteed title deeds for buyers."
        keywords={['land for sale', 'buy land in Kenya', 'affordable land', 'real estate Kenya', 'property Kenya']}
        image="https://101-properties.com/home-image.jpg"
        url="https://101-properties.com/"
      />

      {/* Page Sections */}
      <BannerSection />
      <AboutSection />
      <FeaturedProperties />
      <Testimonials />
      <StatisticsSection />
      <FloatingIcons />

      <section>
        <h2>Latest Blogs</h2>
        <div className={styles.blogsContainer}>
          <div className={styles.blogsList}>
            {blogs && blogs.length > 0 ? (
              blogs.slice(0, 4).map((blog) => (  
                <div className={styles.blogCard} key={blog._id}>
                  {blog.image ? (
                    <img
                      className={styles.blogImage}
                      src={urlFor(blog.image).url()}
                      alt={blog.title}
                    />
                  ) : (
                    <img
                      className={styles.blogImage}
                      src="/path/to/default-image.jpg"
                      alt="Default Image"
                    />
                  )}
                  {/* Make the title clickable */}
                  <h3>
                    <a href={`/blog/${blog.uuid}`} className={styles.blogLink}>
                      {blog.title}
                    </a>
                  </h3>
                  <p>{blog.briefContent}</p>
                </div>
              ))
            ) : (
              <p>No blogs available at this time.</p>
            )}
          </div>
        </div>
      </section>

      <BriefFAQs />
    </div>
  );
}

// Fetching data from Sanity for blogs
export async function getServerSideProps() {
  const query = `*[_type == "blog"]{_id, title, briefContent, image, uuid}`;
  const blogs = await sanityClient.fetch(query);

  return {
    props: {
      blogs,
    },
  };
}