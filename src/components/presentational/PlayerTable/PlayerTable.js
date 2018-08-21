import React from 'react';
import { Table } from 'react-bootstrap';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PlayerRow from '../PlayerRow';
import DynamicSortingIcon from '../DynamicSortingIcon'

const PlayerTable = ({ players, onSort, sortColumn, sortUp }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Name <DynamicSortingIcon name='Name' onSort={onSort} sortColumn={sortColumn} sortUp={sortUp}/></th>
          <th>Position</th>
          <th>Team</th>
          <th>Height <DynamicSortingIcon  name='Height' onSort={onSort} sortColumn={sortColumn} sortUp={sortUp}/></th>
          <th>Weight <DynamicSortingIcon  name='Weight' onSort={onSort} sortColumn={sortColumn} sortUp={sortUp}/></th>
          <th>ADP <DynamicSortingIcon     name='ADP' onSort={onSort} sortColumn={sortColumn} sortUp={sortUp}/></th>
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
