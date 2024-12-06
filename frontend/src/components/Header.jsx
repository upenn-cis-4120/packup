import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2da728e-2fc6-4486-9e80-4f0649458192?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510" 
          alt="Logo" 
          className={styles.logo} 
        />
      </Link>
      <nav className={styles.navigation}>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/" className={styles.navLink}>Trips</Link>
        <Link to="/activities" className={styles.navLink}>Activities</Link>
        <Link to="/calendar" className={styles.navLink}>Calendar</Link>
        {/* <a href="#calendar" className={styles.navLink}>Calendar</a> */}
        <a href="#profile" className={styles.navLink}>Profile</a>
      </nav>
    </header>
  );
};

export default Header;