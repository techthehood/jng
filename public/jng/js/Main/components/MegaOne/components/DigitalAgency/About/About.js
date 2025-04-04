import React from "react";
import ReactDOM from "react-dom";

import "./About.scss";

import htmlContent from './About.hbs';// works as template fn

const About = (props) => {

  const {
    data = {},
  } = props;

  const h_cont = htmlContent(data);

  return (
    <div className="About">
      <div dangerouslySetInnerHTML={{ __html: h_cont }} />
    </div>
  );
}

export default About
