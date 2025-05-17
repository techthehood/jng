import React from "react";
import ReactDOM from "react-dom";

import "./FixedNav.scss";

import htmlContent from './FixedNav.hbs';// works as template fn

const FixedNav = (props) => {

  const {
    data = {},
  } = props;

  const h_cont = htmlContent(data);

  return (
    <div className="FixedNav">
      <div dangerouslySetInnerHTML={{ __html: h_cont }} />
    </div>
  );
}

export default FixedNav
