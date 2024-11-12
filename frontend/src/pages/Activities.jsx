import React from 'react';
import styles from '../styles/Activities.module.css';
import ActivityCard from '../components/ActivityPageActivityCard';

const Activities = () => {
  const activities = [
    {
      title: 'Bali Retreat',
      date: 'Oct 8 - 17',
      activities: ['Scuba Diving', 'Taco Tour'],
      dates: ['10/10', '10/11']
    },
    {
      title: 'Cancun Weekend',
      date: 'Feb 11 - 14',
      activities: ['Chichén Itzá', 'Xcaret Park', 'Isla Mujeres'],
      dates: ['2/11', '2/12', '2/12']
    }
  ];

  return (
    <div className={styles.activitiesContainer}>
      <header className={styles.header}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d04c331-3d41-440a-9184-75062f6acf22?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510" alt="Logo" className={styles.logo} />
        <nav className={styles.navLinks}>
          <a href="#trips">Trips</a>
          <a href="#calendar" className={styles.calendarLink}>Calendar</a>
          <a href="#activities" className={styles.activitiesLink}>Activities</a>
          <a href="#profile">Profile</a>
        </nav>
      </header>
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Your Activities</h1>
        <div className={styles.activitiesWrapper}>
          <div className={styles.activitiesGrid}>
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Activities;