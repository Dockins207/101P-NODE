import Head from 'next/head';
import styles from './styles/Gallery.module.css';

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - Company Name</title>
        <meta
          name="description"
          content="Explore our gallery showcasing staff, site visits, ceremonies, team hikes, and charity events. Discover memorable moments captured through images."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="gallery, staff photos, site visits, ceremonies, team hikes, charity events" />
      </Head>
      <h1 className={styles.title}>Welcome to Our Gallery</h1>
      <section className={styles.galleryContainer}>
        <div
          className={styles.categoryBox}
          onClick={() => (window.location.href = '/staffgallery')}
        >
          <div className={styles.imageStack}>
            <img src="/staff photos/David2.png" alt="Staff member David" />
            <img src="/staff photos/gtrude2.png" alt="Staff member Gracie" />
            <img src="/staff photos/rahma2.png" alt="Staff member Rahma" />
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
              alt="Site visit with clients"
            />
            <img
              src="/101 properties imgs/people5.jpeg"
              alt="Group at site visit"
            />
            <img
              src="/101 properties imgs/people7.jpeg"
              alt="Property site visit"
            />
          </div>
          <div className={styles.contentSection}>
            <h2>Site Visits</h2>
            <p>See our property visit images.</p>
          </div>
          <div className={styles.popup}>
            Click to view all land visit images
          </div>
        </div>

        <div
          className={styles.categoryBox}
          onClick={() => (window.location.href = '/ceremoniesgallery')}
        >
          <div className={styles.imageStack}>
            <img
              src="/101 properties imgs/people12.jpeg"
              alt="Ceremony moment 1"
            />
            <img
              src="/101 properties imgs/people11.jpeg"
              alt="Ceremony moment 2"
            />
            <img
              src="/101 properties imgs/people1.jpeg"
              alt="Ceremony moment 3"
            />
          </div>
          <div className={styles.contentSection}>
            <h2>Ceremonies</h2>
            <p>Memorable moments from company events.</p>
          </div>
          <div className={styles.popup}>Click to view all ceremony images</div>
        </div>

        <div
          className={styles.categoryBox}
          onClick={() => (window.location.href = '/others')}
        >
          <div className={styles.imageStack}>
            <img
              src="/101 properties imgs/people2.jpeg"
              alt="Other memorable moment 1"
            />
            <img
              src="/101 properties imgs/people4.jpeg"
              alt="Other memorable moment 2"
            />
            <img
              src="/101 properties imgs/people10.jpeg"
              alt="Other memorable moment 3"
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
            <img src="#" alt="Team hike adventure 1" />
            <img src="#" alt="Team hike adventure 2" />
            <img src="#" alt="Team hike adventure 3" />
          </div>
          <div className={styles.contentSection}>
            <h2>Team Hikes</h2>
            <p>Experience our team adventures.</p>
          </div>
          <div className={styles.popup}>
            Click to view team hike images
          </div>
        </div>

        <div
          className={styles.categoryBox}
          onClick={() => (window.location.href = '/Charityevents')}
        >
          <div className={styles.imageStack}>
            <img src="#" alt="Charity event 1" />
            <img src="#" alt="Charity event 2" />
            <img src="#" alt="Charity event 3" />
          </div>
          <div className={styles.contentSection}>
            <h2>Charity Events</h2>
            <p>Giving back to our community together.</p>
          </div>
          <div className={styles.popup}>
            Click to view charity event images
          </div>
        </div>
      </section>
    </>
  );
}
