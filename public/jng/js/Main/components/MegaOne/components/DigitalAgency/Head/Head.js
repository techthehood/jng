import React from "react";
import ReactDOM from "react-dom";
// import Handlebars from "handlebars";

// import "../../../lib/vendor/css/bundle.min.css";
// import "../../../lib/vendor/css/LineIcons.min.css";
// import "../../../lib/vendor/css/revolution-settings.min.css";
// import "../../../lib/vendor/css/jquery.fancybox.min.css";
// import "../../../lib/vendor/css/owl.carousel.min.css";
// import "../../../lib/vendor/css/cubeportfolio.min.css";
// import "../../../lib/vendor/css/wow.css";

// import "../scss/slick.css";
// import "../scss/slick-theme.css";
// import "../scss/style.css";

import "./Head.scss";

// const htmlContent = require("./Head.html");
import htmlContent from './Head.hbs';// works as template fn
import htmlContent2 from './BigHead.hbs';

// const template = Handlebars.compile(htmlContent);// fails

const Head = (props) => {

  const {
    data = {},
    mode = 'Head',
  } = props;

  let h_cont; 
  
  switch (mode) {
    case 'BigHead':
        h_cont = htmlContent2(data);
      break;
  
      default:
        h_cont = htmlContent(data);
      break;
  }

  return (
    <div className={`${mode}`}>
      <div dangerouslySetInnerHTML={{ __html: h_cont}} />
      {/* <div dangerouslySetInnerHTML={{ __html: template(data) }} /> */}
    </div>
  );
}

export default Head
