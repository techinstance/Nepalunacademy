import React from 'react';
import './Courses.css';
import courseBg from '/src/assets/Category/course-bg.png';
import course1 from '/src/assets/Category/course-1.png';
import course2 from '/src/assets/Category/course-2.png';
import course3 from '/src/assets/Category/course-3.png';
import course4 from '/src/assets/Category/course-4.png';
import course5 from '/src/assets/Category/course-5.png';
import course6 from '/src/assets/Category/course-6.png';
import starFill from '/src/assets/Category/star-fill.svg';
import fileOutline from '/src/assets/Category/file-outline.svg';
import userOutline from '/src/assets/Category/user-outline.svg';

const Courses = () => (
  <section className="section course has-bg-image" aria-labelledby="course-label" style={{ backgroundImage: `url(${courseBg})` }}>
    <div className="container">
      <p className="title-sm section-subtitle text-center">Featured Courses</p>
      <h2 className="headline-md section-title text-center" id="course-label">
        Choose Unlimited <span className="span has-after">Courses</span>
      </h2>
      <ul className="grid-list">
        {courseData.map((course, index) => (
          <li className="card-container" key={index}>
            <div className="card course-card">
              <figure className="card-banner">
                <img src={course.image} width="370" height="248" loading="lazy" alt={course.title} className="img-cover" />
              </figure>
              <div className="card-content">
                <div className="wrapper">
                  <p className="title-lg card-price">{course.price}</p>
                  <div className="rating-wrapper">
                    {Array(4).fill().map((_, i) => (
                      <img src={starFill} width="16" height="16" loading="lazy" alt="" key={i} />
                    ))}
                  </div>
                </div>
                <h3 className="title-lg card-title">{course.title}</h3>
                <div className="card-meta wrapper">
                  <p className="title-sm">
                    <img src={fileOutline} width="20" height="20" loading="lazy" alt="" />
                    <span className="span">{course.lessons}</span>
                  </p>
                  <p className="title-sm">
                    <img src={userOutline} width="20" height="20" loading="lazy" alt="" />
                    <span className="span">{course.students}</span>
                  </p>
                </div>
              </div>
              <a href="#" className="layer-link" aria-label={`Course Details, ${course.title}`}></a>
            </div>
          </li>
        ))}
      </ul>
      <a href="#" className="btn btn-primary">View All Courses</a>
    </div>
  </section>
);

const courseData = [
  {
    image: course1,
    price: '$29.28',
    title: 'Basic Fundamentals of Interior & Graphics Design',
    lessons: '2 Lessons',
    students: '4k Students',
  },
  {
    image: course2,
    price: 'Free',
    title: 'Increasing Engagement with Instagram & Facebook',
    lessons: '2 Lessons',
    students: '4k Students',
  },
  {
    image: course3,
    price: '$72.39',
    title: 'Introduction to Color Theory & Basic UI/UX',
    lessons: '2 Lessons',
    students: '4k Students',
  },
  {
    image: course4,
    price: '$72.39',
    title: 'Financial Security Thinking and Principles Theory',
    lessons: '2 Lessons',
    students: '4k Students',
  },
  {
    image: course5,
    price: 'Free',
    title: 'Logo Design: From Concept to Presentation',
    lessons: '2 Lessons',
    students: '4k Students',
  },
  {
    image: course6,
    price: '$29.82',
    title: 'Professional Ceramic Moulding for Beginners',
    lessons: '2 Lessons',
    students: '4k Students',
  },
];

export default Courses;
