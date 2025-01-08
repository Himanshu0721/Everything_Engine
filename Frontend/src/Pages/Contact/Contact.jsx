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
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaBuilding className="icon" /> The entrepreneurship network</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaEnvelope className="icon" /> info@entrepreneurshipnetwork.net</p>
        </div>
        <div className="social-icons" style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '80px', fontSize:'33px' }}>
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
        <div
  id="toast"
  className={`toast ${showSuccess ? 'show' : ''}`}
  style={{
    position: 'fixed',
    top: '20px',     
    right: '20px',      
    zIndex: 1000, 
    padding: '20px 40px', 
    fontSize: '19px', 
    borderRadius: '5px', 
    background: '#4caf50', 
    color: 'white', 
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  }}
>
  <FaCheckCircle style={{ color: 'white', marginRight: '5px' }} />
  Sent Successfully
</div>

      </div>
    </div>
  );
};

export default Contact;
