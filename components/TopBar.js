import styles from './TopBar.module.css';
import SocialIcons from './SocialIcons';  // Import SocialIcons component

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      {/* Social Media Icons */}
      <SocialIcons />  {/* Use SocialIcons component */}

      {/* Contact Info */}
      <div className={styles.contactInfo}>
        <span className={styles.topBarEmail}>
          <a href="mailto:101properties@gmail.com" className={styles.contactLink}>
          <strong>101properties@gmail.com </strong>
          </a>
        </span>
        <span className={styles.topBarPhone}>
          <a href="tel:+254700101101" className={styles.contactLink}>
           <strong>+254 700 101 101 </strong>
          </a>
          <a href="tel:+254722227066" className={styles.contactLink}>
            <strong> +254 722 227 066</strong>
          </a>
        </span>
      </div>
    </div>
  );
}
