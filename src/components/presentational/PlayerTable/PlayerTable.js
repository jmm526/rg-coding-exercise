import React from 'react';
import { Table } from 'react-bootstrap';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PlayerRow from '../PlayerRow';

const PlayerTable = ({ players }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th><FontAwesomeIcon icon="sort" /> Name</th>
          <th>Position</th>
          <th>Team</th>
          <th><FontAwesomeIcon icon="sort" /> Height</th>
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
