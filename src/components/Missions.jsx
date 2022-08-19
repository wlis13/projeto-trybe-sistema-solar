import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import MissionsList from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <>
        <div data-testid="missions" />
        <Title handline="Missões" />
        {MissionsList.map((itens) => (
          <MissionCard
            name={ itens.name }
            year={ itens.year }
            country={ itens.country }
            destination={ itens.destination }
            key={ itens.name }
          />
        ))}
      </>
    );
  }
}
export default Missions;
