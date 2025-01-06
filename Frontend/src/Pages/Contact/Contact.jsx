import React, { useState } from 'react';
import './Contact.css';
import { FaBuilding, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>CONTACT US</h2>
        <p>
          Feel free to ask your queries if needed or want to share your thoughts, our support team is here to help you out.
        </p>
        <div className="contact-details">
          <p><FaBuilding className="icon" />The entrepreneurship network</p>
          <p><FaEnvelope className="icon" /> info@entrepreneurshipnetwork.net</p>
        </div>
        <div className="social-icons" style={{ display: 'flex', justifyContent: 'flex-end', gap: '30px', marginTop: '100px', fontSize:'33px' }}>
          <a href="https://www.instagram.com/theentrepreneurshipnetwork?igsh=MW9peTU5c3N3cWczZA==" target="_blank" rel="noopener noreferrer" className="icon-text">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.linkedin.com/company/the-entrepreneurship-network/" target="_blank" rel="noopener noreferrer" className="icon-text">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
      <div className="background-block"></div>
      <div className="contact-form">
        <h3>Send a Message</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email id" required />
          <textarea name="message" placeholder="Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
        {showSuccess && (
          <div className="success-message">
            <FaCheckCircle style={{ color: 'green', marginRight: '5px' }} /> Sent Successfully
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
