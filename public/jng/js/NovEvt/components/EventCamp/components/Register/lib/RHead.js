import React from 'react';
import ProfileIcon from '../../ProfileIcon';

const RHead = (props) => {
  const {
    image,
    title,
    sub,
    tag = "h5"
  } = props;

  const Custom_tag = tag;

  return (
    <>
      <ProfileIcon {...{ name: "rHead", no_class: true, image}} />
      <Custom_tag className="rHead_title">{title}</Custom_tag>
      { typeof sub != "undefined" ? <p className="rHead_sub">{sub}</p> : null}
    </>
  )
}

export default RHead
