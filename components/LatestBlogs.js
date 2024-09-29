// components/LatestBlogs.js

import styles from './LatestBlogs.module.css';

const LatestBlogs = () => {
  return (
    <section className={styles.latestBlogs}>
      <div className={styles.container}>
        <h2>Latest Blogs</h2>
        <div className={styles.row}>
          <div className={styles.blogCard}>
            <img src="/101 properties imgs/isinyakonza.jpg" alt="Blog 1" />
            <h3>
              <a href="/blogs" className={styles.blogTitle}>The Proposed Isinya-Konza Bypass</a>
            </h3>
          </div>
          <div className={styles.blogCard}>
            <img src="/101 properties imgs/konzacity.jpg" alt="Blog 2" />
            <h3>
              <a href="/blogs" className={styles.blogTitle}>Konza Technopolis: A Game-Changer for Real Estate Investments in Kenya</a>
            </h3>
          </div>
          <div className={styles.blogCard}>
            <img src="/101 properties imgs/nrb-mbsa.jpg" alt="Blog 3" />
            <h3>
              <a href="/blogs" className={styles.blogTitle}>How the Nairobi-Mombasa Expressway Will Transform Your Investment in Kitengela and its Environs</a>
            </h3>
          </div>
        </div>
        <div className={styles.viewMore}>
          <a href="../pages/blogs" className={styles.seeAllLink}>
            View More Blogs &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
