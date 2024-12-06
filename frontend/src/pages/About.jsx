import React from 'react';
import styles from '../styles/About.module.css';
import Header from '../components/Header';

import attendeeListImage from '../images/attendeelist.png';
import calendarImage from '../images/calendar.png';
import createActivityImage from '../images/createactivity.png';
import homepageImage from '../images/homepage.png';
import loFiImage from '../images/lo-fi.png';
import newActivityImage from '../images/newactivity.png';
import newTripsDetailsImage from '../images/newtripstripsdetails.png';
import styleImage from '../images/style.png';
import tripDetailsImage from '../images/tripdetails.png';
import tripsImage from '../images/trips.png';

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
                <p>For our initial prototyping, we created paper-based, lo-fi prototypes. With the initial information we learned from potential users, we decided the main components we wanted to include were the opt-in, activity creation, trip creation and calendar functionalities. These prototypes helped us visualize user interactions and workflow within the web app. By simulating navigation and event management, we gained valuable insights into refining the design and functionality to enhance the user experience.</p>
                <p>In this Lo-Fi prototyping stage, we initially created multiple prototypes and then came around the design shown below. The prototype focuses on three main pages: a Trips page, Activities page, and Calendar. From the Trips page, the user can navigate into the Trip Details page, which has the possible activities under that trip. The Activities page offers the user a view of what activities they have joined.</p>
                <div className={styles.imageContainer}>
                    <img src={loFiImage} alt="Lo-Fi Prototype" className={styles.Image} />
                </div>
            </section>

            <section>
                <h2 className={styles.sectionTitle}>Hi-Fi Prototyping</h2>
                <p>
                    After receiving feedback on our low fidelity prototypes, we started working on developing higher fidelity prototypes with a clear design scheme. 
                    Our Hi-Fi prototype in Figma was created with a distinct color scheme that aimed to keep users engaged. We wanted to keep the interface clean and 
                    organized, but also wanted the color scheme to reflect the refreshing and exciting feelings often associated with vacations. Our style guide is shown below:
                </p>
                <div className={styles.imageContainer}>
                    <img src={styleImage} alt="Style Guide" className={styles.Image} />
                </div>
                <p>
                    Our designs use the color scheme, typefaces, and icons shown to create a compelling location for users to create and plan trips. Below are some of our 
                    High-Fidelity Prototypes.
                </p>
                <div className={styles.imageContainer}>
                    <img src={homepageImage} alt="Homepage" className={styles.Image} />
                </div>
                <div className={styles.imageContainer}>
                    <img src={calendarImage} alt="Calendar" className={styles.Image} />
                </div>
            </section>

            <section>
                <h2 className={styles.sectionTitle}>Initial Interface</h2>
                <p>
                    The PackUp interface is implemented with JavaScript and built with the React library and uses CSS Modules for styling. The main task flow we wanted to 
                    focus on creating was activity creation. Drawing from what was decided in the Hi-Fi prototypes, we created the Trips and Trip Details pages, as well as 
                    the activity creation form.
                </p>
        
                <p>
                    <strong>Trips Page:</strong> Users can view their planned trips and navigate to specific trip details from this page.
                </p>
                <div className={styles.imageContainer}>
                    <img src={tripsImage} alt="Trips Page" className={styles.Image} />
                </div>
                <p>
                    <strong>Trip Details Page:</strong> This page allows users to see all the details of a specific trip, including the activities planned.
                </p>
                <div className={styles.imageContainer}>
                    <img src={tripDetailsImage} alt="Trip Details Page" className={styles.Image} />
                </div>
                <p>
                    <strong>Activity Creation Form:</strong> Enables users to add activities to their trips with key details like name, date, time, and description.
                </p>
                <div className={styles.imageContainer}>
                    <img src={createActivityImage} alt="Creation of Activity" className={styles.Image} />
                </div>
            </section>

            <section>
                <h2 className={styles.sectionTitle}>User Feedback on Initial Prototype</h2>
                <p>
                    One change we considered was breaking down the activity creation form into a multi-step process. After conducting an experiment with users going through 
                    the process of activity creation, we determined that a multi-page creation feature was preferred. 
                </p>
                <p>
                We also collected feedback from prospective users by having them go through the initial prototype. There were a few main points that stood out among multiple answers:
                </p>
                <ul>
                    <li>Many found the interface clean, but boring at times. One interviewee thought it would be nice to be able to add some kind of image to make the trip planning more exciting.</li>
                    <li>Users wanted the ability to edit information after creation.</li>
                    <li>Multiple people wanted to be able to include more detail to display in the activities section, namely the location and cost of an activity.</li>
                    <li>Some users found the delete button on the activity cards to be a little cluttered. A user noted that the delete button, which is red, did not fit in with the rest of the color scheme, making it feel like there were too many colors.</li>
                    <li>A few users found the Activity page confusing and expressed that they found it redundant because they can find more information directly from the Trip Details page.</li>
                    <li>A few noted that it was hard to tell when they joined an activity because the only change is the buttons changing.</li>
                </ul>
            </section>

            <section>
                <h2 className={styles.sectionTitle}>Final Interface</h2>
                <p>
                From user feedback, we added the option of adding an image to a trip in order to allow the user to provide an exciting visual. This image then appears in the trip card on the trips page and as a banner within the Trip Details page. At the top of the trip details page, the user can edit the trip to change the image or any other information. 
                </p>
                <div className={styles.imageContainer}>
                    <img src={newTripsDetailsImage} alt="Updated trips" className={styles.Image} />
                </div>
                <p>
                The activity component was upgraded as well. The ability to edit the details of an activity was added, and the delete button was accordingly moved into the edit form. Additionally, users can specify optional details such as the expected location and cost for an activity. Users can decide between formally joining an activity, in which they add to the headcount, or choosing Maybe if they are unsure about their commitment. When users join an activity, the surrounding color of the component becomes purple, providing a quick visual indication of joining successfully.
                </p>
                <div className={styles.imageContainer}>
                    <img src={newActivityImage} alt="Updated activities" className={styles.Image} />
                </div>
                <p>
                Users can also click on any of the Attendees buttons on the page to view the expected attendees for a trip or activity.
                </p>
                <div className={styles.imageContainer}>
                    <img src={attendeeListImage} alt="Attendee list" className={styles.Image} />
                </div>
            </section>

            <section>
                <h2 className={styles.sectionTitle}>Potential Business Model</h2>
                <p>
                There are several potential monetization strategies for our application. Some of the strategies include: 
                </p>
                <ul>
                    <li><strong>Freemium Subscription Fees:</strong> After a certain number of users join a trip, charging the leader of the group or all of the members a subscription fee.</li>
                    <li><strong>Affiliate Marketing Fees:</strong> Providing a feature where users can find activities for a given trip and charging an affiliate fee for marketing partners events/vacation options. </li>
                </ul>
            </section>

            <section>
                <h2 className={styles.sectionTitle}>Conclusion</h2>
                <p>
                The feedback on the final interface has been very positive. Users appreciate the features available, think the interface is intuitive, and like how it makes it easy to edit details and track attendees. We are overall very pleased with what we have built as well. 
                </p>
            </section>
        </div>
        </div>
    );
};

export default About;
