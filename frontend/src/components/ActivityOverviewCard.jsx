import React from 'react';
import { PencilIcon } from '@primer/octicons-react';
import styles from '../styles/ActivityOverviewCard.module.css';

const ActivityCard = ({ name, date, capacity, attendees, status, description, onDelete, onEdit }) => {
  return (
    <article className={styles.activityCard}>
      <div className={styles.activityHeader}>
        <h3 className={styles.activityName}>{name}</h3>
        <p className={styles.activityDate}>{date}</p>
        <p className={styles.activityCapacity}>{capacity}</p>
        <button className={styles.editButton} onClick={onEdit} aria-label="Edit Activity">
          <PencilIcon size={24} />
        </button>
      </div>
      <p className={styles.activityDescription}>{description}</p>
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
        <button className={styles.deleteButton} onClick={onDelete}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default ActivityCard;
