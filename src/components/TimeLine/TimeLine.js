import React from 'react';
import './TimeLine.css'
import TimeLineBackend from './TimeLineBackend/TimeLineBackend';
import TimeLineFrontend from './TimeLineFrontend/TimeLineFrontend';

const TimeLine = () => {
  return (
    <div className='time-line'>
      <TimeLineBackend />
      <TimeLineFrontend />
    </div>
  );
}

export default TimeLine;
