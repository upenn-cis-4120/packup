import React, { useState } from 'react';
import { PencilIcon } from '@primer/octicons-react';
import styles from '../styles/ActivityOverviewCard.module.css';

const ActivityCard = ({ 
  name, 
  date, 
  capacity, 
  attendees, 
  status, 
  description, 
  onDelete, 
  onEdit 
}) => {
  const [isJoined, setIsJoined] = useState(false);
  const [currentAttendees, setCurrentAttendees] = useState(attendees);

  const handleJoinToggle = () => {
    if (status === 'open') {
      setIsJoined((prevIsJoined) => {
        const newIsJoined = !prevIsJoined;
        setCurrentAttendees((prevAttendees) =>
          newIsJoined ? currentAttendees + 1 : currentAttendees - 1
        );
        return newIsJoined;
      });
    }
  };

  const updatedCapacity = `${currentAttendees}/${capacity.split('/')[1]} Filled`;

  return (
    <article className={styles.activityCard}>
      <div className={styles.activityHeader}>
        <h3 className={styles.activityName}>{name}</h3>
        <p className={styles.activityDate}>{date}</p>
        <p className={styles.activityCapacity}>{updatedCapacity}</p>
        <button className={styles.editButton} onClick={onEdit} aria-label="Edit Activity">
          <PencilIcon size={24} />
        </button>
      </div>
      <p className={styles.activityDescription}>{description}</p>
      <div className={styles.activityFooter}>
        <span className={styles.attendees}>{currentAttendees} Attendees</span>
        {status === 'open' ? (
          <>
            {!isJoined ? (
              <>
                <button
                  className={styles.joinButton}
                  onClick={handleJoinToggle}
                  aria-label="Join Activity"
                >
                  Join
                </button>
                <button className={styles.maybeButton} aria-label="Maybe Join">
                  Maybe
                </button>
              </>
            ) : (
              <button
                className={styles.joinButton}
                onClick={handleJoinToggle}
                aria-label="Joined"
              >
                Joined
              </button>
            )}
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
