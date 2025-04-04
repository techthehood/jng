import React from 'react';

import './Slant.scss';

const Slant = ({
  children,
  color = "#000",
  top_color = color,
  bottom_color = color
}) => {
  return (
    <div className='Slant'>
      <svg className="separator__svg" id="team-header-svg" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none"
      fill={top_color} version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M 100 100 V 10 L 0 100" />
      <path d="M 30 73 L 100 18 V 10 Z" fill="#fff" strokeWidth="0" />
    </svg>
    <div className="slant_cont">
      {children}
    </div>
    <svg className="separator__svg" id="team-foot-svg" width="100%" height="100" viewBox="0 0 100 100"
      preserveAspectRatio="none" fill={bottom_color} version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M 100 100 V 10 L 0 100" />
      <path d="M 30 73 L 100 18 V 10 Z" fill="#fff" strokeWidth="0" />
    </svg>
    </div>
  )
}

export default Slant