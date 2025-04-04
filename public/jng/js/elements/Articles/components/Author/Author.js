// import React from 'react'

const Author = (props) => {
  const {
    type,
    author = {},
  } = props;
  
  let {
    name = "Mark Anderson",
    date = "July 24, 2020"
  } = author;

  let display_els = type == "byline" ? (
    <>
      <span className="post-author">By <a href="#">{name}</a></span>
      <span className="post-separator">/</span>
      <span className="post-date">On {date}</span>
    </>
  ) : null;

  return display_els;
}

export default Author