import React from "react";
import ReactDOM from "react-dom";

import "./About.scss";

import htmlContent from './About.hbs';// works as template fn
import AboutHtml from "./templates/AboutHtml";

const About = (props) => {

  const {
    data = {},
  } = props;

  const h_cont = <AboutHtml {...data} />// htmlContent(data);

  return (
    <div className="About">
      {/* <div dangerouslySetInnerHTML={{ __html: h_cont }} /> */}
      {h_cont}
    </div>
  );
}

export default About
