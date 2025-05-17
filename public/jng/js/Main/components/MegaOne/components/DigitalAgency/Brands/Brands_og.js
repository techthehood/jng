import React from "react";
import ReactDOM from "react-dom";

import "./Brands.scss";

import htmlContent from './Brands.hbs';// works as template fn

const Brands = (props) => {

  const {
    data = {},
  } = props;

  const h_cont = htmlContent(data);

  return (
    <div className="Brands">
      <div dangerouslySetInnerHTML={{ __html: h_cont }} />
    </div>
  );
}

export default Brands;