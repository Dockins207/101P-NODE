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
            <h3>The Proposed Isinya-Konza Bypass</h3>
            <p>
              Kajiado County, with its expansive landscapes and strategic
              location, has long been a jewel for real estate investors in
              Kenya. The region, which includes fast-growing areas like Isinya,
              Lenchani, Kitengela, and Kisaju, is set to experience a
              transformative boost with the proposed Isinya-Konza bypass. This
              major infrastructure project promises to enhance connectivity,
              drive economic growth, and unlock new opportunities for real
              estate investors......................
            </p>
          </div>
          <div className={styles.blogCard}>
            <img src="/101 properties imgs/konzacity.jpg" alt="Blog 2" />
            <h3>
              Konza Technopolis: A Game-Changer for Real Estate Investments in
              Kenya
            </h3>
            <p>
              Konza Technopolis, often referred to as Kenya's Silicon Savannah,
              is more than just a grand vision—it's a burgeoning reality set to
              transform the country's real estate landscape. As one of Africa’s
              most ambitious smart city projects, Konza is poised to become a
              hub of innovation, technology, and sustainable urban living. For
              real estate investors, this presents a golden opportunity to
              capitalize on what is emerging as one of Kenya’s most dynamic
              growth areas..........
            </p>
          </div>
          <div className={styles.blogCard}>
            <img src="/101 properties imgs/nrb-mbsa.jpg" alt="Blog 3" />
            <h3>
              How the Nairobi-Mombasa Expressway Will Transform Your Investment
              in Kitengela and its Environ
            </h3>
            <p>
              Kitengela, a fast-growing suburb just south of Nairobi, has long
              been a focal point for real estate investment in Kenya. Known for
              its strategic location.........
            </p>
          </div>
        </div>
        <div className={styles.viewMore}>
          <a
            href="/101 properties pages/blogs.html"
            className={styles.seeAllLink}
          >
            View More Blogs &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
