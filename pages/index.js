import BannerSection from '../components/BannerSection';
import FeaturedProperties from '../components/FeaturedProperties';
import AboutSection from '../components/AboutSection';
import ClientReviews from '../components/ClientReviews';
import VideoGallery from '../components/VideoGallery';
import StatisticsSection from '../components/StatisticsSection';
import FloatingIcons from '../components/FloatingIcons';
import LatestBlogs from '../components/LatestBlogs';
import BriefFAQs from '../components/BriefFAQs';
import SEO from '../components/SEO';

export default function HomePage() {
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
      <ClientReviews />
      <VideoGallery />
      <StatisticsSection />
      <FloatingIcons />
      <LatestBlogs />
      <BriefFAQs />
    </div>
  );
}
