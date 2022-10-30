import React from 'react';
import './TimeLineName.css';

const TimeLineName = ({ timeLineName }) => {
  return (
    <span className='time-line__name'>{ timeLineName }</span>
  );
}

export default TimeLineName;
