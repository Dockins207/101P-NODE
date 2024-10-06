import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import styles from './header.module.css';
import SocialIcons from './SocialIcons';

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleNav = () => setIsNavActive(!isNavActive);
  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);

  const handleLinkClick = (e, isExternalLink) => {
    if (isExternalLink) {
      setIsNavActive(false);
    }
  };

  return (
    <header className={styles.headerWrapper}>
      {/* Top Section with clickable email, phone, and social icons */}
      <div className={styles.topSection}>
      <div className={styles.topSection}>
        <p>
          <strong>
            <a href="tel:+254700101101" className={styles.contactLink}>+254 700 101 101</a>| 
            <a href="mailto:101properties@gmail.com" className={styles.contactLink}> 101properties@gmail.com</a>
          </strong>
        </p>
        <SocialIcons />
      </div>
      </div>

      {/* Bottom Section with Logo and Navigation */}
      <div className={styles.bottomSection}>
        <div className={styles.headerLogo}>
          <Link href="/">
            <img id="logo" src="/logo/logo2-1-3-.png" alt="Logo" />
          </Link>
        </div>

        <nav className={`${styles.headerNav} ${isNavActive ? styles.active : ''}`}>
          <ul className={styles.navLinks}>
            <li className={styles.headerDropdown}>
              <Link href="#">ABOUT</Link>
              <div className={styles.dropdownContent}>
                <Link href="/WhyInvest">Why Invest With Us</Link>
                <Link href="/ManagementTeam">Management Team</Link>
                <Link href="/awards">Awards</Link>
                <Link href="/careers">Careers</Link>
              </div>
            </li>
            <li className={styles.headerDropdown}>
              <Link href="#">PROPERTIES</Link>
              <div className={styles.dropdownContent}>
                <Link href="/newproperties">New Properties</Link>
                <Link href="/sellingnow">Selling Now</Link>
                <Link href="/offers">Offers</Link>
                <Link href="/soldout">Sold Out</Link>
                <Link href="/howtobuy">How To Buy Land</Link>
              </div>
            </li>
            <li className={styles.headerDropdown}>
              <Link href="#">PRODUCTS</Link>
              <div className={styles.dropdownContent}>
                <Link href="/partnercenter">Partner Center</Link>
              </div>
            </li>
            <li className={styles.headerDropdown}>
              <Link href="#">MEDIA</Link>
              <div className={styles.dropdownContent}>
                <Link href="/blogs">Blogs</Link>
                <Link href="/news">News</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/newsletter">Newsletter</Link>
              </div>
            </li>

            <li className={styles.mobileOnly}>
              <Link href="/diaspora" onClick={(e) => handleLinkClick(e, true)}>DIASPORA</Link>
            </li>
            <li className={styles.mobileOnly}>
              <Link href="/faqspage" onClick={(e) => handleLinkClick(e, true)}>FAQS</Link>
            </li>
            <li className={styles.mobileOnly}>
              <Link href="/contact" onClick={(e) => handleLinkClick(e, true)}>CONTACT</Link>
            </li>

            <li className={styles.mobileSearch}>
  {isSearchVisible && (
    <div className={styles.searchContainer}>
      <Search /> {/* Search Component */}
    </div>
  )}
  <button id="search-toggle" onClick={toggleSearch}>
    <FontAwesomeIcon icon={faSearch} />
  </button>
</li>

          </ul>
        </nav>

        <button
          className={`${styles.hamburger} ${isNavActive ? styles.active : ''}`}
          aria-label="Menu Toggle"
          onClick={toggleNav}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </header>
  );
}
