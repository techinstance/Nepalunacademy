import React from 'react';
import './RegisterPag.css';
import facebookIcon from '/assets/images/icon/facebook.png';
import instagramIcon from '/assets/images/icon/insta.png';
import twitterIcon from '/assets/images/icon/linkedin.png';
import linkedinIcon from '/assets/images/icon/linkedin.png';
import { useState, useRef } from 'react';
import axiosClient from "../axios-client.js";
import { useStateContext } from "../Context/ContextProvider.jsx";


const RegisterPag = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const phonenoRef = useRef();
  const { setuser, setToken } = useStateContext();
  const [errors, setErrors] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
      phone_no:phonenoRef.current.value
    };

    axiosClient
      .post('/SignUp', payload)
      .then(({ data }) => {
       
        setuser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="logo">
          <img src="/assets/images/icon/logo4.jpg" alt="logo" />
          <img src="/assets/Category/nepalflag.gif" style={{ height: '62px', width: '54px', verticalAlign: 'normal' }} alt="Nepal Flag" />
        </div>
        <div className="register-content">
          <div className="image-container">
            <video src="./assets/elearning-banner.mp4" controls autoPlay loop muted className="video"></video>
          </div>
          <div className="form-container">
            <h1>Create an Account</h1>
            <p>Register to get started</p>
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <input type="text" placeholder="Full Name" ref={nameRef} required />
              </div>
              <div className="input-wrapper">
                <input type="email" placeholder="your mail@gmail.com" ref={emailRef} required />
              </div>
              <div className="input-wrapper">
                <input type="text" placeholder="Phone Number" ref={phonenoRef} required  />
              </div>
              <div className="inp">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  ref={passwordRef}
                  placeholder="Password"
                />
                <span
                  className="password-toggle"
                  role="img"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </span>
              </div>
              <div className="inp">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  ref={passwordConfirmationRef}
                  placeholder="Confirm Password"
                />
                <span
                  className="password-toggle"
                  role="img"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </span>
              </div>
              <div className="options">
                <label>
                  <input type="checkbox" />
                  I agree to the <a href="#">terms & conditions</a>
                </label>
              </div>
              <button type="submit" className="sign-up-button">Sign Up</button>
            </form>
            {errors && (
              <div className="alert">
                {Object.keys(errors).map((key) => (
                  <p key={key}>{errors[key][0]}</p>
                ))}
              </div>
            )}
            <div className="footer">
              <p>Already have an account? <a href="/login">Log In</a></p>
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

export default RegisterPag;
