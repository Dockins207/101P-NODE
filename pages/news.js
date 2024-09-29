import { useState, useEffect } from 'react';
import styles from './styles/News.module.css';
import FeaturedProperties from '../components/FeaturedProperties';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [popupContent, setPopupContent] = useState({ title: '', body: '' });
  const [popupVisible, setPopupVisible] = useState(false);

  const newsData = [
    {
      category: 'market',
      imgSrc: 'market.jpg',
      title: 'Housing Market Trends in 2024',
      excerpt: 'The housing market is projected to grow significantly, especially in urban areas...',
    },
    {
      category: 'projects',
      imgSrc: 'project.jpg',
      title: 'New High-rise Development in the City',
      excerpt: 'A new luxury high-rise is being developed downtown, offering panoramic city views...',
    },
    {
      category: 'tips',
      imgSrc: 'tips.jpg',
      title: 'Real Estate Investment Tips',
      excerpt: 'Experts share the best investment strategies for the real estate market in 2024...',
    },
    {
      category: 'market',
      imgSrc: 'market2.jpg',
      title: 'How Rising Interest Rates Affect Housing',
      excerpt: 'The increase in interest rates is impacting home buyers and real estate developers...',
    },
  ];

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleFilterChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const openPopup = (title, body) => {
    setPopupContent({ title, body });
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closePopup();
    }
  };

  useEffect(() => {
    if (popupVisible) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [popupVisible]);

  const filteredNews = newsData.filter(
    (news) =>
      (selectedCategory === 'all' || news.category === selectedCategory) &&
      news.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className={styles.newsContainer}>
      <h1>Latest Real Estate News</h1>

      {/* Search and Filter Section */}
      <div className={styles.filterSearch}>
        <input
          type="text"
          id="news-search"
          placeholder="Search news..."
          value={searchQuery}
          onChange={handleSearch}
          className={styles.newsSearch}
          aria-label="Search news"
        />
        <select
          id="news-filter"
          value={selectedCategory}
          onChange={handleFilterChange}
          className={styles.newsFilter}
          aria-label="Filter news by category"
        >
          <option value="all">All</option>
          <option value="market">Market News</option>
          <option value="projects">New Projects</option>
          <option value="tips">Investment Tips</option>
        </select>
      </div>

      {/* News Section */}
      <section id="news-articles">
        {filteredNews.length > 0 ? (
          filteredNews.map((news, index) => (
            <article
              key={index}
              className={`${styles.newsCard}`}
              onClick={() => openPopup(news.title, news.excerpt)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && openPopup(news.title, news.excerpt)}
            >
              <img
                src={news.imgSrc}
                alt={news.title}
                className={styles.newsCardImg}
                loading="lazy"
              />
              <header>
                <h3>{news.title}</h3>
              </header>
              <p className={styles.newsExcerpt}>{news.excerpt}</p>
            </article>
          ))
        ) : (
          <p>No news found.</p>
        )}
      </section>

      {/* Popup Modal */}
      {popupVisible && (
        <div id="news-popup" className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.close} onClick={closePopup} role="button" tabIndex={0} aria-label="Close popup">
              &times;
            </span>
            <h3>{popupContent.title}</h3>
            <p>{popupContent.body}</p>
          </div>
        </div>
      )}
      <FeaturedProperties />
    </div>
  );
};

export default News;
