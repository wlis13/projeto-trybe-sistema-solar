import React from 'react';
import PropTYpes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <>
        <div data-testid="planet-name" />
        <p data-testid="planet-card">{planetName}</p>
        <img src={ planetImage } alt={ `planeta ${planetName}` } />
      </>
    );
  }
}

export default PlanetCard;

PlanetCard.propTypes = {
  planetName: PropTYpes.string.isRequired,
  planetImage: PropTYpes.string.isRequired,
};
