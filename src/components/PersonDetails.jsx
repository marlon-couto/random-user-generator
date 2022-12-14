import React, { Component } from 'react';
import PersonCard from './PersonCard';

export default class PersonDetails extends Component {
  state = {
    loading: true,
    user: {},
  };

  componentDidMount() {
    this.fetchPerson();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { age } = nextState.user.dob;
    const maxAge = 50
    return age <= maxAge;
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
          <PersonCard
            picture={picture.thumbnail}
            personName={`${name.first} ${name.last}`}
            email={email}
            age={dob.age}
          />
        )}
      </div>
    );
  }
}
