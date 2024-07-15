import React from "react";
import "./AboutCard.css";

const AboutCard = () => {
  const homeAbout = [
    {
      cover: './src/assets/images/icon/papers.jpg',
      title: 'Flexible Learning',
      desc: 'Learn at your own pace from the comfort of your home.',
    },
    {
      cover: './src/assets/images/icon/help.png',
      title: 'Expert Instructors',
      desc: 'Gain knowledge from industry experts with real-world experience.',
    },
    {
      cover: './src/assets/images/icon/discussion.png',
      title: 'Community Support',
      desc: 'Join a community of learners and educators to enhance your learning experience.',
    }
  ];

  return (
    <section className='aboutHome'>
      <div className='container flexSB'>
        <div className='left row'>
          <img src='./src/assets/AboutCard/about.webp' alt='About Us' />
        </div>
        <div className='right row'>
          <div className="heading">
            <h3 className='subtitle'>LEARN ANYTHING</h3>
            <h1 className='title'>Benefits About Online Learning Expertise</h1>
          </div>
          <div className='items'>
            {homeAbout.map((val, index) => (
              <div className='item flexSB' key={index}>
                <div className='img'>
                  <img src={val.cover} alt={val.title} />
                </div>
                <div className='text'>
                  <h2>{val.title}</h2>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCard;
