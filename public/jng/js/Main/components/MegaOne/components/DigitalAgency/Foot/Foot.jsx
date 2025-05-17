import React from "react";
import ReactDOM from "react-dom";

import "./Foot.scss";

import htmlContent from './Foot.hbs';// works as template fn
import FootHtml from './templates/FootHtml';

const Foot = (props) => {

  const {
    data = {},
  } = props;

  // const h_cont = htmlContent(data);
  const h_cont = <FootHtml {...data} />;

  return (
    <div className="Foot">
      {/* <div dangerouslySetInnerHTML={{ __html: h_cont }} /> */}
      {h_cont}
    </div>
  );
}

export default Foot;