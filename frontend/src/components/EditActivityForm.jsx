import React from 'react';
import { TrashIcon } from '@primer/octicons-react';
import styles from '../styles/AddActivityForm.module.css';

const InputField = ({ id, label, type = 'text', defaultValue }) => (
  <>
    <label htmlFor={id} className={styles['visually-hidden']}>{label}</label>
    <input
      id={id}
      type={type}
      defaultValue={defaultValue}
      className={styles.input}
      placeholder={label}
      aria-label={label}
    />
  </>
);

function EditActivityForm({ activity, onUpdateActivity, onClose, onDelete }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedActivity = {
      ...activity,
      name: e.target.name.value,
      date: e.target.date.value,
      time: e.target.time.value,
      location: e.target.location.value,
      description: e.target.description.value,
    };

    onUpdateActivity(updatedActivity);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this activity?")) {
      onDelete();
      onClose();
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <button type="button" className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <div className={styles.formContent}>
        <div className={styles.labelColumn}>
          <h2 className={styles.formTitle}>Edit Activity</h2>
          <div className={styles.labelWrapper}>
            <div className={styles.label}>Name</div>
            <div className={styles.label}>Date</div>
            <div className={styles.label}>Time</div>
            <div className={styles.label}>Location</div>
            <div className={styles.label}>Description</div>
          </div>
        </div>
        <div className={styles.inputColumn}>
          <div className={styles.inputWrapper}>
            <div className={styles.inputGroup}>
              <InputField id="name" label="Name" defaultValue={activity.name} />
              <InputField id="date" label="Date" type="date" defaultValue={activity.date} />
              <InputField id="time" label="Time" type="time" defaultValue={activity.time} />
              <InputField id="location" label="Location" defaultValue={activity.location} />
              <label htmlFor="description" className={styles['visually-hidden']}>Description</label>
              <textarea
                id="description"
                className={styles.textarea}
                placeholder="Description"
                aria-label="Description"
                defaultValue={activity.description}
              ></textarea>
              <button type="submit" className={styles.submitButton}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          className={styles.deleteButton}
          onClick={handleDelete}
          aria-label="Delete Activity"
        >
          <TrashIcon size={24} />
        </button>
      </div>
    </form>
  );
}

export default EditActivityForm;
