import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Profile.module.css';
import Header from '../components/Header';

const Profile = () => {
  const navigate = useNavigate();

  const handleNavigateToTrips = () => {
    navigate('/');
  };

  return (
    <main className={styles.profile}>
      <Header />
      <section className={styles.profileSection}>
        <h1 className={styles.sectionTitle}>Your Profile</h1>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Account</h2>
            <p>Manage your account details and preferences.</p>
            <button className={styles.cardButton}>Edit Account</button>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Settings</h2>
            <p>Customize your app settings and notifications.</p>
            <button className={styles.cardButton}>Edit Settings</button>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Friends</h2>
            <p>View and manage your friends or trip companions.</p>
            <button className={styles.cardButton}>View Friends</button>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>My Trips</h2>
            <p>Access all your trips and plans in one place.</p>
            <button 
              className={styles.cardButton} 
              onClick={handleNavigateToTrips}
            >
              View Trips
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;