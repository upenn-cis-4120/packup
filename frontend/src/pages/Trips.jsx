import React from 'react';
import styles from '../styles/Trips.module.css';
import TripCard from '../components/TripCard';

const Trips = () => {
  const trips = [
    {
      title: 'Bali Retreat',
      dates: 'Oct 8 - 17',
      attendees: [
        { name: 'Attendee 1', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
        { name: 'Attendee 2', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
        { name: 'Attendee 3', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
        { name: 'Attendee 4', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
        { name: 'Attendee 5', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
        { name: 'Attendee 6', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
        { name: 'Attendee 7', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
      ],
    },
    {
      title: 'Cancun Weekend',
      dates: 'Feb 11 - 14',
      attendees: [
        { name: 'Attendee 1', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
        { name: 'Attendee 2', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
        { name: 'Attendee 3', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
        { name: 'Attendee 4', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
        { name: 'Attendee 5', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
        { name: 'Attendee 6', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
        { name: 'Attendee 7', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
        { name: 'Attendee 8', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
        { name: 'Attendee 9', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
        { name: 'Attendee 10', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3180854754823f7a77ff339ba569e34a604c31c87b2445e003743bc1c2764d?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510' },
      ],
    },
  ];

  return (
    <main className={styles.trips}>
      <header className={styles.header}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7f79458-a1c8-4104-8c49-5cf47daaa824?placeholderIfAbsent=true&apiKey=3a931a869e0e4b4bb92008bc01989510" alt="Trip Planner Logo" className={styles.logo} />
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li><a href="#trips" className={styles.navLink}>Trips</a></li>
            <li><a href="#calendar" className={styles.navLink}>Calendar</a></li>
            <li><a href="#activities" className={styles.navLink}>Activities</a></li>
            <li><a href="#profile" className={styles.navLink}>Profile</a></li>
          </ul>
        </nav>
      </header>
      <section className={styles.tripSection}>
        <h1 className={styles.sectionTitle}>Your Trips</h1>
        <div className={styles.tripGrid}>
          {trips.map((trip, index) => (
            <TripCard key={index} {...trip} />
          ))}
        </div>
      </section>
      <button className={styles.addTripButton} aria-label="Add new trip">+</button>
    </main>
  );
};

export default Trips;