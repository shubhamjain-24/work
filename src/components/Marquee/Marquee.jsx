// Marquee.js
import React from 'react';
import './Marquee.css';

const Marquee = ({ imagesUrls }) => {
  return (
    <div className='marquee_mainContainer'>
      {imagesUrls.map((url, index) => (
        <img key={index} src={url} alt={`marquee-${index}`} />
      ))}
      {imagesUrls.map((url, index) => (
        <img key={index + imagesUrls.length} src={url} alt={`marquee-${index}`} />
      ))}
    </div>
  );
};

export default Marquee;
