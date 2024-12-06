import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../styles/Calendar.module.css';
import Header from "../components/Header";
import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react"

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [trips] = useState([
    {
      startDate: "2024-12-08",
      endDate: "2024-12-17",
      activities: [
        { name: "Scuba Diving", date: "2024-12-10" },
        { name: "Street Food Tour", date: "2024-12-11" },
      ],
    },
  ]);

  const navigate = useNavigate();

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (month, year) =>
    new Date(year, month, 1).getDay();

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleDayClick = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    const isTripDay = trips.some(
      (trip) => new Date(trip.startDate) <= date && date <= new Date(trip.endDate)
    );

    if (isTripDay) {
      navigate("/trip-details");
    }
  };

  const renderDays = () => {
    const days = [];
    const totalDays = daysInMonth(currentMonth.getMonth(), currentMonth.getFullYear());
    const firstDay = getFirstDayOfMonth(currentMonth.getMonth(), currentMonth.getFullYear());

    
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className={styles.dayEmpty}></div>);
    }

    
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isTripDay = trips.some(
        (trip) => new Date(trip.startDate) <= date && date <= new Date(trip.endDate)
      );

      const activities = trips
        .filter(
          (trip) =>
            new Date(trip.startDate) <= date && date <= new Date(trip.endDate)
        )
        .flatMap((trip) =>
          trip.activities.filter(
            (activity) =>
              new Date(activity.date).toDateString() === date.toDateString()
          )
        );

      days.push(
        <div
          key={`day-${day}`}
          className={`${styles.day} ${isTripDay ? styles.tripDay : ""}`}
          onClick={() => handleDayClick(day)} // Add click event handler
        >
          <div className={styles.dayNumber}>{day}</div>
          <div className={styles.activities}>
            {activities.map((activity, index) => (
              <div key={index} className={styles.activity}>
                {activity.name}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className={styles.calendar}>
      <Header />
      <div className={styles.header}>
        <button onClick={prevMonth} className={styles.navButton}>
            <ChevronLeftIcon size={24} />
        </button>
        <h2 className={styles.monthTitle}>
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button onClick={nextMonth} className={styles.navButton}>
            <ChevronRightIcon size={24} />
        </button>
      </div>
      <div className={styles.daysGrid}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className={styles.weekday}>
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
