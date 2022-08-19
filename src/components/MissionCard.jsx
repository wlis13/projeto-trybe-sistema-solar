/* eslint-disable react/prop-types */
import React from 'react';
import propType from 'prop-types';

class MissionCard extends React.Component {
  render() {
    console.log(this.props);
    const { missoes } = this.props;
    const { name, year, country, destination } = missoes;
    return (

      <div data-testid="mission-card" className="MissionBlock">
        <p data-testid="mission-name" className="MissionsUnid">{name}</p>
        <p data-testid="mission-year" className="MissionsUnid">{year}</p>
        <p data-testid="mission-country" className="MissionsUnid">{country}</p>
        <p data-testid="mission-destination" className="MissionsUnid">{destination}</p>
      </div>
    );
  }
}

export default MissionCard;

MissionCard.propType = {
  missoes: propType.object.isRequired,
  name: propType.string.isRequired,
  year: propType.string.isRequired,
  country: propType.string.isRequired,
  destination: propType.string.isRequired,
};