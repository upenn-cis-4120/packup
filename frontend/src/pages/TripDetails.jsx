import React from 'react';
import styles from '../styles/TripDetails.module.css';
import Header from '../components/Header';
import TripInfo from '../components/TripInfo';
import ActivityCard from '../components/ActivityOverviewCard';

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
          <button className={styles.addActivityButton} aria-label="Add new trip">+</button>
          <button className={styles.deleteButton}>Delete</button>
        </footer>
      </section>
    </main>
  );
};

export default TripDetails;