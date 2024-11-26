import React from 'react';
import styles from '../styles/AddActivityForm.module.css';

const InputField = ({ id, label, type = 'text' }) => (
  <>
    <label htmlFor={id} className={styles['visually-hidden']}>{label}</label>
    <input
      id={id}
      type={type}
      className={styles.input}
      placeholder={label}
      aria-label={label}
    />
  </>
);

function AddActivityForm({ onAddActivity, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
        id: Date.now(), // Generate a unique ID
      name: e.target.name.value,
      date: e.target.date.value,
      time: e.target.time.value,
      description: e.target.description.value,
        capacity: '0/10 Filled', // Default capacity
        attendees: 0, // Default attendees
        status: 'open', // Default status
    };

    onAddActivity(newActivity);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <button type="button" className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <div className={styles.formContent}>
        <div className={styles.labelColumn}>
          <h2 className={styles.formTitle}>Add Activity</h2>
          <div className={styles.labelWrapper}>
            <div className={styles.label}>Name</div>
            <div className={`${styles.label} ${styles.date}`}>Date</div>
            <div className={`${styles.label} ${styles.time}`}>Time</div>
            <div className={styles.label}>Location</div>
            <div className={`${styles.label} ${styles.description}`}>Description</div>
          </div>
        </div>
        <div className={styles.inputColumn}>
          <div className={styles.inputWrapper}>
            <div className={styles.inputGroup}>
              <InputField id="name" label="Name" />
              <InputField id="date" label="Date" type="date" />
              <InputField id="time" label="Time" type="time" />
              <InputField id="location" label="Location" />
              <label htmlFor="description" className={styles['visually-hidden']}>Description</label>
              <textarea
                id="description"
                className={styles.textarea}
                placeholder="Description"
                aria-label="Description"
              ></textarea>
              <button type="submit" className={styles.submitButton}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddActivityForm;
