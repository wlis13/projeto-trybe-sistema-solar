import React from 'react';

class PlanetCard extends React.Component {
  render() {
    return (
      <>
        <div data-testid="planet-name" />
        <img src="" alt="Planeta {planetName}" />
        <PlanetCard planetName="Terra" planetImage="path-to-image" />
      </>
    );
  }
}

export default PlanetCard;
