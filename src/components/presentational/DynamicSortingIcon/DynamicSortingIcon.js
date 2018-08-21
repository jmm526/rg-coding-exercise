import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './DynamicSortingIcon.css';

const DynamicSortingIcon = (props) => {
  const {sortColumn, sortUp, onSort, name} = props
  let icon = 'sort'
  let sClassName = 'my-sorting-icon '
  if (sortColumn === name) {
    sClassName = sClassName + 'selected-color-sorting'
    sortUp ? icon = 'sort-up' : icon = 'sort-down'
  }
  return (
      <button className={sClassName} onClick={onSort} name={name} value={'hehehehe'}>
        <FontAwesomeIcon icon={icon}/>
      </button>      
  );
}

export default DynamicSortingIcon;
