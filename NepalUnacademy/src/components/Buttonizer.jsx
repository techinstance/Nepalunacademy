import React, { useState, useEffect } from 'react';
import './Buttonizer.css';
import plusIcon from '/assets/social png/phone-call.png'; // Replace with the path to your '+' image
import closeIcon from '/assets/social png/phone-call.png'; // Replace with the path to your '✕' image

const Buttonizer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        setIsOpen(false);
      }, 3000); // Auto-close after 5 seconds
    }
    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or `isOpen` changes
  }, [isOpen]);

  return (
    <div className="buttonizer-container">
      <div className={`buttonizer-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <img src={isOpen ? closeIcon : plusIcon} alt={isOpen ? 'Close' : 'Open'} />
      </div>
      <div className={`buttonizer-group ${isOpen ? 'open' : ''}`}>
        <div className="buttonizer">
          <a href="https://t.me/+r67ieHsZmDhjMjE1" target="_blank" rel="noopener noreferrer">
            <img src="./assets/social png/telegram.png" alt="Telegram" />
          </a>
        </div>
        <div className="buttonizer">
          <a href="https://www.facebook.com/profile.php?id=61560227907266" target="_blank" rel="noopener noreferrer">
            <img src="./assets/social png/messenger.png" alt="Messenger" />
          </a>
        </div>
        <div className="buttonizer">
          <a href="https://chat.whatsapp.com/HIFJEwZXE4cI8thSqdDM3O" target="_blank" rel="noopener noreferrer">
            <img src="./assets/social png/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>
        <div className="buttonizer">
          <a href="https://www.instagram.com/nepal_unacademy/">
            <img src="./assets/social png/insta.jpg" alt="Instagram" />
          </a>
        </div>
        <div className="buttonizer">
          <a href="tel:+9195461289425">
            <img src="./assets/social png/phone-call.png" alt="Phone" />
          </a>
        </div>
        <div className="buttonizer">
          <a href="mailto:nepalunacademy@gmail.com">
            <img src="./assets/social png/gmail.png" alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Buttonizer;
