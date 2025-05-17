import React from 'react'

const RInfo = (props) => {

  const { 
    date,
    location,
    address,
    city,
    details,
    time
  } = props;

  return (
    <div className={`rInfo_wrapper`}>
      <div className="rInfo_date">{date}</div>
      <div className="rInfo_location">{location}</div>
      <div className="rInfo_address">{address}</div>
      <div className="rInfo_city">{city}</div>
      <div className="rInfo_details">{details}</div>
      <div className="rInfo_time">{time}</div>
    </div>
  )
}

export default RInfo
