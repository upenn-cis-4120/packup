import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2da728e-2fc6-4486-9e80-4f0649458192?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510" alt="" className={styles.logo} />
      <nav className={styles.navigation}>
        <a href="#trips" className={styles.navLink}>Trips</a>
        <a href="#calendar" className={styles.navLink}>Calendar</a>
        <a href="#activities" className={styles.navLink}>Activities</a>
        <a href="#profile" className={styles.navLink}>Profile</a>
      </nav>
    </header>
  );
};

export default Header;