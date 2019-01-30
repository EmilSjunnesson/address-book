import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import { ReactComponent as Spinner } from './images/ripple.svg';
import { fetchContacts } from './utils/api';
import ContactListPage from './pages/ContactListPage';
import ContactDetailPage from './pages/ContactDetailPage';
import ErrorPage from './pages/ErrorPage';

class App extends Component {
  state = {
    contacts: [],
    isLoading: false,
    error: null,
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getContacts();
  }

  getContacts = () => {
    fetchContacts()
      .then((contacts) => this.setState({ isLoading: false, contacts }))
      .catch((error) => this.setState({ isLoading: false, error }))
  };


  render() {
    const { contacts, isLoading, error } = this.state;
    if (isLoading) {
      return <Spinner className="centered" />
    }
    if (error) {
      return (
        <ErrorPage message={error.toString()}>
          <button onClick={this.getContacts}>Retry</button>
        </ErrorPage>
      );
    }
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={(props) => (
            <ContactListPage contacts={contacts} {...props} />
          )} />
          {contacts && contacts.length > 0 && (
            <Route path="/contacts/:id" render={(props) => (
              <ContactDetailPage
                contact={contacts.find(c => c.id.value === props.match.params.id)}
                {...props}
              />
            )}/>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
