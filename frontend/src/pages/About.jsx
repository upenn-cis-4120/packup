import React from 'react';
import styles from '../styles/About.module.css';
import Header from '../components/Header';

const About = () => {
  return (
    <div className={styles.tripDetails}>
        <Header />
        <div className={styles.content}>
            <h1 className={styles.sectionTitle}>About PackUp</h1>
            <p>
                <strong>PackUp: Simplifying Group Travel Planning</strong> - Jeh Vandrevala, Katherine Lu, and Caroline Chen
            </p>
            <section>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <p>
                PackUp is a collaborative trip-planning platform that enables groups to coordinate activities,
                manage itineraries, and streamline communication for seamless group travel experiences.
            </p>
            </section>
            
            <section>
            <h2 className={styles.sectionTitle}>Motivation</h2>
            <p>
                Going on trips is one of the most exciting ways to create memories, explore new places, and
                unwind. But before the adventure begins, there’s the planning stage – a crucial yet often
                challenging process. From picking the perfect destination and booking accommodations to
                budgeting and coordinating schedules, trip planning requires effort and organization.
            </p>
            <p>
                As college students, we’ve experienced firsthand how challenging and chaotic planning group
                trips can be. Coordinating schedules, activities, and preferences often becomes overwhelming
                without effective tools for collaboration. Existing platforms, like task managers or calendars,
                don’t fully address these challenges. That’s why we created this application—to simplify group
                travel planning by enabling better coordination, communication, and activity management. Our
                platform helps turn the chore of trip planning into a hassle-free experience for everyone
                involved.
            </p>
            </section>
            
            <section>
            <h2 className={styles.sectionTitle}>Our Differentiation</h2>
            <p>
                Our platform distinguishes itself by integrating the features of popular tools like WhatsApp,
                Yelp, AirBnB, Calendar, Maps, and Google Sheets into a unified interface designed for seamless
                group travel planning. Unlike existing platforms that address only parts of the planning
                process, we streamline communication, activity coordination, and itinerary management. Users
                can collaboratively schedule events in one place. This approach eliminates the chaos of
                juggling multiple apps—like making decisions on iMessage or WhatsApp, then relaying them
                to Airbnb or calendars—reducing confusion and errors. By combining these essential features,
                we make it easier for groups to plan and execute trips.
            </p>
            </section>
            
            <section>
            <h2 className={styles.sectionTitle}>User Interviews</h2>
            <p>
                We interviewed seven potential users of the product in total and discovered several
                key challenges that individuals face when planning group trips, which motivated us to create a
                dedicated travel planning web app. One participant vividly described the process, stating,
                "Planning a group trip is like a full-time job." This sentiment resonated across our discussions,
                highlighting the overwhelming nature of coordinating multiple people with diverse schedules
                and preferences.
            </p>
            <p>
                A recurring theme was the difficulty of managing differing calendars, particularly different
                arrival and departure times, which often led to confusion about who was available for specific
                activities. Participants expressed frustration with keeping track of which individuals planned to
                attend which events, especially when plans frequently changed. This lack of clarity often
                caused misunderstandings and impacted the overall experience.
            </p>
            <p>
                When observing users as they planned trips, we noticed frequent switching between multiple
                apps—such as WhatsApp for communication, Yelp for activity suggestions, Calendar for
                scheduling, and Bookings.com for accommodations. This fragmented process was challenging
                and prone to errors, with many participants expressing concern about potentially missing
                crucial details. One user mentioned that they struggled to juggle the multiple applications and
                kept having to write things on paper to remember to go back to them.
            </p>
            <p>
                Another significant pain point was securing agreement for group activities, particularly when
                costs were involved. Getting unanimous approval for events and collecting money afterward
                was consistently cited as a logistical headache. Users expressed the need for a streamlined
                way to communicate plans, gain consensus, and manage payments without unnecessary
                back-and-forth.
            </p>
            <p>
                These insights underscored the need for a comprehensive platform that simplifies group trip
                planning by centralizing communication, scheduling, and decision-making while reducing the
                risk of missed details.
            </p>
            </section>

            <section>
            <h2 className={styles.sectionTitle}>User Inspiration for Features</h2>
            <p>
            Insights from our user interviews inspired several key features to address group trip planning
            challenges. The features we developed were all inspired by these interviews. Users indicated the importance of having a calendar feature where they can view all planned
            events during a trip and indicate their participation. This reduces the need for constant
            communication and helps organizers gauge interest efficiently. Additionally, we created a feature that allows users to see who is attending specific events and
            easily join or opt out.
            </p>
            </section>

            <section>
                <h2 className={styles.sectionTitle}>Early Prototyping</h2>
                <p></p>
                <p></p>
                <p></p>
            </section>

            <section>
                <h2 className={styles.sectionTitle}></h2>
                <p></p>
            </section>

            <section>
                <h2 className={styles.sectionTitle}></h2>
                <p></p>
            </section>
            
        </div>
        </div>
    );
};

export default About;
