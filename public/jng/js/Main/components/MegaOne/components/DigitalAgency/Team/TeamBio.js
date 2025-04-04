import React from 'react'

const TeamBio = ({
  src,
  bio,
}) => {
  return (
    <div className='TeamBio row'>
      <div className="TeamBio_cont TeamBio_img col-lg-6">
        <img src={src}/>
      </div>
      <div className="TeamBio_cont TeamBio_txt col-lg-6">
        <p>{bio}</p>
      </div>
    </div>
  )
}

export default TeamBio