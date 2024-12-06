import React, { useState } from 'react';
import styles from '../styles/Trips.module.css';
import Header from '../components/Header';
import TripCard from '../components/TripCard';
import NewTripForm from '../components/NewTripForm';

const Trips = () => {
  const [trips, setTrips] = useState([
    {
      title: 'Bali Retreat',
      date: 'Oct 8 - 17',
      image: 'src/images/bali.jpg',
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
      date: 'Feb 11 - 14',
      image:'src/images/cancun.jpg',
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
  ]);

  const [showTripForm, setShowTripForm] = useState(false);

  const handleAddTrip = (newTrip) => {
    setTrips((prevTrips) => [
      ...prevTrips,
      {
        title: newTrip.tripName,
        date: `${newTrip.startDate} - ${newTrip.endDate}`,
        attendees: [],
        image: newTrip.image,
      },
    ]);
    setShowTripForm(false);
  };

  return (
    <main className={styles.trips}>
      <Header />
      <section className={styles.tripSection}>
        <h1 className={styles.sectionTitle}>Your Trips</h1>
        <div className={styles.tripGrid}>
          {trips.map((trip, index) => (
            <TripCard key={index} {...trip} />
          ))}
        </div>
        <button
          className={styles.addTripButton}
          aria-label="Add new trip"
          onClick={() => setShowTripForm(true)}
        >
          +
        </button>
      </section>
      {showTripForm && (
        <NewTripForm
          onAddTrip={handleAddTrip}
          onClose={() => setShowTripForm(false)}
        />
      )}
    </main>
  );
};

export default Trips;