import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PersonCard extends Component {
  render() {
    const { picture, personName, email, age } = this.props;

    return (
      <div>
        <img
          src={picture}
          alt={personName}
        />
        <p>{personName}</p>
        <p>{age}</p>
        <p>{email}</p>
      </div>
    );
  }
}

PersonCard.propTypes = {
  picture: PropTypes.string.isRequired,
  personName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
