import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/TripCard.module.css';
import AttendeeList from '../components/AttendeeList';

const TripCard = ({ title, date, image, attendees }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/trip-details'); 
  };

  return (
    <div
      className={styles.tripCard}
      onClick={handleNavigate}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.uploadedImage}>
        {image && <img src={image} alt="Uploaded" />}
      </div>
      <div className={styles.tripHeader}>
        <div className={styles.tripTitle}>{title}</div>
        <div className={styles.tripDate}>{date}</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/058cb9265fde56f2fc6b9e7f640464a90124d0d79568f819b2f63ecb7eee905a?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510"
          alt="Go to Trip Details"
          className={styles.calendarIcon}
        />
      </div>
      <footer className={styles.tripFooter}>
        <p className={styles.attendeeCount}>{attendees.length} Attendees</p>
        <AttendeeList attendees={attendees} />
      </footer>
    </div>
  );
};

export default TripCard;