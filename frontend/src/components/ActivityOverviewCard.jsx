import React, { useState } from 'react';
import { PencilIcon, LocationIcon, CreditCardIcon } from '@primer/octicons-react';
import styles from '../styles/ActivityOverviewCard.module.css';

const ActivityCard = ({ 
  name, 
  date, 
  capacity, 
  attendees, 
  status, 
  description, 
  location, 
  cost, 
  onEdit, 
  onCheckAttendees, 
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

  const formatDate = (date) => {
    const options = { month: 'short', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  };

  const updatedCapacity = `${currentAttendees}/${capacity.split('/')[1]} Filled`;

  return (
    <article className={`${styles.activityCard} ${isJoined ? styles.joined : ''}`}>
      <div className={styles.activityHeader}>
        <h3 className={styles.activityName}>{name}</h3>
        <p className={styles.activityDate}>{formatDate(date)}</p>
        <p className={styles.activityCapacity}>{updatedCapacity}</p>
        <button className={styles.editButton} onClick={onEdit} aria-label="Edit Activity">
          <PencilIcon size={24} />
        </button>
      </div>
      {(location || cost) && (
        <div className={styles.activityLocation}>
          {location && (
            <div className={styles.locationWrapper}>
              <LocationIcon size={24} className={styles.icon} />
              <span>{location}</span>
            </div>
          )}
          {cost && (
            <div className={styles.costWrapper}>
              <CreditCardIcon size={24} className={styles.icon} />
              <span>{`$${cost}`}</span>
            </div>
          )}
        </div>
      )}
      <p className={styles.activityDescription}>{description}</p>
      <div className={styles.activityFooter}>
        <button className={styles.attendees} onClick={onCheckAttendees}>
          {currentAttendees} Attendees
        </button>
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
                Joined!
              </button>
            )}
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
