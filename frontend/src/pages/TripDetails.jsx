import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/TripDetails.module.css';
import Header from '../components/Header';
import TripInfo from '../components/TripInfo';
import ActivityCard from '../components/ActivityOverviewCard';

const TripDetails = () => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setActivities((prevActivities) => prevActivities.filter((activity) => activity.id !== id));
  };

  const [activities, setActivities] = useState([
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
  ]);

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <main className={styles.tripDetails}>
      <Header />
      <section className={styles.content}>
        <button
          className={styles.backButton}
          onClick={handleBack}
          aria-label="Go back to trip card"
        >
          Back
        </button>
        <TripInfo />
        <h2 className={styles.sectionTitle}>Activities</h2>
        <div className={styles.activitiesGrid}>
          {activities.map((activity, index) => (
            <ActivityCard key={index} 
            {...activity} 
            onDelete={() => handleDelete(activity.id)}
            />
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