import React from 'react';
import styles from '../styles/Activities.module.css';

const ActivityCard = ({ title, date, activities, dates }) => {
  return (
    <div className={styles.activityCard}>
      <div className={styles.activityHeader}>
        <div className={styles.activityTitle}>{title}</div>
        <div className={styles.activityDate}>{date}</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/058cb9265fde56f2fc6b9e7f640464a90124d0d79568f819b2f63ecb7eee905a?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510" alt="" className={styles.calendarIcon} />
      </div>
      <div className={styles.activityDetails}>
        <div className={styles.activityList}>
          {activities.map((activity, index) => (
            <div key={index} className={styles.activityItem}>{activity}</div>
          ))}
        </div>
        <div className={styles.activityDates}>
          {dates.map((date, index) => (
            <div key={index} className={styles.dateItem}>{date}</div>
          ))}
        </div>
      </div>
      <button className={styles.editButton}>Edit Details</button>
      <button className={styles.deleteButton}>Delete</button>
    </div>
  );
};

export default ActivityCard;