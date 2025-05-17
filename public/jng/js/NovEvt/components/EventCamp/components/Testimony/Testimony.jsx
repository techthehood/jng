import React from "react";

import "./Testimony.scss";

import htmlContent from './Testimony.hbs';// works as template fn

const Testimony = (props) => {

  const {
    data
  } = props;

  const h_cont = htmlContent(data);

  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: h_cont }} />
      {/* {h_cont} */}
    </div>
  );
}

export default Testimony
