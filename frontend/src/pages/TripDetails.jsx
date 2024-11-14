import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/TripDetails.module.css';
import Header from '../components/Header';
import TripInfo from '../components/TripInfo';
import ActivityCard from '../components/ActivityOverviewCard';
import AddActivityForm from '../components/AddActivityForm';

const TripDetails = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [activities, setActivities] = useState([
    {
      name: 'Scuba Diving',
      date: 'Oct 10',
      capacity: '3/10 Filled',
      attendees: 3,
      status: 'open',
      description: 'Placeholder'
    },
    {
      name: 'Taco Tour',
      date: 'Oct 11',
      capacity: '5/5 Filled',
      attendees: 5,
      status: 'full',
      description: 'Fake description'
    }
  ]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = (id) => {
    setActivities((prevActivities) => prevActivities.filter((activity) => activity.id !== id));
  };

  const handleAddActivity = (newActivity) => {
    setActivities((prevActivities) => [...prevActivities, newActivity]);
    setShowForm(false);
  };

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
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
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              {...activity}
              onDelete={() => handleDelete(activity.id)}
            />
          ))}
        </div>
        <footer className={styles.footer}>
          <button
            className={styles.addActivityButton}
            aria-label="Add new activity"
            onClick={handleToggleForm} // Show form when clicked
          >
            +
          </button>
          <button className={styles.deleteButton}>Delete</button>
        </footer>
        {showForm && (
          <AddActivityForm onAddActivity={handleAddActivity} onClose={handleToggleForm} />
        )}
      </section>
    </main>
  );
};

export default TripDetails;
