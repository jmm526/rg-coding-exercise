import React, { Component } from 'react';

import Header from './components/presentational/Header';
import PlayerTableContainer from './components/container/PlayerTableContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="appBody">
          <PlayerTableContainer />
        </div>
      </div>
    );
  }
}

export default App;
