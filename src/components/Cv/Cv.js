import React from 'react';
import './Cv.css';
import CvInfo from './CvInfo/CvInfo';
import CvPhoto from './CvPhoto/CvPhoto';

const Cv = () => {
  return (
    <div className='cv'>
      <CvInfo />
      <CvPhoto />
    </div>
  );
}

export default Cv;
