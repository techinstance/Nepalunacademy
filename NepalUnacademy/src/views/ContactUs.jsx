import React from 'react';
import './css/ContactUs.css';

function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

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
        <div className="container">
            <h1>Get in Touch</h1>
            <p>Fill up the form to get in touch with us.</p>
            <div className="contact-box">
                <div className="container-left">
                    <h3>Fill the Form*</h3>
                    <form id="contactForm" onSubmit={(e) => { if (!validateForm()) e.preventDefault(); }}>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Name*</label>
                                <input type="text" id="name" placeholder="Enter your Name" required />
                            </div>
                            <div className="input-group">
                                <label>Phone*</label>
                                <input type="text" id="phone" placeholder="+91 1234567890" required />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Email*</label>
                                <input type="email" id="email" placeholder="youremail@gmail.com" required />
                            </div>
                            <div className="input-group">
                                <label>Subject</label>
                                <input type="text" id="subject" placeholder="Inquiry" />
                            </div>
                        </div>
                        <label>Message*</label>
                        <textarea rows="10" id="message" placeholder="Enter your Message" required></textarea>
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>
                <div className="container-right">
                    <h3>Reach Us</h3>
                    <table>
                        <tr>
                            <td>Email: </td>
                            <td>contact@msijanakpuri.com</td>
                        </tr>
                        <tr>
                            <td>Phone: </td>
                            <td>+91 011-45656183</td>
                        </tr>
                        <tr>
                            <td>Address: </td>
                            <td>Maharaja Surajmail Institute <br />
                                C-4, Janakpuri, <br />
                                Delhi - 110058, India</td>
                        </tr>
                    </table>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2888210618585!2d77.09131724016883!3d28.621104670527558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04afb8dbcfe1%3A0xaff19e718be2136b!2sMaharaja%20Surajmal%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1711214006526!5m2!1sen!2sin" width="800" height="275" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;