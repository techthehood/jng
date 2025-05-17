import React from 'react'

const Details = (props) => {

  const {
    subtitle,
    description,
    button,
  } = props;

  return (
    <>
      <h4>{subtitle}</h4>
      <p>{description}</p>
      { button.active && <a href={`#`} className={`btn btn-large btn-rounded btn-black-white-background mr-2 mt-2`}>{button.label}</a>}
    </>
  );
}

export default Details