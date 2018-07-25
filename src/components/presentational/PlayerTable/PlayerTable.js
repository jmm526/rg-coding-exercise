import React from 'react';
import { Table } from 'react-bootstrap';
import Proptypes from 'prop-types';

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
        {players.map(player => (
        <tr key={player.id}>
          <td>{player.name}</td>
          <td>{player.position}</td>
          <td>{player.team}</td>
          <td>{player.height}</td>
          <td>{player.weight}</td>
        </tr>
        ))}
      </tbody>
    </Table>
  );
}

PlayerTable.propTypes = {
  players: Proptypes.array,
}

export default PlayerTable;
