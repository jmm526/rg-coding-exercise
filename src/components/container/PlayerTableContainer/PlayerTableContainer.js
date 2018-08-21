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
    checks: {
      QB: true,
      RB: true,
      WR: true,
      TE: true,
    },
    text: ''
  }

  componentDidMount = async () => {
    const players = await fetchPlayers();
    const ADP = await fetchADP();

    // Rearrange player names and add ADP's
    this.players = players.map(player => {
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

    // Create Trie
    this.createTrie()

    // Set state (default sorted by ADP)
    this.setState({ ...this.state, players: this.players.sort(this.compareADP), sortColumn: 'ADP', sortUp: true });
  }

  updatePlayers = async () => {
    const statePlayers = this.triePlayers.filter(player => {
      return this.state.checks[player.position]
    })
    this.setState({ players: statePlayers });
  }

  // Create Trie for searching
  createTrie = () => {
    this.trie = {}
    this.players.forEach(player => {
      if (!this.trie[player.name.charAt(0)]) { this.trie[player.name.charAt(0)] = {} }
      this.trieRec(this.trie[player.name.charAt(0)], player.name.slice(1), player)
    })
    this.triePlayers = this.players
  }

  // Recursive helper function for createTrie()
  trieRec = (node, name, player) => {
    if (name === '') { node.END = player }
    else {
      if (!node[name.charAt(0)]) { node[name.charAt(0)] = {} }
      this.trieRec(node[name.charAt(0)], name.slice(1), player)
    }
  }

  getPlayersTrie = () => {
    if (!this.state.text) { return this.players }
    let currNode = this.trie
    for (let i = 0; i < this.state.text.length; i++) {
      if (!currNode[this.state.text.charAt(i)]) { return [] }
      currNode = currNode[this.state.text.charAt(i)]
    }
    const ret = []
    this.getPlayerRec(currNode, ret)
    return ret
  }

  getPlayerRec = (node, ret) => {
    Object.keys(node).forEach(key => {
      if (key === 'END') { ret.push(node[key] )}
      else {
        this.getPlayerRec(node[key], ret)
      }
    })
  }

  onChangeCheck = async (event) => {
    await this.setState({...this.state, checks: {...this.state.checks, [event.target.name]: !this.state.checks[event.target.name]}})
    this.updatePlayers()
  }

  onChangeText = async (event) => {
    await this.setState({...this.state, text: event.target.value})
    this.triePlayers = this.getPlayersTrie()
    await this.updatePlayers()
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
    const { players, checks, text } = this.state;
    return (
      players.length ?
      <div>
        <PlayerTableFilters checks={checks} text={text} onChangeCheck={this.onChangeCheck} onChangeText={this.onChangeText} />
        <PlayerTable players={players} onSort={this.onSort} sortColumn={this.state.sortColumn} sortUp={this.state.sortUp} />
      </div> :
      <Loading />
    );
  }
}

export default PlayerTableContainer;
