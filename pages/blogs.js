import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './styles/Blogs.module.css';

export default function Blogs() {
  const [popupContent, setPopupContent] = useState({ title: '', content: '' });
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    document.querySelectorAll('.blogPost').forEach((post) => {
      post.addEventListener('click', () => {
        setPopupContent({
          title: post.getAttribute('data-title'),
          content: post.getAttribute('data-content'),
        });
        setPopupVisible(true);
      });
    });

    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => setPopupVisible(false));
    }

    window.addEventListener('click', (event) => {
      const popup = document.getElementById('popup');
      if (popup && event.target === popup) {
        setPopupVisible(false);
      }
    });

    return () => {
      // Cleanup event listeners
      document.querySelectorAll('.blogPost').forEach((post) => {
        post.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="Site keywords here" />
        <meta name="description" content="" />
        <meta name="copyright" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Blogs</title>
      </Head>
      <main className={styles.blogSection}>
        <div className={styles.blogGrid}>
          <article
            className={styles.blogPost}
            data-title="Unlocking Value: How the Nairobi-Mombasa Expressway Will Transform Your Investment in Kitengela and its Environ"
            data-content="Kitengela, a fast-growing suburb just south of Nairobi, has long been a focal point for real estate investment in Kenya. Known for its strategic location................"
          >
            <h2>
              Unlocking Value: How the Nairobi-Mombasa Expressway Will Transform
              Your Investment in Kitengela and its Environ
            </h2>
            <p className={styles.blogExcerpt}>
              Kitengela, a fast-growing suburb just south of Nairobi, has long
              been a focal point for real estate investment in Kenya. Known for
              its strategic location................
            </p>
            <a
              href="../101 properties pages/blogs/Kitengela A Prime Investment Opportunity.html"
              className={styles.readMore}
            >
              Read More
            </a>
          </article>
          <article
            className={styles.blogPost}
            data-title="The Proposed Isinya-Konza Bypass: A New Frontier for Real Estate Investment in Kajiado County"
            data-content="Kajiado County, with its expansive landscapes and strategic location, has long been a jewel for real estate investors in Kenya. The region, which includes fast-growing areas like Isinya, Lenchani, Kitengela, and Kisaju, is set to experience a transformative boost with the proposed Isinya-Konza bypass. This major infrastructure project promises to enhance connectivity, drive economic growth, and unlock new opportunities for real estate investors...................................."
          >
            <h2>
              The Proposed Isinya-Konza Bypass: A New Frontier for Real Estate
              Investment in Kajiado County
            </h2>
            <p className={styles.blogExcerpt}>
              Kajiado County, with its expansive landscapes and strategic
              location, has long been a jewel for real estate investors in
              Kenya. The region, which includes fast-growing areas like Isinya,
              Lenchani, Kitengela, and Kisaju, is set to experience a
              transformative boost with the proposed Isinya-Konza bypass. This
              major infrastructure project promises to enhance connectivity,
              drive economic growth, and unlock new opportunities for real
              estate investors....................................
            </p>
            <a
              href="../101 properties pages/blogs/The Proposed Isinya-Konza Bypass.html"
              className={styles.readMore}
            >
              Read More
            </a>
          </article>
          <article
            className={styles.blogPost}
            data-title="Konza Technopolis: A Game-Changer for Real Estate Investments in Kenya"
            data-content="Konza Technopolis, often referred to as Kenya's Silicon Savannah, is more than just a grand vision—it's a burgeoning reality set to transform the country's real estate landscape. As one of Africa’s most ambitious smart city projects, Konza is poised to become a hub of innovation, technology, and sustainable urban living. For real estate investors, this presents a golden opportunity to capitalize on what is emerging as one of Kenya’s most dynamic growth areas........."
          >
            <h2>
              Konza Technopolis: A Game-Changer for Real Estate Investments in
              Kenya
            </h2>
            <p className={styles.blogExcerpt}>
              Konza Technopolis, often referred to as Kenya's Silicon Savannah,
              is more than just a grand vision—it's a burgeoning reality set to
              transform the country's real estate landscape. As one of Africa’s
              most ambitious smart city projects, Konza is poised to become a
              hub of innovation, technology, and sustainable urban living. For
              real estate investors, this presents a golden opportunity to
              capitalize on what is emerging as one of Kenya’s most dynamic
              growth areas.........
            </p>
            <a
              href="../101 properties pages/blogs/Konza Technopolis.html"
              className={styles.readMore}
            >
              Read More
            </a>
          </article>
        </div>
      </main>

      {popupVisible && (
        <div id="popup" className={styles.popup}>
          <div className={styles.popupContent}>
            <span className="close" onClick={() => setPopupVisible(false)}>
              &times;
            </span>
            <h2 id="popup-title">{popupContent.title}</h2>
            <p id="popup-content">{popupContent.content}</p>
          </div>
        </div>
      )}
    </>
  );
}
