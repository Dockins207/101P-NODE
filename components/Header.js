import { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleNav = () => setIsNavActive(!isNavActive);
  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerLogo}>
        {/* No need for `a` tag */}
        <Link href="/" className={styles.cropClip}>
          <img
            id="logo"
            src="/logo/logo2-1.webp" // Ensure the path is correct
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
            <Link href="/diaspora">DIASPORA</Link>
          </li>
          <li className={styles.mobileOnly}>
            <Link href="/faqspage">FAQS</Link>
          </li>
          <li className={styles.mobileOnly}>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>

      {/* Search Component */}
      <div className={`${styles.headerSearch} ${isSearchVisible ? styles.show : ''}`}>
        <button id="search-toggle" onClick={toggleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {isSearchVisible && <Search />}
      </div>

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
