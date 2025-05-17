import React from "react";
import ReactDOM from "react-dom";
// import Handlebars from "handlebars";

import "./Footer.scss";

// const htmlContent = require("./Footer.html");
import htmlContent from './Footer.hbs';// works as template fn

const Footer = (props) => {

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

export default Footer
