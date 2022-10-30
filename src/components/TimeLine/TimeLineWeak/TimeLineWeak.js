import React from 'react';
import './TimeLineWeak.css';

const TimeLineWeak = ({ weakText, phase}) => {
  return (
    <span className={`time-line__weak time-line__weak_${ phase }`}>{ weakText }</span>
  );
}

export default TimeLineWeak;
