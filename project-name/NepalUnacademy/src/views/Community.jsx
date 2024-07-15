// App.jsx
import React from "react";
import "./Community.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faWhatsapp, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

function Community() {
  return (
    <div className="community-section">
      <div className="header">
        <h1>JOIN OUR COMMUNITY</h1>
        <p>
          Our Community Provides a high quality Services and Support in Online Education in Nepal 
        </p>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/profile.php?id=61560227907266" className="facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://x.com/Nepal_UnAcademy" className="twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/nepal_unacademy" className="instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://chat.whatsapp.com/HIFJEwZXE4cI8thSqdDM3O" className="whatsapp">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://telegram.org" className="telegram">
          <FontAwesomeIcon icon={faTelegramPlane} />
        </a>
      </div>
      </div>

  );
}

export default Community;
