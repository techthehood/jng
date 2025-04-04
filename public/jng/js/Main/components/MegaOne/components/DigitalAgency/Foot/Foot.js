import React from "react";
import ReactDOM from "react-dom";

import "./Foot.scss";

import htmlContent from './Foot.hbs';// works as template fn

const Foot = (props) => {

  const {
    data = {},
  } = props;

  const h_cont = htmlContent(data);

  return (
    <div className="Foot">
      <div dangerouslySetInnerHTML={{ __html: h_cont }} />
    </div>
  );
}

export default Foot;