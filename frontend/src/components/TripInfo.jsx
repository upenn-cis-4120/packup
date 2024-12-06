import React, { useState } from 'react';
import { PencilIcon, FileMediaIcon } from '@primer/octicons-react';
import styles from '../styles/TripInfo.module.css';
import EditTripForm from './EditTripForm';
import AttendeesModal from './AttendeesModal';

const TripInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAttendeesModalOpen, setIsAttendeesModalOpen] = useState(false);
  const [trip, setTrip] = useState({
    id: 1,
    tripName: 'Bali Retreat',
    startDate: '2024-10-09',
    endDate: '2024-10-18',
    description: 'This will be a fun trip! Join us as we plan a tropical getaway to Bali, where pristine beaches, lush rice terraces, and vibrant culture await. Whether you are seeking adventure with water sports and hiking, or relaxation, there is bound to be some activity you will like!',
    image: 'https://www.johansens.com/wp-content/uploads/2016/08/Thailand-AYANA-Estate-Bali-73-e1673272835586.jpg',
    attendees: ['Alice (You)', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank', 'Grace'],
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

  const toggleAttendeesModal = () => {
    setIsAttendeesModalOpen((prev) => !prev);
  };

  const formatDate = (date) => {
    const options = { month: 'numeric', day: 'numeric', year: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  };

  const [image, setImage] = useState('https://www.johansens.com/wp-content/uploads/2016/08/Thailand-AYANA-Estate-Bali-73-e1673272835586.jpg');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
            <button className={styles.attendees} onClick={toggleAttendeesModal}>
              {trip.attendees.length} Attendees
            </button>
            <div className={styles.headerActions}>
              <button className={styles.editButton} onClick={() => document.getElementById('fileInput').click()}>
                <FileMediaIcon size={24} />
              </button>
              <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <button className={styles.editButton} onClick={handleEditClick} aria-label="Edit Activity">
              <PencilIcon size={24} />
            </button>
          </div>
        </div>
        {image && (
          <div className={styles.uploadedImage}>
            <img src={image} alt="Uploaded" />
          </div>
        )}
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

      {isAttendeesModalOpen && (
        <AttendeesModal
          attendees={trip.attendees}
          onClose={toggleAttendeesModal}
        />
      )}
    </>
  );
};

export default TripInfo;
