import React from 'react';
import styles from '../styles/TripDetails.module.css';
import Header from '../components/Header';
import TripInfo from '../components/TripInfo';
import ActivityCard from '../components/ActivityCard';

const TripDetails = () => {
  const activities = [
    {
      name: 'Scuba Diving',
      date: 'Oct 10',
      capacity: '3/10 Filled',
      attendees: 3,
      status: 'open'
    },
    {
      name: 'Taco Tour',
      date: 'Oct 11',
      capacity: '5/5 Filled',
      attendees: 5,
      status: 'full'
    }
  ];

  return (
    <main className={styles.tripDetails}>
      <Header />
      <section className={styles.content}>
        <TripInfo />
        <h2 className={styles.sectionTitle}>Activities</h2>
        <div className={styles.activitiesGrid}>
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
        <footer className={styles.footer}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfdfcf41-4f80-4e34-adc6-0510b9717c16?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510" alt="" className={styles.footerImage} />
          <button className={styles.deleteButton}>Delete</button>
        </footer>
      </section>
    </main>
  );
};

export default TripDetails;