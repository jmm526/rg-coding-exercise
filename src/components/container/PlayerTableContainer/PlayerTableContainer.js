import React, { Component } from 'react';
import { fetchPlayers } from './apiCalls';
import PlayerTable from '../../presentational/PlayerTable';

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
      <PlayerTable players={players} />
    );
  }
}

export default PlayerTableContainer;
