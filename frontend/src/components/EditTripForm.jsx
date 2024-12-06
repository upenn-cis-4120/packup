import React from 'react';
import styles from '../styles/AddActivityForm.module.css';

const InputField = ({ id, label, type = 'text', defaultValue }) => (
  <>
    <label htmlFor={id} className={styles['visually-hidden']}>{label}</label>
    <input
      id={id}
      type={type}
      className={styles.input}
      placeholder={label}
      aria-label={label}
      defaultValue={defaultValue}
    />
  </>
);

function EditTripForm({ trip, onEditTrip, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTrip = {
      ...trip,
      tripName: e.target.tripName.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      description: e.target.description.value,
    };

    onEditTrip(updatedTrip);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <button type="button" className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <div className={styles.formContent}>
        <div className={styles.labelColumn}>
          <h2 className={styles.formTitle}>Edit Trip</h2>
          <div className={styles.labelWrapper}>
            <div className={styles.label}>Trip Name</div>
            <div className={styles.label}>Start Date</div>
            <div className={styles.label}>End Date</div>
            <div className={styles.label}>Description</div>
          </div>
        </div>
        <div className={styles.inputColumn}>
          <div className={styles.inputWrapper}>
            <div className={styles.inputGroup}>
              <InputField id="tripName" label="Trip Name" defaultValue={trip.tripName} />
              <InputField id="startDate" label="Start Date" type="date" defaultValue={trip.startDate} />
              <InputField id="endDate" label="End Date" type="date" defaultValue={trip.endDate} />
              <label htmlFor="description" className={styles['visually-hidden']}>Description</label>
              <textarea
                id="description"
                className={styles.textarea}
                placeholder="Description"
                aria-label="Description"
                defaultValue={trip.description}
              ></textarea>
              <button type="submit" className={styles.submitButton}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EditTripForm;
