import React, { useState } from 'react';
import './Exploring.css';

const Exploring = () => {
  const [activeTab, setActiveTab] = useState('Class 12 NEB');

  const tabs = [
    'Class 10 SEE',
    'Class 12 NEB',
    'Diploma Bridge Course',
    'CTEVT',
    'IOE Preparation',
    'IOM Preparation',
    'IELTS Preparation',
  ];

  const studyMaterials = {
    'Class 10 SEE': [
      { title: 'SEE solutions', color: '#FFF9C4', icon: '📘', link: '#' },
      { title: 'Previous year question papers', color: '#E1BEE7', icon: '📚', link: '#' },
      { title: 'Sample question papers', color: '#BBDEFB', icon: '📖', link: '#' },
      { title: 'SEE Books', color: '#C8E6C9', icon: '📔', link: '#' },
      { title: 'Important question papers', color: '#D1C4E9', icon: '📄', link: '#' },
    ],
    'Class 12 NEB': [
      { title: 'NEB solutions', color: '#FFF9C4', icon: '📘', link: '#' },
      { title: 'Previous year question papers', color: '#E1BEE7', icon: '📚', link: '#' },
      { title: 'Sample question papers', color: '#BBDEFB', icon: '📖', link: '#' },
      { title: 'NEB Books', color: '#C8E6C9', icon: '📔', link: '#' },
      { title: 'Important question papers', color: '#D1C4E9', icon: '📄', link: '#' },
    ],
    'Diploma Bridge Course': [
      { title: 'Diploma solutions', color: '#FFF9C4', icon: '📘', link: '#' },
      { title: 'Previous year question papers', color: '#E1BEE7', icon: '📚', link: '#' },
      { title: 'Sample question papers', color: '#BBDEFB', icon: '📖', link: '#' },
      { title: 'Diploma Books', color: '#C8E6C9', icon: '📔', link: '#' },
      { title: 'Important question papers', color: '#D1C4E9', icon: '📄', link: '#' },
    ],
    'CTEVT': [
      { title: 'CTEVT solutions', color: '#FFF9C4', icon: '📘', link: '#' },
      { title: 'Previous year question papers', color: '#E1BEE7', icon: '📚', link: '#' },
      { title: 'Sample question papers', color: '#BBDEFB', icon: '📖', link: '#' },
      { title: 'CTEVT Books', color: '#C8E6C9', icon: '📔', link: '#' },
      { title: 'Important question papers', color: '#D1C4E9', icon: '📄', link: '#' },
    ],
    'IOE Preparation': [
      { title: 'IOE solutions', color: '#FFF9C4', icon: '📘', link: '#' },
      { title: 'Previous year question papers', color: '#E1BEE7', icon: '📚', link: '#' },
      { title: 'Sample question papers', color: '#BBDEFB', icon: '📖', link: '#' },
      { title: 'IOE Books Preparation', color: '#C8E6C9', icon: '📔', link: '#' },
      { title: 'Important question papers', color: '#D1C4E9', icon: '📄', link: '#' },
    ],
    'IOM Preparation': [
      { title: 'IOM solutions', color: '#FFF9C4', icon: '📘', link: '#' },
      { title: 'Previous year question papers', color: '#E1BEE7', icon: '📚', link: '#' },
      { title: 'Sample question papers', color: '#BBDEFB', icon: '📖', link: '#' },
      { title: 'IOM Books', color: '#C8E6C9', icon: '📔', link: '#' },
      { title: 'Important question papers', color: '#D1C4E9', icon: '📄', link: '#' },
    ],
    'IELTS Preparation': [
      { title: 'IELTS solutions', color: '#FFF9C4', icon: '📘', link: '#' },
      { title: 'Previous year question papers', color: '#E1BEE7', icon: '📚', link: '#' },
      { title: 'Sample question papers', color: '#BBDEFB', icon: '📖', link: '#' },
      { title: 'IELTS Books', color: '#C8E6C9', icon: '📔', link: '#' },
      { title: 'Important question papers', color: '#D1C4E9', icon: '📄', link: '#' },
    ],
  };

  return (
    <div className="offerings-container">
      <h1 className="offerings-title">
        Explore all our <span className="highlight">Offerings</span>
      </h1>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {['IELTS Preparation', 'IOE Preparation', 'IOM Preparation', 'CTEVT'].includes(tab) && (
              <span className="new-badge">NEW</span>
            )}
          </button>
        ))}
      </div>
      <div className="study-materials">
        <h2 className="materials-title">Study Materials</h2>
        <div className="materials-list">
          {(studyMaterials[activeTab] || []).map((material, index) => (
            <a
              key={index}
              href={material.link}
              className="material-card"
              style={{ backgroundColor: material.color }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-icon">{material.icon}</span>
              <span className="material-title">{material.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exploring;
