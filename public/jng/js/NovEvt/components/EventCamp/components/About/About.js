// import React from "react";

import "./About.scss";

import htmlContent from './About.hbs';// works as template fn

const About = (props) => {

  const {
    data
  } = props;

  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: htmlContent(data) }} />
    </div>
  );
}

export default About
