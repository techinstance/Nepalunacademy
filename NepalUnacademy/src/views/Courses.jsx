// src/components/Courses.js

import React from 'react';
import './Courses.css';

const courses = [
  {
    title: 'Web Development',
    description: 'Learn to build modern web applications using HTML, CSS, and JavaScript.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Data Science',
    description: 'Analyze data and build machine learning models using Python.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Mobile Development',
    description: 'Create mobile applications for Android and iOS using React Native.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Digital Marketing',
    description: 'Master digital marketing strategies and tools for online success.',
    image: 'https://via.placeholder.com/150',
  },
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h2 className="courses-title">Our Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
