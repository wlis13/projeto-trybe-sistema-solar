/* eslint-disable react/prop-types */
import React from 'react';
import propType from 'prop-types';

class MissionCard extends React.Component {
  render() {
    console.log(this.props);
    const { missoes } = this.props;
    const { name, year, country, destination } = missoes;
    return (
      <>
        <div data-testid="mission-card" />
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </>
    );
  }
}

export default MissionCard;

MissionCard.propType = {
  missoes: propType.string.isRequired,
  name: propType.string.isRequired,
  year: propType.string.isRequired,
  country: propType.string.isRequired,
  destination: propType.string.isRequired,
};
