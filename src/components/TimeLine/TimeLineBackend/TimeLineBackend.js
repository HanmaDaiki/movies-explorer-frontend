import React from 'react';
import TimeLineName from '../TimeLineName/TimeLineName';
import TimeLineWeak from '../TimeLineWeak/TimeLineWeak';
import './TimeLineBackend.css'

const TimeLineBackend = () => {
  return (
    <div className='time-line__backend'>
      <TimeLineWeak weakText='1 неделя' phase='backend'/>
      <TimeLineName timeLineName='Back-end'/>
    </div>
  );
}

export default TimeLineBackend;
