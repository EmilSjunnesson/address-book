import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import { fetchContacts } from './utils/api';
import ContactListPage from './pages/ContactListPage';
import ContactDetailPage from './pages/ContactDetailPage';

class App extends Component {
  state = {
    contacts: [],
    isLoading: false,
    error: null,
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchContacts({})
      .then((contacts) => this.setState({ isLoading: false, contacts }))
      .catch((error) => this.setState({ isLoading: false, error }))
  }


  render() {
    const { contacts } = this.state;
    return (
      <Router>
        <div className="App">
          {/* TODO COMMON HEADER?, loading spinner, error popup */}
          <Route exact path="/" render={() => <ContactListPage contacts={contacts} />} />
          {contacts && contacts.length > 0 && (
            <Route path="/contacts/:id" render={({ match }) => (
              <ContactDetailPage contact={contacts.find(c => c.id.value === match.params.id)} />
            )}/>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
