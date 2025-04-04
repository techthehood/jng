import React, { cloneElement } from "react";
import ReactDOM from "react-dom";
// import Handlebars from "handlebars";

// import "./RPrev.scss";

// const htmlContent = require("./RPrev.html");
import htmlContent from './RPrev.hbs';// works as template fn

// const template = Handlebars.compile(htmlContent);// fails

const RPrev = (props) => {

  const {
    data = {}
  } = props;

  // const h_cont = htmlContent(data);
  const rForm = document.querySelector('.rForm_wrapper');

  const h_cont = rForm.cloneNode(true);

  return (
    <div className="rPreview_cont">
      <div dangerouslySetInnerHTML={{ __html: h_cont.innerHTML }} />
      {/* <div dangerouslySetInnerHTML={{ __html: template(data) }} /> */}
    </div>
  );
}

export default RPrev
