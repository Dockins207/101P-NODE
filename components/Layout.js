import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingIcons from './FloatingIcons';
import styles from './Layout.module.css';
// import Notice from './Notice';


export default function Layout({ children }) {
  return (
    <div className={styles.pageWrapper}>
      {/* <Notice /> */}
      <Header />
      <main className={styles.mainContent}>
        {children} 
      </main>
      <FloatingIcons />
      <Footer />
    </div>
  );
}
