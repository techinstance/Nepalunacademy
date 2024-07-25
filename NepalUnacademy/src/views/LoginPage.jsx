import React from 'react';
import './LoginPage.css';
import facebookIcon from '/assets/images/icon/facebook.png'; // Make sure you have these icons in your assets folder
import instagramIcon from '/assets/images/icon/insta.png';
import twitterIcon from '/assets/images/icon/linkedin.png';
import linkedinIcon from '/assets/images/icon/linkedin.png';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useStateContext } from '../Context/ContextProvider';
import axiosClient from '../axios-client';


const LoginPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { setuser, setToken } = useStateContext();
  const [message, setMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axiosClient.post('/login', payload)
      .then(({ data }) => {
        setuser(data.user);
        setToken(data.token);
      })
      .catch((error) => {
        const response = error.response;
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
        console.log(error);
      });
  };

  const goFurther = () => {
    if (document.getElementById("chkAgree").checked) {
      document.getElementById('btnSubmit')
    } else {
      document.getElementById('btnSubmit')
    }
  };

  const googleSignIn = () => {
    window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo">
 
      <img src="/assets/images/icon/logo4.jpg" alt="logo" />
      <img src="/assets/Category/nepalflag.gif" style={{ height: '62px', width: '54px', verticalAlign: 'normal' }} alt="Nepal Flag" />
      <div className="image-container">
            <video src="./assets/elearning-banner.mp4" controls autoPlay loop muted className="video"></video>
          </div>
        </div>
        <div className="login-content">
          <div className="form-container">
            <h1>Welcome Back!</h1>
            <p>Login to continue</p>
            <form onSubmit={handleSubmit}>
               <span>{message}</span>
              <div className="input-wrapper">
                <input type="email" placeholder="your mail@gmail.com" ref={emailRef} required/>
              </div>
              <div className="input-wrapper">
                <input type="password" placeholder="Password" ref={passwordRef} required />
              </div>
              <div className="options">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit" className="sign-in-button">Sign In</button>
            </form>
            <div className="sign-up">
              <p>New User?<Link to="/SignUp">Sign Up</Link></p>
            </div>
            <div className="footer">
              <p>Copyright Reserved @2021</p>
              <p>
                <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a>
              </p>
              <div className="social-media">
                <p>Follow us on social media:</p>
                <div className="icons">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
