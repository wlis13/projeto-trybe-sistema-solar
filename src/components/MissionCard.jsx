/* eslint-disable react/prop-types */
import React from 'react';
import propType from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
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
  name: propType.array.isRequired,
  year: propType.array.isRequired,
  country: propType.array.isRequired,
  destination: propType.array.isRequired,
};
