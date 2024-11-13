import React from 'react';
import styles from '../styles/TripInfo.module.css';

const TripInfo = () => {
  return (
    <section className={styles.tripInfo}>
      <div className={styles.tripHeader}>
        <div className={styles.tripTitle}>
          <h1 className={styles.tripName}>Bali Retreat</h1>
          <p className={styles.tripDate}>Oct 8 - 17</p>
        </div>
        <div className={styles.tripActions}>
          <span className={styles.attendees}>7 Attendees</span>
          <button className={styles.editButton}>Edit Details</button>
        </div>
      </div>
      <h2 className={styles.descriptionTitle}>Description</h2>
      <p className={styles.description}>This will be a fun trip!</p>
    </section>
  );
};

export default TripInfo;