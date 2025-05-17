


import React from "react";
import ReactDOM from "react-dom";

import './Blog.scss';

import htmlContent from './Blog.hbs';// works as template fn

const Blog = (props) => {

  const {
    data = {},
  } = props;

  const h_cont = htmlContent(data);

  return (
    <div className="Blog">
      <div dangerouslySetInnerHTML={{ __html: h_cont }} />
    </div>
  );
}

export default Blog;