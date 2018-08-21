import React, { Component } from 'react';

import { fetchPlayers, fetchADP } from './apiCalls';

import PlayerTable from '../../presentational/PlayerTable';
import PlayerTableFilters from '../../presentational/PlayerTableFilters';
import Loading from '../../presentational/Loading';

class PlayerTableContainer extends Component {
  state = {
    players: [],
    sortColumn: null,
    sortUp: true,
  }

  componentDidMount = async () => {
    const players = await fetchPlayers();
    const ADP = await fetchADP();
    const newNamePlayers = players.map(player => {
      const nameArr = player.name.split(', ')
      player.name = nameArr[1] + ' ' + nameArr[0]

      let adpFound = false
      ADP.forEach(adp => {
        if (player.id === adp.id) {
          player.adp = Number(adp.averagePick)
          adpFound = true
        } 
      })
      if (!adpFound) {
        player.adp = 400
      }
      return player
    })

    this.setState({ ...this.state, players: newNamePlayers.sort(this.compareADP), sortColumn: 'ADP', sortUp: true });
  }

  compareADP(a, b) {
    if (a.adp > b.adp) return 1
    if (a.adp < b.adp) return -1
    return 0
  }

  onSort = async (evt) => {
    console.log(evt.target)
    if (this.state.sortColumn !== evt.target.name) {
      await this.setState({...this.state, sortColumn: evt.target.name, sortUp: true})
    } else {
      await this.setState({...this.state, sortUp: !this.state.sortUp})
    }
  }

  render() {
    const { players } = this.state;
    return (
      players.length ?
      <div>
        <PlayerTableFilters />
        <PlayerTable players={players} onSort={this.onSort} sortColumn={this.state.sortColumn} sortUp={this.state.sortUp} />
      </div> :
      <Loading />
    );
  }
}

export default PlayerTableContainer;
