import styles from './SocialIcons.module.css';

export default function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      <a
        href="https://www.facebook.com/101PropertiesKe/"
        target="_blank"
        className={styles.icon}
        aria-label="Facebook"
      >
        <i className="fab fa-facebook-f"></i>
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        className={styles.icon}
        aria-label="Twitter"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        className={styles.icon}
        aria-label="Instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://www.tiktok.com/@101plotsproperties?_t=8pIbUcayFPS&_r=1"
        target="_blank"
        className={styles.icon}
        aria-label="TikTok"
      >
        <i className="fab fa-tiktok"></i>
      </a>
      <a
        href="https://youtube.com/@101propertiesmedia?si=bJiXFvk2sLyZFjo6"
        target="_blank"
        className={styles.icon}
        aria-label="YouTube"
      >
        <i className="fab fa-youtube"></i>
      </a>
    </div>
  );
}
