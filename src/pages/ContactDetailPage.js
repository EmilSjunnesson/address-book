import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import ContactInfoBox from '../components/ContactInfoBox';
import LocationBox from '../components/LocationBox';
import { capitalize, titleCase } from '../utils/strings';
import './ContactDetailPage.css';

class ContactDetailPage extends Component {
  componentDidMount() {
    // Append contacts name to page title
    const contact = this.props.contact;
    document.title = `Address book${contact ?
      ` | ${capitalize(contact.name.first)} ${capitalize(contact.name.last)}` : ''}`;
  }

  renderDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${('0' + (d.getMonth()+1)).slice(-2)}-${('0' + d.getDate()).slice(-2)}`;
  };

  renderName = ({ title, first, last}) => titleCase(`${title} ${first} ${last}`);

  render() {
    const { contact } = this.props;
    if (!contact) {
      return (
        <ErrorPage message="A contact with the given id cannot be found">
          <Link to="/">Browse contacts</Link>
        </ErrorPage>
      );
    }
    return (
      <div className="contact-detail-page">
        <header>
          <button onClick={this.props.history.goBack}>&#x276E; Go back</button>
          <p>Member since {this.renderDate(contact.registered.date)}</p>
        </header>
        <div className="main">
          <img src={contact.picture.large} alt={capitalize(contact.name.first)} />
          <div>
            <h1>{this.renderName(contact.name)}</h1>
            <h2>{capitalize(contact.gender)}, {contact.dob.age}</h2>
          </div>
        </div>
        <div className="boxes">
          <ContactInfoBox email={contact.email} cell={contact.cell} phone={contact.phone} />
          <LocationBox location={contact.location} />
        </div>
      </div>
    );
  }
}

export default ContactDetailPage;
