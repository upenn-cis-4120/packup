import React, { useState } from 'react';
import styles from '../styles/Activities.module.css';
import Header from '../components/Header';
import ActivityCard from '../components/TripActivitiesCard';

const Activities = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: 'Bali Retreat',
      date: 'Oct 8 - 17',
      activities: ['Scuba Diving', 'Taco Tour'],
      dates: ['10/10', '10/11']
    },
    {
      id: 2,
      title: 'Cancun Weekend',
      date: 'Feb 11 - 14',
      activities: ['Chichén Itzá', 'Xcaret Park', 'Isla Mujeres'],
      dates: ['2/11', '2/12', '2/12']
    }
  ]);

  const handleDelete = (id) => {
    setActivities((prevActivities) => prevActivities.filter((activity) => activity.id !== id));
  };

  return (
    <main className={styles.activities}>
      <Header />
      <section className={styles.activitySection}>
        <h1 className={styles.sectionTitle}>Your Activities</h1>
        <div className={styles.activitiesGrid}>
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              {...activity}
              onDelete={() => handleDelete(activity.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Activities;