import React from 'react';
// import ProfileIcon from '../../ProfileIcon';
require('./SimpleTree.scss');

const SimpleTree = (props) => {

  const { 
    title, 
    description, 
    tool = "default", 
    variant = "",
    url, 
    image, 
    hTag = "h4",
    config,
    callback
  } = props;

  const Custom_tag = hTag;

  let content_els = (
    <>
      {/* {image ? <ProfileIcon {...{ name: "pTLink", no_class: true, image }} /> : null} */}
      <Custom_tag className="sTree_link_title clamp-1">{title}</Custom_tag>
      <div className="sTree_link_desc clamp-1">{description}</div>
    </>
  );

  let lft_cls = image || description ? "left_display" : ""

  let inner = url ? (
    <a href="" className={`sTree_link ${lft_cls}`} href={url} target="_blank">
      {content_els}
    </a>
  ) : <div className={`sTree_link ${lft_cls}`} onClick={(e) => {
    if(callback) callback(e);
  }}>{content_els}</div>;

  return (
    <li className={`sTree_link_content ${tool} ${variant} w3-btn w3-card`}>
      {inner}
    </li>
  );
}

export default SimpleTree
