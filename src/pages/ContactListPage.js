import React, { Component } from 'react';
import qs from 'query-string';
import ContactList from '../components/ContactList';
import ListControls from '../components/ListControls';
import './ContactListPage.css';

/*
  Sets the inital state (filters) from the page's query params,
  if param doesn't exist fallback to default value
*/
const setInitialState = (props, key, def) => (qs.parse(props.location.search)[key] || def);

class ContactListPage extends Component {
  state = {
    orderBy: setInitialState(this.props, 'orderBy', 'firstName'),
    direction: setInitialState(this.props, 'direction', 'asc'),
    query: setInitialState(this.props, 'query', ''),
  }

  componentDidMount() {
    document.title = 'Address book';
  }

  // Return an arry of contacts filtered by query and sorted by orderBy and direction
  filterContacts = (contacts, orderBy, direction, query) => {
    let output = contacts
    if (query && query.trim().length > 0) {
      // use query to filter first + last name
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

  // update url to reflect state of the page
  updateUrl = () => this.props.history.replace({ search: qs.stringify(this.state) });

  render() {
    const { orderBy, direction, query } = this.state;
    return (
      <div className="contact-list-page">
        <ListControls
          query={query}
          orderBy={orderBy}
          direction={direction}
          onQueryChanged={query => this.setState({ query }, this.updateUrl)}
          onOrderByChanged={orderBy => this.setState({ orderBy }, this.updateUrl)}
          onDirectionChanged={direction => this.setState({ direction }, this.updateUrl)}
        />
        <ContactList
          contacts={this.filterContacts(this.props.contacts, orderBy, direction, query)}
        />
      </div>
    );
  }
}

export default ContactListPage;
