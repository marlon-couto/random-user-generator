import React, { Component } from 'react';
import PersonDetails from './components/PersonDetails';

export default class App extends Component {
  state = {
    loading: true,
    user: {},
  };

  componentDidMount() {
    this.fetchPerson();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { age } = nextState.user.dob;
    return age <= 50;
  }

  fetchPerson = async () => {
    const url = 'https://api.randomuser.me/';

    const response = await fetch(url);
    const data = await response.json();

    this.setState({ user: data.results, loading: false });
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
