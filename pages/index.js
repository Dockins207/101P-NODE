import Head from 'next/head';
import { client } from '../sanity.client';
import Link from 'next/link';

// Import components
import BannerSection from '../components/BannerSection';
import AboutSection from '../components/AboutSection';
import FeaturedProperties from '../components/FeaturedProperties';
import StatisticsSection from '../components/StatisticsSection';
import Testimonials from '../components/Testimonials';
import BriefFAQs from '../components/BriefFAQs';
import ClientReviews from '../components/ClientReviews';
import VideoGallery from '../components/VideoGallery';

export default function Home({ blogs = [] }) {
  return (
    <div className="homepage">
      <Head>
        <title>101 Properties - Your Trusted Real Estate Partner</title>
        <meta name="description" content="Find your dream home with 101 Properties. Browse our latest properties, read our blog, and get expert real estate advice." />
      </Head>
      
      {/* Main Banner Section */}
      <BannerSection />

      <main>
        {/* About Section */}
        <AboutSection />

        {/* Featured Properties */}
        <FeaturedProperties />

        {/* Statistics Section */}
        <StatisticsSection />

        {/* Testimonials */}
        <Testimonials />

        {/* Client Reviews */}
        <ClientReviews />

        {/* Video Gallery */}
        <VideoGallery />

         {/* Blog Section */}
        <section className="blog-section">
          <div className="container">
            <h2>Latest Blog Posts</h2>
            <div className="blog-grid">
              {blogs.map((blog) => (
                <div key={blog._id} className="blog-card">
                  {blog.image && (
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="blog-image"
                    />
                  )}
                  <div className="blog-content">
                    <h3>{blog.title}</h3>
                    <p>{blog.briefContent}</p>
                    <Link href={`/blog/${blog.uuid}`} className="read-more">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brief FAQs */}
        <BriefFAQs />
      </main>

      <style jsx>{`
        .homepage {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color: #333;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        h2 {
          font-size: 2.5rem;
          text-align: center;
          margin: 2rem 0;
          color: #1a202c;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }
        .blog-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }
        .blog-card:hover {
          transform: translateY(-5px);
        }
        .blog-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .blog-content {
          padding: 1.5rem;
        }
        .blog-content h3 {
          font-size: 1.25rem;
          margin: 0 0 1rem 0;
          color: #2d3748;
        }
        .blog-content p {
          color: #4a5568;
          margin-bottom: 1.5rem;
        }
        .read-more {
          display: inline-block;
          background-color: #4299e1;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        .read-more:hover {
          background-color: #3182ce;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const query = `*[_type == "blog"] | order(_createdAt desc)[0..5]{
      _id,
      title,
      briefContent,
      "image": image.asset->url,
      uuid
    }`;
    
    const blogs = await client.fetch(query);

    return {
      props: {
        blogs: blogs || [],
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        blogs: [],
      },
    };
  }
}