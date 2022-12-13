import React, { Component } from 'react';
import PersonDetails from './components/PersonDetails';

export default class App extends Component {
  state = {
    loading: true,
    user: {},
  };

  render() {
    const { loading, user } = this.state;
    const { name, email, picture, dob } = user;

    const loadingElement = <span>Carregando...</span>;

    return (
      <div>
        {loading ? (
          loadingElement
        ) : (
          <PersonDetails
            picture={picture}
            personName={`${name.first} ${name.last}`}
            email={email}
            age={dob.age}
          />
        )}
      </div>
    );
  }
}
