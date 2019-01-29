import React from 'react';
import ContactListItem from '../components/ContactListItem';
import './ContactList.css';

const ContactListPage = ({ contacts }) => {
  return (
    <ul className="contact-list">
      {contacts.map((contact) =>
        <ContactListItem key={contact.id.value} contact={contact} />
      )}
    </ul>
  );
};

export default ContactListPage;
