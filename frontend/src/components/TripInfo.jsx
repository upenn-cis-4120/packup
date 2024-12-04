import React, { useState } from 'react';
import { PencilIcon } from '@primer/octicons-react';
import styles from '../styles/TripInfo.module.css';
import EditTripForm from './EditTripForm';

const TripInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [trip, setTrip] = useState({
    id: 1,
    tripName: 'Bali Retreat',
    startDate: '2024-10-08',
    endDate: '2024-10-17',
    description: 'This will be a fun trip!',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditTrip = (updatedTrip) => {
    setTrip(updatedTrip);
    setIsEditing(false);
  };

  const handleCloseForm = () => {
    setIsEditing(false);
  };

  const formatDate = (date) => {
    const options = { month: 'numeric', day: 'numeric', year: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  };

  return (
    <>
      <section className={styles.tripInfo}>
        <div className={styles.tripHeader}>
          <div className={styles.tripTitle}>
            <h1 className={styles.tripName}>{trip.tripName}</h1>
            <p className={styles.tripDate}>
              {`${formatDate(trip.startDate)} - ${formatDate(trip.endDate)}`}
            </p>
          </div>
          <div className={styles.tripActions}>
            <span className={styles.attendees}>7 Attendees</span>
            <button className={styles.editButton} onClick={handleEditClick} aria-label="Edit Activity">
              <PencilIcon size={24} />
            </button>
          </div>
        </div>
        <h2 className={styles.descriptionTitle}>Description</h2>
        <p className={styles.description}>{trip.description}</p>
      </section>
      
      {isEditing && (
        <EditTripForm 
          trip={trip}
          onEditTrip={handleEditTrip}
          onClose={handleCloseForm}
        />
      )}
    </>
  );
};

export default TripInfo;
