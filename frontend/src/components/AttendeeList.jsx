import React from 'react';
import styles from '../styles/AttendeeList.module.css';

const AttendeeList = ({ attendees }) => {
  const maxVisibleAttendees = 7;
  const visibleAttendees = attendees.slice(0, maxVisibleAttendees);
  const showEllipsis = attendees.length > maxVisibleAttendees;
  return (
    <ul className={styles.attendeeList}>
      {visibleAttendees.map((attendee, index) => (
          <img
            key={index}
            src={attendee.avatar}
            alt={attendee.name}
            className={styles.attendeeAvatar}
          />
        ))}
        {showEllipsis && <span className={styles.ellipsis}>...</span>}
    </ul>
  );
};

export default AttendeeList;