import { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Search from './Search'; // Ensure this path is correct

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleNav = () => setIsNavActive(!isNavActive);
  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerLogo}>
        <Link href="/" passHref>
          <img
            id="logo"
            className={styles.cropClip}
            src="/logo/logo2-1.webp"
            alt="Logo"
          />
        </Link>
      </div>
      <nav className={`${styles.headerNav} ${isNavActive ? styles.active : ''}`}>
        <ul className={styles.navLinks}>
          <li className={styles.headerDropdown}>
            <a href="#">ABOUT</a>
            <div className={styles.dropdownContent}>
              <Link href="/WhyInvest" passHref>Why Invest With Us</Link>
              <Link href="/ManagementTeam" passHref>Management Team</Link>
              <Link href="/awards" passHref>Awards</Link>
              <Link href="/careers" passHref>Careers</Link>
            </div>
          </li>
          <li className={styles.headerDropdown}>
            <a href="#">PROPERTIES</a>
            <div className={styles.dropdownContent}>
              <Link href="/newproperties" passHref>New Properties</Link>
              <Link href="/sellingnow" passHref>Selling Now</Link>
              <Link href="/offers" passHref>Offers</Link>
              <Link href="/soldout" passHref>Sold Out</Link>
              <Link href="/howtobuy" passHref>How To Buy Land</Link>
            </div>
          </li>
          <li className={styles.headerDropdown}>
            <a href="#">PRODUCTS</a>
            <div className={styles.dropdownContent}>
              <Link href="/partnercenter" passHref>Partner Center</Link>
            </div>
          </li>
          <li className={styles.headerDropdown}>
            <a href="#">MEDIA</a>
            <div className={styles.dropdownContent}>
              <Link href="/blogs" passHref>Blogs</Link>
              <Link href="/news" passHref>News</Link>
              <Link href="/gallery" passHref>Gallery</Link>
              <Link href="/newsletter" passHref>Newsletter</Link>
            </div>
          </li>
          <li className={styles.mobileOnly}>
            <Link href="/diaspora" passHref>DIASPORA</Link>
          </li>
          <li className={styles.mobileOnly}>
            <Link href="/faqspage" passHref>FAQS</Link>
          </li>
          <li className={styles.mobileOnly}>
            <Link href="/contact" passHref>CONTACT</Link>
          </li>
        </ul>
      </nav>
      <div className={`${styles.headerSearch} ${isSearchVisible ? styles.show : ''}`}>
        <button id="search-toggle" onClick={toggleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <Search /> {/* Use the Search component here */}
      </div>
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
