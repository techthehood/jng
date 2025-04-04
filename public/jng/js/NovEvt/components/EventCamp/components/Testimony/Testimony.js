import React from "react";

import "./Testimony.scss";

import htmlContent from './Testimony.hbs';// works as template fn

const Testimony = (props) => {

  const {
    data
  } = props;

  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: htmlContent(data) }} />
    </div>
  );
}

export default Testimony
