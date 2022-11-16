import React from 'react';
import TimeLineName from '../TimeLineName/TimeLineName';
import TimeLineWeak from '../TimeLineWeak/TimeLineWeak';
import './TimeLineFrontend.css';

const TimeLineFrontend = () => {
  return (
    <div className='time-line__frontend'>
      <TimeLineWeak weakText='4 недели' phase='frontend'/>
      <TimeLineName timeLineName='Front-end'/>
    </div>
  );
}

export default TimeLineFrontend;
