import BannerSection from '../components/BannerSection';
import FeaturedProperties from '../components/FeaturedProperties';
import AboutSection from '../components/AboutSection';
import ClientReviews from '../components/ClientReviews';
import VideoGallery from '../components/VideoGallery';
import StatisticsSection from '../components/StatisticsSection';
import FloatingIcons from '../components/FloatingIcons';
import LatestBlogs from '../components/LatestBlogs';
import BriefFAQs from '../components/BriefFAQs';

export default function HomePage() {
  return (
    <div>
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
