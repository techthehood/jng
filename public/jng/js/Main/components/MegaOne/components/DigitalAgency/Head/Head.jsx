import {useRef} from "react";
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
// import htmlContent from './lib/Head.hbs';// works as template fn
// import htmlContent2 from './lib/BigHead.hbs';
import BigHead from "./templates/BigHead";
import LilHead from "./templates/LilHead";

// const template = Handlebars.compile(htmlContent);// fails

const Head = (props) => {

  const {
    data = {},
    mode = 'Head',
  } = props;

  const iUN_ref = useRef(props.iUN || Math.round(Math.random() * 10000)),
  iUN = iUN_ref.current;

  let h_cont; 
  
  switch (mode) {
    case 'BigHead':
        // h_cont = htmlContent2(data);
        h_cont = <BigHead {...data} iUN={iUN} />;
      break;
  
      default:
        // h_cont = htmlContent(data);
        h_cont = <LilHead {...data} iUN={iUN} />;
      break;
  }

  return (
    <div className={`${mode}`}>
      {/* <div dangerouslySetInnerHTML={{ __html: h_cont}} /> */}
      {h_cont}
    </div>
  );
}

export default Head
