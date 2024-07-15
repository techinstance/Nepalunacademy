// src/components/SlidingInformation.js

import React, { useEffect } from 'react';
import './Notice.css';

const Notice = () => {
  useEffect(() => {
    const scrollAppear = () => {
      const introText = document.querySelector('.side-text');
      const sideImage = document.querySelector('.sideImage');
      const introPosition = introText.getBoundingClientRect().top;
      const imagePosition = sideImage.getBoundingClientRect().top;

      const screenPosition = window.innerHeight / 1.2;

      if (introPosition < screenPosition) {
        introText.classList.add('side-text-appear');
      }
      if (imagePosition < screenPosition) {
        sideImage.classList.add('sideImage-appear');
      }
    };

    window.addEventListener('scroll', scrollAppear);

    return () => {
      window.removeEventListener('scroll', scrollAppear);
    };
  }, []);

  const switchTAB = () => {
    const listSwitch = document.getElementById('list-switch');
    const searchSwitch = document.getElementById('search-switch');
    if (listSwitch.style.display === 'grid') {
      listSwitch.style.display = 'none';
      searchSwitch.style.display = 'none';
    } else {
      listSwitch.style.display = 'grid';
      listSwitch.style.height = '50vh';
      listSwitch.style.marginLeft = '5%';
      searchSwitch.style.display = 'block';
      searchSwitch.style.marginLeft = '10%';
    }
  };

  const sideMenu = (side) => {
    const menu = document.getElementById('side-menu');
    if (side === 0) {
      menu.style.transform = 'translateX(0vh)';
      menu.style.position = 'fixed';
    } else {
      menu.style.transform = 'translateX(-100%)';
    }
  };

  return (
    <div>
      <marquee
        style={{ background: 'linear-gradient(to right, #FA4B37, #DF2771)', marginTop: '100px' }}
        direction="left"
     
        scrollAmount="18"
      >
        <div className="marqu">
          “Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” “Your attitude, not your aptitude, will determine your altitude.” “If you think education is expensive, try ignorance.” “The only person who is educated is the one who has learned how to learn …and change.”
        </div>
      </marquee>

    </div>
  );
};

export default Notice;
