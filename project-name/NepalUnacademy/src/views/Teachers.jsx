import React from 'react';
import './Teachers.css';

const Teachers = () => {
  const teamMembers = [
    {
      name: 'Steve Ambuul',
      title: 'Chief Revenue Officer',
      imgSrc: 'https://via.placeholder.com/150',
      category: 'Leadership',
    },
    {
      name: 'Alden Dale',
      title: 'Director of Solutions',
      imgSrc: 'https://via.placeholder.com/150',
      category: 'Client Services',
    },
    {
      name: 'Kaley Deneen',
      title: 'Director of Strategy & Service, EMEA',
      imgSrc: 'https://via.placeholder.com/150',
      category: 'Creative',
    },
    {
      name: 'Phil Dupertuis',
      title: 'Director of Client Services, NA',
      imgSrc: 'https://via.placeholder.com/150',
      category: 'Development',
    },
    {
      name: 'Tony Eades',
      title: 'Chief Evangelist',
      imgSrc: 'https://via.placeholder.com/150',
      category: 'Marketing & Sales',
    },
  ];

  return (
    <div className="team-section">
<h1 style={{ 
  fontSize: '45px', 
  fontWeight: 'bold', 
  textAlign: 'center', 
  margin: '20px 0',
  color: '#673AB7', /* Purple color for the heading */
}}>
  Meet Our Experts <span style={{ color: '#4CAF50' }}>Teachers</span> 🧑‍🏫
</h1>
      <div className="tabs">
      <h3 style={{ textAlign: 'center', fontSize: '1.5rem', margin: '1rem 0', color: '#555', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    🎓 <span style={{ marginLeft: '0.5rem', color: '#16a085' }}>Empowering Minds, Inspiring Futures with Our Expert Teachers 👩🏻‍🏫</span>
  </h3>
      </div>
      <div className="team-members">
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Rupesh Yadav" />
          <h3>Rupesh Yadav</h3>
          <p>Bachelor in mathematics</p>
          <p>Mathematic Teacher</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Ajay Kumar Yadav" />
          <h3>Saurabh dhakal</h3>
          <p>Bachelors in civil engineering</p>
          <p>Mathematics</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Kaley Deneen" />
          <h3>KALEY DENEEN</h3>
          <p>DIRECTOR OF STRATEGY & SERVICE, EMEA</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Phil Dupertuis" />
          <h3>Ajay Kumar Yadav</h3>
          <p>Bachelor in Computer Science</p>
          <p>MERN Stack Developer</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Tony Eades" />
          <h3>TONY EADES</h3>
          <p>CHIEF EVANGELIST</p>
        </div>
      </div>
       
    </div>
  );
}

export default Teachers;