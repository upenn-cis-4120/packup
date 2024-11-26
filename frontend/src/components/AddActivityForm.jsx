import React, { useState } from 'react';
import styles from '../styles/AddActivityForm.module.css';

const InputField = ({ id, label, type = 'text', onChange }) => (
  <>
    <label htmlFor={id} className={styles['visually-hidden']}>{label}</label>
    <input
      id={id}
      type={type}
      className={styles.input}
      placeholder={label}
      aria-label={label}
      onChange={onChange}
    />
  </>
);

function AddActivityForm({ onAddActivity, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    time: '',
    location: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
    console.log(`Field changed: ${id}, New value: ${formData[id]}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      id: Date.now(), // Generate a unique ID
      name: formData.name,
      description: formData.description,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      capacity: '0/10 Filled', // Default capacity
      attendees: 0, // Default attendees
      status: 'open', // Default status
    };
    console.log('Form submitted:', formData);


    onAddActivity(newActivity);
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <button type="button" className={styles.closeButton} onClick={onClose}>
        &times;
      </button>

      <div className={styles.formContent}>
        <div className={styles.labelColumn}>
          <h2 className={styles.formTitle}>Add Activity</h2>

          {step === 1 ? (
            <div className={styles.labelWrapper}>
              <div className={styles.label}>Name</div>
              <div className={`${styles.label} ${styles.description}`}>Description</div>
            </div>
          ) : (
            <div className={styles.labelWrapper}>
              <div className={`${styles.label} ${styles.date}`}>Date</div>
              <div className={`${styles.label} ${styles.time}`}>Time</div>
              <div className={styles.label}>Location</div>
            </div>
          )}
        </div>

        <div className={styles.inputColumn}>
          <div className={styles.inputWrapper}>
            {step === 1 ? (
              <>
                <div className={styles.inputGroup}>
                  <InputField
                    id="name"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <textarea
                    id="description"
                    className={styles.textarea}
                    placeholder="Description"
                    aria-label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                  <button
                    type="button"
                    className={styles.submitButton}
                    onClick={handleNextStep}
                  >
                    Continue
                  </button>
                </div>
                
              </>
            ) : (
              <>
                <div className={styles.inputGroup}>
                  <InputField
                    id="date"
                    label="Date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  <InputField
                    id="time"
                    label="Time"
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                  <InputField
                    id="location"
                    label="Location"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                  <button type="submit" className={styles.submitButton}>
                  Create
                </button>
                </div>
                
              </>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddActivityForm;
