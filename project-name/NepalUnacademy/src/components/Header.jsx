import React from 'react';
import './Header.css'; // Make sure to create and import the CSS file
import { useStateContext } from '../Context/ContextProvider';
import { Link } from 'react-router-dom';
import Notice from '../views/Notice';

const Header = () => {
  const slide = () => {
    // Add functionality for slide here
  };

  const { user, token, setuser, setToken, notification } = useStateContext();

  const sideMenu = (action) => {
    console.log("it hit a function ")
    const sideMenu = document.getElementById('side-menu');
    console.log(sideMenu)
    if (action === 0) {
      sideMenu.style.display = 'block';
      sideMenu.style.transform = "translateX(0%)";
      console.log("block was Hit");
    } else {
      sideMenu.style.display = 'none';
      console.log("block was Hitted ")
    }
  };

  return (
    <>
      <main>
      <Notice />
      </main>
      <header id="header">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src="assets/images/icon/Logo.png" alt="logo" /><img src="assets/Category/nepalflag.gif" style={{ height: '62px', width: '54px', verticalAlign: 'normal' }} alt="Nepal Flag" />
            </Link>
          </div>
          <div className='space'>

          </div>
          <ul className="nav-links">
            <li><Link to="/Vacancies">Exams</Link></li>
            <li><Link to="/studyMaterial">Study Materials</Link></li>
            <li><Link to="/liveSessions">Online Sessions</Link></li>
            <li><Link to="/courses">Our Courses</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/educators">Educators</Link></li>
          </ul>
          <div className="srch">
            <input type="text" className="search" placeholder="Search here..." />
            <img src="assets/images/icon/search.png" alt="search" onClick={slide} />
          </div>
          {token ? (
            <span>
              <Link to="mylearning" style={{ padding: "0px 8px" }}>mylearning</Link> @{user.name}
            </span>
          ) : (
            <Link className="get-started" to="/login">Get Started</Link>
          )}
          <img src="assets/images/icon/menu.png" className="menu" onClick={() => {sideMenu(0); console.log("This was Hit") }} alt="menu" />
        </nav>

        <div className="side-menu" id="side-menu">
          <div className="close" onClick={() => sideMenu(1)}>
            <img src="assets/images/icon/close.png" alt="close" />
          </div>
          <ul>
            <li><Link to="#about_section">About</Link></li>
            <li><Link to="#study_materials">Study Materials</Link></li>
            <li><Link to="#online_section">Online Sessions</Link></li>
            <li><Link to="#courses_section">Our Courses</Link></li>
            <li><Link to="#contactus_section">Contact Us</Link></li>
            <li><Link to="#feedBACK">Feedback</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
