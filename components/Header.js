import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleNav = () => setIsNavActive(!isNavActive);
  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);

  // Function to control the visibility of the header on scroll
  const controlHeaderVisibility = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeaderVisibility);
      return () => window.removeEventListener('scroll', controlHeaderVisibility);
    }
  }, [lastScrollY]);

  const handleLinkClick = (e, isExternalLink) => {
    if (isExternalLink) {
      setIsNavActive(false); // Close the menu for external links
    }
  };

  return (
    <header className={`${styles.headerWrapper} ${isHeaderVisible ? '' : styles.hidden}`}>
      <div className={styles.headerLogo}>
        <Link href="/" className={styles.cropClip}>
          <img
            id="logo"
            src="/logo/logo2-1-3-1.png"
            alt="Logo"
          />
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

          {/* Mobile-only Links */}
          <li className={styles.mobileOnly}>
            <Link href="/diaspora" onClick={(e) => handleLinkClick(e, true)}>DIASPORA</Link>
          </li>
          <li className={styles.mobileOnly}>
            <Link href="/faqspage" onClick={(e) => handleLinkClick(e, true)}>FAQS</Link>
          </li>
          <li className={styles.mobileOnly}>
            <Link href="/contact" onClick={(e) => handleLinkClick(e, true)}>CONTACT</Link>
          </li>

          {/* Search Icon inside hamburger menu */}
          <li className={styles.mobileSearch}>
            <button id="search-toggle" onClick={toggleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
            {isSearchVisible && <Search />}
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu */}
      <button
        className={`${styles.hamburger} ${isNavActive ? styles.active : ''}`}
        aria-label="Menu Toggle"
        onClick={toggleNav}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </header>
  );
}
