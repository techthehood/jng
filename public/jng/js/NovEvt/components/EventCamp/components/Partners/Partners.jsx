import React from "react";
import ReactDOM from "react-dom";
// import Handlebars from "handlebars";

import "./Partners.scss";

// const htmlContent = require("./Partners.html");
import htmlContent from './Partners.hbs';// works as template fn

// const template = Handlebars.compile(htmlContent);// fails

const Partners = (props) => {

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

export default Partners
