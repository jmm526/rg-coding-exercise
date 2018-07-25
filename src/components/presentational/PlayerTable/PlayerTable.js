import React from 'react';
import { Table } from 'react-bootstrap';
import Proptypes from 'prop-types';

import PlayerRow from '../PlayerRow';

const PlayerTable = ({ players }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Team</th>
          <th>Height</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        {players.map(player => <PlayerRow player={player} key={player.id} />)}
      </tbody>
    </Table>
  );
}

PlayerTable.propTypes = {
  players: Proptypes.array,
}

export default PlayerTable;
