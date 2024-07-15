import React from 'react';
import './AdvantagesSection.css';

const advantages = [
  {
    imgSrc: "./src/assets/AboutCard/NepalUnAcademy3.jpeg",
    altText: "Conceptual Clarity",
    description: "Conceptual clarity through visualisation",
  },
  {
    imgSrc: "./src/assets/AboutCard/NepalUnAcademy2.jpeg",
    altText: "Personalized Learning",
    description: "Personalised learning programs",
  },
  {
    imgSrc: "./src/assets/AboutCard/NepalUnAcademy1.jpeg",
    altText: "Individual Attention",
    description: "Unmatched individual attention",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="advantages-section">
<h1 style={{ 
  fontSize: '36px', 
  fontWeight: 'bold', 
  color: '#FF5722', 
  textAlign: 'center', 
  textTransform: 'uppercase', 
  letterSpacing: '1px',
  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  margin: '30px 0'
}}>
  Discover the Nepal UnAcademy Advantage
</h1>




      <div className="advantages-container">
        {advantages.map((advantage, index) => (
          <div key={index} className="advantage-item">
            <img src={advantage.imgSrc} alt={advantage.altText} />
            <h3>{advantage.description}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
