import React from 'react';
import './css/ContactUs.css';

function validateForm() {
    const name = document.getElementById('contact-name').value;
    const phone = document.getElementById('contact-phone').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (name.trim() === '') {
        alert('Please enter your name');
        return false;
    }
    if (phone.trim() === '') {
        alert('Please enter your phone number');
        return false;
    }
    if (email.trim() === '') {
        alert('Please enter your email');
        return false;
    }
    if (message.trim() === '') {
        alert('Please enter your message');
        return false;
    }

    return true;
}

const ContactUs = () => {
    return (
        <div className="contact-body">
            <div className="contact-container">
                <h1>📞 Get in Touch</h1>
                <p>Fill up the form to get in touch with us.</p>
                <div className="contact-box">
                    <div className="contact-left">
                        <h3>✏️ Fill the Form*</h3>
                        <form id="contactForm" onSubmit={(e) => { if (!validateForm()) e.preventDefault(); }}>
                            <div className="contact-input-row">
                                <div className="contact-input-group">
                                    <label className="contact-label">Name*</label>
                                    <input type="text" id="contact-name" className="contact-input" placeholder="Enter your Name" required />
                                </div>
                                <div className="contact-input-group">
                                    <label className="contact-label">Phone*</label>
                                    <input type="text" id="contact-phone" className="contact-input" placeholder="+977 98 000 000 00" required />
                                </div>
                            </div>
                            <div className="contact-input-row">
                                <div className="contact-input-group">
                                    <label className="contact-label">Email*</label>
                                    <input type="email" id="contact-email" className="contact-input" placeholder="Enter your Email" required />
                                </div>
                            </div>
                            <div className="contact-input-row">
                                <div className="contact-input-group">
                                    <label className="contact-label">Message*</label>
                                    <textarea id="contact-message" className="contact-textarea" placeholder="Type your Message here" rows="4" required></textarea>
                                </div>
                            </div>
                            <button type="submit" className="contact-button">Submit</button>
                        </form>
                    </div>
                    <div className="contact-right">
                        <h3><img src="assets/Category/nepalflag.gif" style={{ height: '62px', width: '54px', verticalAlign: 'normal' }} alt="Nepal Flag" /> Contact Us</h3>
                        <table className="contact-table">
                            <tbody>
                                <tr>
                                    <td>Email:</td>
                                    <td>example@example.com</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>+977 98 000 000 00</td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td>Janakpurdham, Nepal</td>
                                </tr>
                            </tbody>
                        </table>
                        <iframe
                            className="contact-iframe"
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d527202.7774037998!2d84.82586835793073!3d28.13268206584593!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721904335590!5m2!1sen!2sin" 
                            allowFullScreen=""
                            aria-hidden="true"
                            tabIndex="0"
                            title="Google Maps Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
