/* eslint-disable react/prop-types */
import React from 'react';
import propType from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    console.log(typeof destination);
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
  name: propType.string,
  year: propType.string,
  country: propType.string,
  destination: propType.string,
};
