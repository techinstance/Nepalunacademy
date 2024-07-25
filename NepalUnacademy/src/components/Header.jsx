import React, { useState } from 'react';
import './Header.css'; // Make sure to create and import the CSS file
import { useStateContext } from '../Context/ContextProvider';
import { Link } from 'react-router-dom';
import Notice from '../views/Notice';

const Header = () => {
  const slide = () => {
    // Add functionality for slide here
  };

  const { user, token, setuser, setToken, notification } = useStateContext();

  const [open,setOpen] = useState();

  const sideMenu = (action) => {
    const sideMenu = document.getElementById('side-menu');
    if (action === 0) {
      sideMenu.style.display = 'block';
      sideMenu.style.transform = "translateX(0%)";
    } else {
      sideMenu.style.display = 'none';
    }
  };

  const Logout = ()=>{
    axiosClient.post('/logout')
    .then(({ data }) => {
      setuser(data.user);
     
    })
    .catch((error) => {
      const response = error.response;
      if (response && response.status === 422) {
        setMessage(response.data.message);
      }
      console.log(error);
    });
  }

  return (
    <>
      <main>
      <Notice />
      </main>
      <header id="header">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src="assets/images/icon/logo2.jpg" alt="logo" /><img src="assets/Category/nepalflag.gif" style={{ height: '62px', width: '54px', verticalAlign: 'normal' }} alt="Nepal Flag" />
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
            <span className='profile'>
              <Link to="mylearning" style={{ padding: "0px 8px" }}>mylearning</Link> @{user.name} 
              <img src="assets/images/icon/chevron-down.svg" alt='Logout' onClick={()=>{setOpen(1)}}/>
                {open==1 ? <span id='logout' onClick={()=>{setOpen(0)}} >Logout</span> :<></>}
            </span>
            
          ) : (
            <Link className="get-started" to="/login">Get Started</Link>
          )}
          <img src="assets/images/icon/menu.png" className="menu" onClick={() => {setOpen(0)}} alt="menu" />
        </nav>

        <div className="side-menu" id="side-menu">
          <div className="close" onClick={() => sideMenu(1)}>
            <img src="assets/images/icon/close.png" alt="close" />
          </div>
          <ul>
            <li><Link to="/studyMaterial"  onClick={() => sideMenu(1)}>Study Materials</Link></li>
            <li><Link to="/liveSessions"  onClick={() => sideMenu(1)}>Online Sessions</Link></li>
            <li><Link to="/courses"  onClick={() => sideMenu(1)}>Our Courses</Link></li>
            <li><Link to="/contact"  onClick={() => sideMenu(1)}>Contact Us</Link></li>
            <li><Link to="/Vacancies"  onClick={() => sideMenu(1)}>Exams</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
