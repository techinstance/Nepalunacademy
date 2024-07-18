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
          <img src="./assets/Teachers/Rupesh.png" alt="Rupesh Yadav" />
          <h3>Rupesh Yadav</h3>
          <h5>Bachelor in mathematics</h5>
          <h4>Mathematic</h4>
        </div>
        <div className="team-member">
          <img src="/assets/Teachers/Saurav.jpg" alt="Saurabh dhakal" />
          <h3>Saurabh dhakal</h3>
          <h5>Bachelors in civil engineering</h5>
          <h4>Mathematics</h4>
        </div>
        <div className="team-member">
          <img src="/assets/Teachers/Aavash.jpg" alt="Aavash Adhikari" />
          <h3>Aavash Adhikari</h3>
          <h5>Bachelors in civil engineering </h5>
          <h4>Chemistry</h4>
        </div>
        <div className="team-member">
          <img src="/assets/Teachers/Ajay.jpg" alt="Ajay Kumar Yadav" />
          <h3>Ajay Kumar Yadav</h3>
          <h5>Bachelor in Computer Science</h5>
          <h4>English</h4>
        </div>
        <div className="team-member">
          <img src="/assets/Teachers/Priya.jpg" alt="Priya Ranjan" />
          <h3>Priya Ranjan</h3>
          <h5>Bachelor in Computer Science</h5>
          <h4>Computer Science</h4>
        </div>
        <div className="team-member">
          <img src="/assets/Teachers/Rana.jpg" alt="Rana Sujeet Kumar" />
          <h3>Rana Sujeet Kumar</h3>
          <h5>Bachelor in Computer Science Information & Technology</h5>
          <h4>Physics</h4>
        </div>
      </div>
       
    </div>
  );
}

export default Teachers;