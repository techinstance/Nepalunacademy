import React from 'react';
import './css/ContactUs.css'; // Import your CSS file

const ContactUs = () => {
  return (
    <section className="main-box">
      <div className="container">
        <div className="contact-form d-flex">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="listing-box">
              <ul>
                <li>
                  <span>
                    <img src="project-name\NepalUnacademy\public\assets\social png\location.png" alt="Location" />
                  </span>
                  <span style={{ fontSize: '14px' }}>janakpur, Nepal</span>
                </li>
                <li>
                  <span>
                    <img src="project-name\NepalUnacademy\public\assets\social png\gmail.png" alt="Email" />
                  </span>
                  <span style={{ fontSize: '14px' }}>technologyinstance@gmail.com</span>
                </li>
                <li>
                  <span>
                    <img src="project-name\NepalUnacademy\public\assets\social png\phone_icon.png" alt="Phone" />
                  </span>
                  <span style={{ fontSize: '14px' }}>+91 6203370346</span>
                </li>
              </ul>
            </div>
            <div className="social-icons">
              <ul>
                <li>
                  <a href="https://www.facebook.com/solutionworld24x7/">
                    <img src="project-name\NepalUnacademy\public\assets\social png\facebook.png" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Solution__World">
                    <img src="project-name\NepalUnacademy\public\assets\social png\twitter.png" alt="Twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/nepal_unacademy?igsh=eTV2OXNvMzVocmtx">
                    <img src="project-name\NepalUnacademy\public\assets\social png\instagram.png" alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/tech-instance/">
                    <img src="project-name\NepalUnacademy\public\assets\social png\linkedin_.png" alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@SolutionWorld24x7">
                    <img src="project-name\NepalUnacademy\public\assets\social png\youtube.png" alt="YouTube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="info-form">
            <h2>Send a Message</h2>
            <form>
              <div className="inner-form">
                <div className="input-box content-width">
                  <input type="text" name="name" required />
                  <span>Name</span>
                </div>
                <div className="input-box content-width">
                  <input type="text" name="phone" required />
                  <span>Mobile No.</span>
                </div>
                <div className="input-box content-width">
                  <input type="text" name="email" required />
                  <span>Email Address</span>
                </div>
                <div className="input-box content-width">
                  <input type="text" name="subject" required />
                  <span>Subject</span>
                </div>
                <div className="input-box content-full-width">
                  <textarea required></textarea>
                  <span>Write Your message here....</span>
                </div>
                <div className="button-area">
                  <button type="submit">Send Message</button>
                  <span style={{ fontSize: '12px', marginLeft: '10px' }}></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;