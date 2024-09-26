import styles from './styles/Gallery.module.css';

export default function Gallery() {
  return (
    <>
      <h1 className={styles.title}>Welcome to our Gallery</h1>
      <section className={styles.galleryContainer}>
        <div
          className={styles.categoryBox}
          onClick={() => (window.location.href = '/staffgallery')}
        >
          <div className={styles.imageStack}>
            <img src="/staff photos/David2.png" alt="Staff Photo 1" />
            <img src="/staff photos/gtrude2.png" alt="Staff Photo 2" />
            <img src="/staff photos/rahma2.png" alt="Staff Photo 3" />
          </div>
          <div className={styles.contentSection}>
            <h2>Staff</h2>
            <p>Explore images of our hardworking team.</p>
          </div>
          <div className={styles.popup}></div>
        </div>

        <div
          className={styles.categoryBox}
          onClick={() => (window.location.href = '/sitevisitsgallery')}
        >
          <div className={styles.imageStack}>
            <img
              src="/101 properties imgs/people14.jpeg"
              alt="site Visit Photo 1"
            />
            <img
              src="/101 properties imgs/people5.jpeg"
              alt="site Visit Photo 2"
            />
            <img
              src="/101 properties imgs/people7.jpeg"
              alt="site Visit Photo 3"
            />
          </div>
          <div className={styles.contentSection}>
            <h2>Site Visits</h2>
            <p>See our property visit images.</p>
          </div>
          <div className={styles.popup}>
            Click to view all Land Visit images
          </div>
        </div>

        <div
          className={styles.categoryBox}
          onClick={() => (window.location.href = '/ceremoniesgallery')}
        >
          <div className={styles.imageStack}>
            <img
              src="/101 properties imgs/people12.jpeg"
              alt="Ceremony Photo 1"
            />
            <img
              src="/101 properties imgs/people11.jpeg"
              alt="Ceremony Photo 2"
            />
            <img
              src="/101 properties imgs/people1.jpeg"
              alt="Ceremony Photo 3"
            />
          </div>
          <div className={styles.contentSection}>
            <h2>Ceremonies</h2>
            <p>Memorable moments from company events.</p>
          </div>
          <div className={styles.popup}>Click to view all Ceremony images</div>
        </div>

        <div
          className={styles.categoryBox}
          onClick={() => (window.location.href = '/others')}
        >
          <div className={styles.imageStack}>
            <img
              src="/101 properties imgs/people2.jpeg"
              alt="Other Category Photo 1"
            />
            <img
              src="/101 properties imgs/people4.jpeg"
              alt="Other Category Photo 2"
            />
            <img
              src="/101 properties imgs/people10.jpeg"
              alt="Other Category Photo 3"
            />
          </div>
          <div className={styles.contentSection}>
            <h2>Others</h2>
            <p>Explore other memorable moments from our journey.</p>
          </div>
          <div className={styles.popup}>
            Click to view other category images
          </div>
        </div>

        <div
          className={styles.categoryBox}
          onClick={() => (window.location.href = '/Teamhike')}
        >
          <div className={styles.imageStack}>
            <img src="#" alt="Team Hikes" />
            <img src="#" alt="Team Hikes" />
            <img src="#" alt="Team Hikes" />
          </div>
          <div className={styles.contentSection}>
            <h2>Team Hikes</h2>
            <p>Experience our team adventures.</p>
          </div>
          <div className={styles.popup}>
            Click to view other category images
          </div>
        </div>

        <div
          className={styles.categoryBox}
          onClick={() => (window.location.href = '/Charityevents')}
        >
          <div className={styles.imageStack}>
            <img src="#" alt="Charity events" />
            <img src="#" alt="Charity events" />
            <img src="#" alt="Charity events" />
          </div>
          <div className={styles.contentSection}>
            <h2>Charity events</h2>
            <p>Giving back to our community together.</p>
          </div>
          <div className={styles.popup}>
            Click to view other category images
          </div>
        </div>
      </section>
    </>
  );
}
