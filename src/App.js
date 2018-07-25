import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

import Header from './components/presentational/Header';
import PlayerTableContainer from './components/container/PlayerTableContainer';

import './App.css';

library.add(faSort, faSortUp, faSortDown);

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
