import React from 'react';
import styles from '../styles/ActivityCard.module.css';

const ActivityCard = ({ name, date, capacity, attendees, status }) => {
  return (
    <article className={styles.activityCard}>
      <div className={styles.activityHeader}>
        <h3 className={styles.activityName}>{name}</h3>
        <p className={styles.activityDate}>{date}</p>
        <p className={styles.activityCapacity}>{capacity}</p>
      </div>
      <p className={styles.activityDescription}>Description</p>
      <div className={styles.activityFooter}>
        <span className={styles.attendees}>{attendees} Attendees</span>
        {status === 'open' ? (
          <>
            <button className={styles.joinButton}>Join</button>
            <button className={styles.maybeButton}>Maybe</button>
          </>
        ) : (
          <>
            <span className={styles.fullStatus}>Full</span>
            <button className={styles.waitlistButton}>Waitlist</button>
          </>
        )}
      </div>
    </article>
  );
};

export default ActivityCard;