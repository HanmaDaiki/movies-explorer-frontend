import React from 'react';
import './CvInfo.css';
import CvDescription from '../CvDescription/CvDescription';
import CvName from '../CvName/CvName';
import CvPosition from '../CvPosition/CvPosition';
import CvLink from '../CvLink/CvLink';

const CvInfo = () => {
  return (
    <div className='cv__info'>
      <CvName />
      <CvPosition />
      <CvDescription />
      <CvLink />
    </div>
  );
}

export default CvInfo;
