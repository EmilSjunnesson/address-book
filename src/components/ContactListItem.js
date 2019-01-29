import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaMobileAlt, FaPhone } from 'react-icons/fa';
import { capitalize } from '../utils/strings';
import './ContactListItem.css';

// Componet that displays a summary (name, phone and email) of contact, to be used in a list
const ContactListItem = ({ contact }) => {
  return (
    <li>
      <Link to={`/contacts/${contact.id.value}`} className="contact-list-link">
        <div className="contact-list-item">
          <img src={contact.picture.medium} alt="" />
          <div>
            <h2>{capitalize(contact.name.first)} {capitalize(contact.name.last)}</h2>
            <div className="info">
              <p><FaEnvelope className="icon" /> {contact.email}</p>
              <p><FaMobileAlt className="icon" />{contact.cell}</p>
              <p><FaPhone className="icon" />{contact.phone}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ContactListItem;
