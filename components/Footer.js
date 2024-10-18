import styles from './Footer.module.css';
import SocialIcons from './SocialIcons';

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
                <li><a href="/careers">Careers</a></li>
                <li>
                  <a
                    href="https://www.google.com/search?q=101+Properties+Google+reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Testimonials
                  </a>
                </li>
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/howtobuy">How To Buy Land</a></li>
              </ul>
            </div>

            {/* Plots for Sale */}
            <div className={styles.column}>
              <h4>Plots for Sale</h4>
              <ul>
                <li><a href="#">Plots for sale Isinya</a></li>
                <li><a href="#">Plots for sale Kisaju</a></li>
                <li><a href="#">Plots for sale Watamu</a></li>
                <li><a href="#">Plots for sale Lenchani</a></li>
                <li><a href="#">Plots for sale Malindi-Boulala</a></li>
                <li><a href="#">Plots for sale Chuna Estate-Kitengela</a></li>
              </ul>
            </div>

            {/* Office Location */}
            <div className={styles.column}>
              <h4>Office Location</h4>
              <ul>
                <li>
                  <a href="https://www.google.com/maps/place/1%C2%B025'02.7%22S+36%C2%B057'13.3%22E/@-1.4174069,36.9511254,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-1.4174069!4d36.9537003?hl=en&entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D">Signature Mall, Mombasa Road, Nairobi</a>
                </li>
              </ul>
            </div>

            {/* Contacts */}
            <div className={styles.column}>
              <h4>Contacts</h4>
              <ul>
                <li><a href="tel:+254708929173">+254 700 101 101 (Sales)</a></li>
                <li><a href="tel:+254722227066">+254 722 227 066</a></li>
                <li><a href="tel:+254790730302">+254 790 730 302</a></li>
                <li><a href="mailto:101properties@gmail.com">101properties@gmail.com</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <SocialIcons />
        </div>
      </section>

      {/* Footer Bottom Section */}
      <div className={styles.footerBottom}>
        <div className={styles.footerContent}>
          <p>Copyright &copy; 2024 101 Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
