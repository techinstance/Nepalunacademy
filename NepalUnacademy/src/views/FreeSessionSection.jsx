import React, { useState } from 'react';
import './FreeSessionSection.css';
import Modal from 'react-modal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

Modal.setAppElement('#root');

const FreeSessionSection = () => {
  const [sessionMode, setSessionMode] = useState('online');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [autoFillOtp, setAutoFillOtp] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [calendarModalIsOpen, setCalendarModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [feedback, setFeedback] = useState('');
  const [emailLink, setEmailLink] = useState('');
  const [whatsAppLink, setWhatsAppLink] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const sendOtp = () => {
    const generatedOtp = '14515117';
    setOtp(generatedOtp);
    setOtpSent(true);
    setTimeout(() => {
      setAutoFillOtp(generatedOtp);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formProps = new FormData(e.target);
    const formObj = Object.fromEntries(formProps);
    formObj.scheduleDate = selectedDate.toString(); // Add selected date to form data
    setFormData(formObj);
    generateEmailLink(formObj);
    generateWhatsAppLink(formObj);
    setModalIsOpen(true);
    e.target.reset();
  };

  const generateEmailLink = (formObj) => {
    const mailtoLink = `mailto:nepalunacademy@gmail.com?subject=New Free Session Booking&body=${encodeURIComponent(JSON.stringify(formObj, null, 2))}`;
    setEmailLink(mailtoLink);
  };

  const generateWhatsAppLink = (formObj) => {
    const message = `New Free Session Booking:\n\n${JSON.stringify(formObj, null, 2)}`;
    const whatsAppLink = `https://api.whatsapp.com/send?phone=+9779829911255&text=${encodeURIComponent(message)}`;
    setWhatsAppLink(whatsAppLink);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setCalendarModalIsOpen(false); // Close calendar modal after selecting a date
  };

  return (
    <section className="free-session-section">
      <div className="content">
        <div className="visual">
        <img
  src="/assets/girl.png"
  alt="Girl Image"
  style={{
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    width: '100%', 
    borderRadius: '8px',
    margin: '0 auto',
    transition: 'transform 0.3s ease', 
  }}

/>

        
        </div>
        <div className="form-container">
          <h2>Book your Free Session <span role="img" aria-label="boy">👦<img src="/assets/Category/nepalflag.gif" style={{ height: '24px', width: '24px', verticalAlign: 'middle' }} alt="Nepal Flag" /></span></h2>
          <p>Learn from Nepal's best teachers <span role="img" aria-label="like">👍</span></p>
          <div className="session-mode-toggle">
            <button
              className={sessionMode === 'online' ? 'active' : ''}
              onClick={() => setSessionMode('online')}
            >
              Online
            </button>
            <button
              className={sessionMode === 'offline' ? 'active' : ''}
              onClick={() => setSessionMode('offline')}
            >
              Offline
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="childName" placeholder="Enter your Name Here " required />
            <div className="mobile-input">
              <input type="text" name="mobileNumber" placeholder="Enter your Mobile Number" required />
              <button type="button" onClick={sendOtp}>Send OTP</button>
            </div>
            {otpSent && (
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={autoFillOtp}
                onChange={(e) => setAutoFillOtp(e.target.value)}
                required
              />
            )}
            <input type="email" name="email" placeholder="Email Address" required />
            <select name="state" required>
              <option value="">State</option>
              <option value="state1">State 1</option>
              <option value="state2">State 2</option>
              <option value="state2">State 3</option>
              <option value="state2">State 4</option>
              <option value="state2">State 5</option>
              <option value="state2">State 6</option>
              <option value="state2">State 7</option>

              {/* Add more states as needed */}
            </select>
            <textarea
              name="feedback"
              placeholder="Leave your feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="2"
              required
            />
            <button type="button" className="schedule-btn" onClick={() => setCalendarModalIsOpen(true)}>Make Schedule</button>
            <button type="submit" className="submit-btn">Continue to Schedule</button>
          </form>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Confirmation Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Form submitted successfully!</h2>
        <p>Your form has been submitted with the following details:</p>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <a href={emailLink} className="send-email-btn">Send Email</a>
        <a href={whatsAppLink} className="send-whatsapp-btn">Send WhatsApp</a>
        <button onClick={() => setModalIsOpen(false)} className="close-btn">Close</button>
      </Modal>
      <Modal
        isOpen={calendarModalIsOpen}
        onRequestClose={() => setCalendarModalIsOpen(false)}
        contentLabel="Calendar Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Select Schedule Date</h2>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
        />
        <button onClick={() => setCalendarModalIsOpen(false)} className="close-btn">Close</button>
      </Modal>
    </section>
  );
};

export default FreeSessionSection;
