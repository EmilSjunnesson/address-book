import React from 'react';
import { Link } from 'react-router-dom';
import './ContactDetailPage.css';
// TODO CHANGE TITLE IN COMPONENT MOUNT
const ContactDetailPage = ({ contact }) => {
  if (!contact) {
    return (
      <p>A contact with the given id cannot be found</p>
    );
  }
  return (
    <div>
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>This is a user named {contact.name.first}</p>
    </div>
  );
};

export default ContactDetailPage;
