import React from 'react'

const Socials = (props) => {
  let {
    link,
    font_icon,
    href,
  } = props;

  return(
    <li>
      <a href={`${href}`} className={`${link}`} target={`_blank`}>
        <i className={`${font_icon}`}></i>
      </a>
    </li>
  );
}

export default Socials