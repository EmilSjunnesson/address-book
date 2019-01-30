import React from 'react';
import { FaEnvelope, FaMobileAlt, FaPhone } from 'react-icons/fa';
import './ContactInfoBox.css';

/*
  Render a box displaying contact info with links
*/
const ContactInfoBox = ({ email, cell, phone }) => {
  return (
    <div className="contact-info-box">
      <h3>Contact info</h3>
      <p><a href={`mailto:${email}`}><FaEnvelope className="icon" /> {email}</a></p>
      <p><a href={`tel:${cell}`}><FaMobileAlt className="icon" />{cell}</a></p>
      <p><a href={`tel:${phone}`}><FaPhone className="icon" />{phone}</a></p>
    </div>
  );
};

export default ContactInfoBox;
