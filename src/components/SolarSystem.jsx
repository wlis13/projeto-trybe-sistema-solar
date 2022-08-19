/* eslint-disable max-len */
import React from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        {planets.map((itens) => (
          <PlanetCard
            planetName={ itens.name }
            planetImage={ itens.image }
            key={ itens.name }
          />
        ))}
      </>
    );
  }
}

export default SolarSystem;
