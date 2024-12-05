import React, { useState } from 'react';
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

function NewTripForm({ onAddTrip, onClose }) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = {
      id: Date.now(), // Generate a unique ID
      tripName: e.target.tripName.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      description: e.target.description.value,
      image: imagePreview,
    };

    onAddTrip(newTrip);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <button type="button" className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <div className={styles.formContent}>
        <div className={styles.labelColumn}>
          <h2 className={styles.formTitle}>Create New Trip</h2>
          <div className={styles.labelWrapper}>
            <div className={styles.label}>Trip Name</div>
            <div className={styles.label}>Start Date</div>
            <div className={styles.label}>End Date</div>
            <div className={styles.label}>Image</div>
            <div className={styles.label}>Description</div>
          </div>
        </div>
        <div className={styles.inputColumn}>
          <div className={styles.inputWrapper}>
            <div className={styles.inputGroup}>
              <InputField id="tripName" label="Trip Name" />
              <InputField id="startDate" label="Start Date" type="date" />
              <InputField id="endDate" label="End Date" type="date" />
              <label htmlFor="description" className={styles['visually-hidden']}>Description</label>
              <label htmlFor="image" className={styles['visually-hidden']}>Image</label>
              <input
                id="image"
                type="file"
                className={styles.input}
                accept="image/*"
                onChange={handleImageChange}
                aria-label="Upload Image"
              />
              {/* {imagePreview && (
                <div className={styles.imagePreview}>
                  <img src={imagePreview} alt="Image Preview" className={styles.previewImage} />
                </div>
              )} */}
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

export default NewTripForm;
