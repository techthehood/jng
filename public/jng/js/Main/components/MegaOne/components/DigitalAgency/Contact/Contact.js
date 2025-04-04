import React, {useEffect} from "react";
import ReactDOM from "react-dom";

import CForm from './CForm';

import "./Contact.scss";

import htmlContent from './Contact.hbs';// works as template fnimport CForm from './CForm';

const Contact = (props) => {

  const {
    data = {},
  } = props;
  
  useEffect(() => {
    ReactDOM.render(
      <CForm />,
      document.querySelector(".contact-left")
    )
  },[]);

  const h_cont = htmlContent(data);

  return (
    <div className="Contact">
      <div dangerouslySetInnerHTML={{ __html: h_cont }} />
    </div>
  );
}

export default Contact