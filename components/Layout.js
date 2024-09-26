import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import FloatingIcons from './FloatingIcons';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.pageWrapper}>
      <TopBar />
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <FloatingIcons />
      <Footer />
    </div>
  );
}
