import React from "react";

import "./About.scss";

import htmlContent from './About.hbs';// works as template fn

const About = (props) => {

  const {
    data
  } = props;

  const h_cont = htmlContent(data);

  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: h_cont}} />
      {/* {h_cont} */}
    </div>
  );
}

export default About
