import React from 'react';
import { PersonIcon } from '@primer/octicons-react';
import styles from '../styles/AttendeesModal.module.css'; // Add custom styles for the modal

const AttendeesModal = ({ attendees, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.modalTitle}>Attendees</h2>
        <ul className={styles.attendeesList}>
          {attendees.map((attendee, index) => (
            <li key={index} className={styles.attendeeItem}>
              <PersonIcon size={24} />
              <span className={styles.attendeeName}>{attendee}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AttendeesModal;
