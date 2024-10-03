import { useEffect, useState } from 'react';
import { sanityClient } from '../sanity/lib/client';
import { urlFor } from '../sanity/lib/image'; // Ensure this imports the URL builder
import styles from './StatisticsSection.module.css';

const StatisticsSection = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://sqb4dkpp.api.sanity.io/v2023-09-17/data/query/production?query=*[_type == "statistics"]{happyClients, yearsOfExperience, titleDeeds, "imageUrl": image.asset->url}'
        );
        const statsData = await response.json();

        if (response.ok && statsData.result.length > 0) {
          const statistics = statsData.result[0]; // Get the first result
          statistics.imageUrl = urlFor(statistics.imageUrl).url(); // Generate the image URL
          setData(statistics);
        } else {
          throw new Error('No statistics found');
        }

      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load statistics.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div className={styles.error}>{error}</div>; // Show error state
  }

  return (
    <section className={styles.statisticsSection}>
      <h2>Current Statistics</h2>
      {data?.imageUrl && (
        <img 
          src={data.imageUrl} 
          alt="Statistics Background" 
          className={styles.statisticsImage} // Add your own CSS class for styling
        />
      )}
      <div className={styles.statisticsContainer}>
        <div className={styles.statBox}>
          <h3 className={styles.statHeading}>Happy Clients</h3>
          <p className={styles.statNumber}>{data?.happyClients || 0}+</p>
        </div>
        <div className={styles.statBox}>
          <h3 className={styles.statHeading}>Years of Experience</h3>
          <p className={styles.statNumber}>{data?.yearsOfExperience || 0}+</p>
        </div>
        <div className={styles.statBox}>
          <h3 className={styles.statHeading}>Title Deeds Awarded</h3>
          <p className={styles.statNumber}>{data?.titleDeeds || 0}+</p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
