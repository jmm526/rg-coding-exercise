import React from 'react';
import { FormGroup, Checkbox, FormControl } from 'react-bootstrap';

import './PlayerTableFilters.css';

const PlayerTableFilters = (props) => {
  const {checks, onChangeCheck, onChangeText} = props
  return (
    <div className="PlayerTableFilters">
      <FormGroup>
        <Checkbox name='QB' onChange={onChangeCheck} checked={checks['QB']} inline>QB</Checkbox>
        <Checkbox name='RB' onChange={onChangeCheck} checked={checks['RB']} inline>RB</Checkbox>
        <Checkbox name='WR' onChange={onChangeCheck} checked={checks['WR']} inline>WR</Checkbox>
        <Checkbox name='TE' onChange={onChangeCheck} checked={checks['TE']} inline>TE</Checkbox>
      </FormGroup>
      <FormControl type="text" placeholder="Search by Name" onChange={onChangeText} />
    </div>
  )
}

export default PlayerTableFilters;
