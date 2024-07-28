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
    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      <marquee
        style={{ background: 'linear-gradient(to right, #FA4B37, #DF2771)', height:'max-content' }}
        direction="left"
             
        scrollAmount="18"
      >
        <div className="marqu">
         🔓 Unlock the doors to knowledge with NepalUnAcademy — your gateway to a world of education tailored to Nepal's diverse academic landscape. 📚 From comprehensive courses to expert guidance, we offer unparalleled learning experiences for every student. 🌟 Please note, NepalUnAcademy operates independently and is not associated with Unacademy India. 🚫
        </div>
      </marquee>

    </div>
  );
};

export default Notice;
