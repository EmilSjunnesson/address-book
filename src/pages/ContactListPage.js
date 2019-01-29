import React, { Component } from 'react';
import ContactList from '../components/ContactList';
import ListControls from '../components/ListControls';
import './ContactListPage.css';

class ContactListPage extends Component {
  state = {
    orderBy: 'firstName',
    direction: 'asc',
    query: '',
  }

  // Return an arry of contacts filtered by query and sorted by orderBy and direction
  filterContacts = (contacts, orderBy, direction, query) => {
    let output = contacts
    if (query && query.trim().length > 0) {
      // user query to filter first + last name
      output = contacts.filter((c) =>
        `${c.name.first} ${c.name.last}`.toLowerCase().includes(query.toLowerCase()));
    }
    // Sort by either first or last name asc/desc
    const orderByProp = orderBy === 'firstName' ? 'first' : 'last';
    const directionValue = direction === 'asc' ? [1, -1] : [-1, 1];
    return output.sort((a, b) =>
      (a.name[orderByProp] > b.name[orderByProp]) ? directionValue[0] :
      ((b.name[orderByProp] > a.name[orderByProp]) ? directionValue[1] : 0)
    );
  }

  render() {
    const { orderBy, direction, query } = this.state;
    return (
      <div className="contact-list-page">
        <ListControls
          query={query}
          orderBy={orderBy}
          direction={direction}
          onQueryChanged={query => this.setState({ query })}
          onOrderByChanged={orderBy => this.setState({ orderBy })}
          onDirectionChanged={direction => this.setState({ direction })}
        />
        <ContactList
          contacts={this.filterContacts(this.props.contacts, orderBy, direction, query)}
        />
      </div>
    );
  }
}

export default ContactListPage;
