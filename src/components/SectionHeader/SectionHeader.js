import React from 'react';
import './SectionHeader.css'

const SectionHeader = ({ textHeader }) => {
  return (
    <h2 className='section-header'>
      { textHeader }
    </h2>
  );
}

export default SectionHeader;
