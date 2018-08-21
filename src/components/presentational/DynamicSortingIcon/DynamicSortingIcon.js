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
      <FontAwesomeIcon className={sClassName} icon={icon} onClick={onSort} name={name}/>      
  );
}

export default DynamicSortingIcon;
