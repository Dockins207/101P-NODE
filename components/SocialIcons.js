import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faTiktok, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        href="https://x.com"
        target="_blank"
        className={styles.icon}
        aria-label="X"
      >
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        className={styles.icon}
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://www.tiktok.com/@101plotsproperties?_t=8pIbUcayFPS&_r=1"
        target="_blank"
        className={styles.icon}
        aria-label="TikTok"
      >
        <FontAwesomeIcon icon={faTiktok} />
      </a>
      <a
        href="https://youtube.com/@101propertiesmedia?si=bJiXFvk2sLyZFjo6"
        target="_blank"
        className={styles.icon}
        aria-label="YouTube"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        className={styles.icon}
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
}
