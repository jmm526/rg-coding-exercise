import React, { Component } from 'react';

import { fetchPlayers } from './apiCalls';

import PlayerTable from '../../presentational/PlayerTable';
import PlayerTableFilters from '../../presentational/PlayerTableFilters';

class PlayerTableContainer extends Component {
  state = {
    players: []
  }
  componentDidMount = async () => {
    const players = await fetchPlayers();
    this.setState({ players });
  }
  render() {
    const { players } = this.state;
    return (
      <div>
        <PlayerTableFilters />
        <PlayerTable players={players} />
      </div>
    );
  }
}

export default PlayerTableContainer;
