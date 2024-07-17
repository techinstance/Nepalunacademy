import React from 'react';
import './Home.css';

import AboutCard from './AboutCard';
import Teachers from './Teachers';
import Community from './Community';

import ScrollableSection from './AdvantagesSection';
import FreeSessionSection from './FreeSessionSection';
import Exploring from './Exploring';



const Home = () => {
  return (
    <>

 <FreeSessionSection></FreeSessionSection>

<Exploring></Exploring>
{/* <AllCourses></AllCourses> */}
 {/* <Category></Category> */}
<AboutCard></AboutCard>
    
{/* <AboutSection></AboutSection>  */}

{/* Services */}
<div className="service-header">
<h1 style={{ textAlign: 'center', fontSize: '3.5rem', color: '#333', margin: '2rem 0', position: 'relative' }}>
  <span style={{ marginRight: '1rem' }}>
    <i className="fas fa-cogs" style={{ fontSize: '2rem', color: '#2e86de' }}></i>
  </span>
  Our <span style={{ color: '#e74c3c' }}>Services</span>
</h1>


</div>

<div className="service-swipe">
  <a href="subjects/computer_courses.html" className="s-link">
    <div className="s-card">
      <img src="/assets/images/icon/computer-courses.png" alt="Computer Courses" />
      <p>Free Online Computer Courses</p>
    </div>
  </a>
  <a href="subjects/jee.html" className="s-link">
    <div className="s-card">
      <img src="/assets/images/icon/brainbooster.png" alt="Building Concepts for Competitive Exams" />
      <p>Building Concepts for Competitive Exams</p>
    </div>
  </a>
  <a href="#" className="s-link">
    <div className="s-card">
      <img src="/assets/images/icon/online-tutorials.png" alt="Online Video Lectures" />
      <p>Online Video Lectures</p>
    </div>
  </a>
  <a href="subjects/jee.html#sample_papers" className="s-link">
    <div className="s-card">
      <img src="/assets/images/icon/papers.jpg" alt="Sample Papers" />
      <p>Sample Papers of Various Competitive Exams</p>
    </div>
  </a>
  <a href="#" className="s-link">
    <div className="s-card">
      <img src="/assets/images/icon/p3.png" alt="Performance and Ranking Report" />
      <p>Performance and Ranking Report</p>
    </div>
  </a>
  <a href="#contactus_section" className="s-link">
    <div className="s-card">
      <img src="/assets/images/icon/discussion.png" alt="Discussion with Our Tutors & Mentors" />
      <p>Discussion with Our Tutors & Mentors</p>
    </div>
  </a>
  <a href="subjects/quiz.html" className="s-link">
    <div className="s-card">
      <img src="/assets/images/icon/q1.png" alt="Daily Brain Teasing Questions to Improve IQ" />
      <p>Daily Brain Teasing Questions to Improve IQ</p>
    </div>
  </a>
  <a href="#contactus_section" className="s-link">
    <div className="s-card">
      <img src="/assets/images/icon/help.png" alt="24x7 Online Support" />
      <p>24x7 Online Support</p>
    </div>
  </a>
</div>
<ScrollableSection></ScrollableSection>

{/* .........................End Services .......................................
...................................................................................*/}
    
      <Teachers></Teachers>
      <Community></Community>
      
{/* Contacts  */}




  





    </>
  );
}

export default Home;
