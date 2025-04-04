import React from 'react'

const Articles = ({
  title,
  alias,
  text,
}) => {
  return (
    <div className={`Articles ${alias}`}>
      <h3>{title}</h3>
      <p className="content">{text}</p>
    </div>
  )
}

export default Articles