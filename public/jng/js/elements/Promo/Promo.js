import React from "react";
import ReactDOM from "react-dom";

import './Promo.scss';

import htmlContent from './Promo.hbs';// works as template fn

const Promo = (props) => {

  const {
    data = {},
    dark = true,
  } = props;

  // let dark = true;
  let tag = dark ? "dark" : "light";
  let variant = dark ? "bg-dark" : "";


  const h_cont = htmlContent({...data, variant});

  return (
    <div className={`Promo ${tag}`}>
      <div dangerouslySetInnerHTML={{ __html: h_cont }} />
    </div>
  );
}

export default Promo;