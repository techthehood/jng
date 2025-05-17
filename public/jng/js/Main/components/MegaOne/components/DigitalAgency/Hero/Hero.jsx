import React from "react";
import ReactDOM from "react-dom";

import "./Hero.scss";
import HeroHtml from "./templates/HeroHtml";

// import htmlContent from './Hero.hbs';// works as template fn

const Hero = (props) => {

  const {
    data = {},
  } = props;

  // const h_cont = htmlContent(data);
  const h_cont = <HeroHtml {...data} />

  const tag = data.tag || "";

  return (
    <div className={`Hero ${tag}`}  data-comp="Hero">
      {/* <div className="hero_wrapper row" dangerouslySetInnerHTML={{ __html: h_cont }} /> */}
      {
        <div className="hero_wrapper row">
          {h_cont}
        </div>
      }
    </div>
  );
}

export default Hero
