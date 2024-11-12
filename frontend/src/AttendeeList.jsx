import React from 'react';
import styles from './AttendeeList.module.css';

const AttendeeList = ({ attendees }) => {
  return (
    <ul className={styles.attendeeList}>
      {attendees.map((attendee, index) => (
        <li key={index} className={styles.attendeeItem}>
          <img src={attendee.avatar} alt={`${attendee.name}'s avatar`} className={styles.attendeeAvatar} />
        </li>
      ))}
    </ul>
  );
};

export default AttendeeList;