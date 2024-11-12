import React from 'react';
import styles from '../styles/TripCard.module.css';
import AttendeeList from '../components/AttendeeList';

const TripCard = ({ title, dates, attendees }) => {
  return (
    <article className={styles.tripCard}>
      <header className={styles.tripHeader}>
        <h2 className={styles.tripTitle}>{title}</h2>
        <time className={styles.tripDates}>{dates}</time>
      </header>
      <footer className={styles.tripFooter}>
        <p className={styles.attendeeCount}>{attendees.length} Attendees</p>
        <AttendeeList attendees={attendees} />
      </footer>
    </article>
  );
};

export default TripCard;