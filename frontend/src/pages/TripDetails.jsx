import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/TripDetails.module.css';
import Header from '../components/Header';
import TripInfo from '../components/TripInfo';
import ActivityCard from '../components/ActivityOverviewCard';
import AddActivityForm from '../components/AddActivityForm';
import EditActivityForm from '../components/EditActivityForm';
import AttendeesModal from '../components/AttendeesModal';

const TripDetails = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isAttendeesModalOpen, setIsAttendeesModalOpen] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(null);
  const [activities, setActivities] = useState([
    {
      id: 1,
      name: 'Scuba Diving',
      date: '2024-10-10',
      capacity: '3/10',
      attendees: 3,
      attendeelist: ['Bob', 'Charlie', 'Dave'],
      status: 'open',
      description: 'Come find Nemo!',
      location: 'Manta Point',
      cost: '30'
    },
    {
      id: 2,
      name: 'Street Food Tour',
      date: '2024-10-11',
      capacity: '5/5',
      attendees: 5,
      attendeelist: ['Bob', 'Charlie', 'Dave', 'Eve', 'Frank'],
      status: 'full',
      description: "Explore some local street cuisine",
      cost: '5'
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

  const openEditForm = (activity) => {
    setCurrentActivity(activity);
    setIsEditing(true);
  };

  const closeEditForm = () => {
    setCurrentActivity(null);
    setIsEditing(false);
  };

  const openAttendeesModal = (activity) => {
    setCurrentActivity(activity);
    setIsAttendeesModalOpen(true);
  };

  const closeAttendeesModal = () => {
    setCurrentActivity(null);
    setIsAttendeesModalOpen(false);
  };

  const handleUpdateActivity = (updatedActivity) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.id === updatedActivity.id ? updatedActivity : activity
      )
    );
    closeEditForm();
  };

  return (
    <main className={styles.tripDetails}>
      <Header />
      <section className={styles.content}>
        {/* <button
          className={styles.backButton}
          onClick={handleBack}
          aria-label="Go back to trip card"
        >
          Back
        </button> */}
        <TripInfo />
        <h2 className={styles.sectionTitle}>Activities</h2>
        <div className={styles.activitiesGrid}>
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              {...activity}
              onDelete={() => handleDelete(activity.id)}
              onEdit={() => openEditForm(activity)} 
              onCheckAttendees={() => openAttendeesModal(activity)}
            />
          ))}
        </div>
        <footer className={styles.footer}>
          <button
            className={styles.addActivityButton}
            aria-label="Add new activity"
            onClick={handleToggleForm}
          >
            +
          </button>
          {/* <button className={styles.deleteButton}>Delete</button> */}
        </footer>
        {showForm && (
          <AddActivityForm onAddActivity={handleAddActivity} onClose={handleToggleForm} />
        )}
        {isEditing && currentActivity && (
          <EditActivityForm
            activity={currentActivity}
            onUpdateActivity={handleUpdateActivity}
            onClose={closeEditForm}
            onDelete={() => handleDelete(currentActivity.id)}
          />
        )}
        {isAttendeesModalOpen && currentActivity && (
          <AttendeesModal
            attendees={currentActivity.attendeelist}
            onClose={() => closeAttendeesModal(currentActivity)}
          />
        )}
      </section>
    </main>
  );
};

export default TripDetails;
