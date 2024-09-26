import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faTiktok,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer>
      {/* Info Links Section */}
      <section className={styles.infoLinks}>
        <div className={styles.container}>
          <div className={styles.row}>
            {/* Quick Links */}
            <div className={styles.column}>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/search?q=101+Properties+Google+reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="/blogs">Blogs</a>
                </li>
                <li>
                  <a href="/howtobuy">How To Buy Land</a>
                </li>
              </ul>
            </div>

            {/* Plots for Sale */}
            <div className={styles.column}>
              <h4>Plots for Sale</h4>
              <ul>
                <li>
                  <a href="#">Isinya</a>
                </li>
                <li>
                  <a href="#">Kisaju</a>
                </li>
                <li>
                  <a href="#">Watamu</a>
                </li>
                <li>
                  <a href="#">Lenchani</a>
                </li>
                <li>
                  <a href="#">Malindi-Boulala</a>
                </li>
                <li>
                  <a href="#">Chuna Estate-Kitengela</a>
                </li>
              </ul>
            </div>

            {/* Office Location */}
            <div className={styles.column}>
              <h4>Office Location</h4>
              <ul>
                <li>
                  <a href="https://www.google.com/maps/place/...">Location</a>
                </li>
              </ul>
            </div>

            {/* Contacts */}
            <div className={styles.column}>
              <h4>Contacts</h4>
              <ul>
                <li>
                  <a href="tel:+254708929173">+2547 0892 9173(Sales)</a>
                </li>
                <li>
                  <a href="tel:+254722227066">+2547 2222 7066</a>
                </li>
                <li>
                  <a href="tel:+254790730302">+2547 9073 0302</a>
                </li>
                <li>
                  <a href="mailto:101properties@gmail.com">
                    101properties@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/101PropertiesKe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.tiktok.com/@101plotsproperties?_t=8pIbUcayFPS&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://youtube.com/@101propertiesmedia?si=bJiXFvk2sLyZFjo6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://www.google.com/maps/place/..."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Bottom Section */}
      <div className={styles.footerBottom}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 101 Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
