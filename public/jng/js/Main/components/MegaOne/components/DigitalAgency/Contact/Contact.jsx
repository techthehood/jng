import React, {useEffect} from "react";
import ReactDOM from "react-dom";

import CForm from './CForm';

import "./Contact.scss";

import htmlContent from './Contact.hbs';// works as template fnimport CForm from './CForm';
import ContactHtml from "./templates/ContactHtml";
import use_root from "../../../../../../tools/use_root";

const Contact = (props) => {

  const {
    data = {},
  } = props;
  
  useEffect(() => {
    // ReactDOM.render(
    use_root(
      <CForm />,
      document.querySelector(".contact-left")
    )
  },[]);

  // const h_cont = htmlContent(data);
  const h_cont = <ContactHtml {...data} />;

  return (
    <div className="Contact">
      {/* <div dangerouslySetInnerHTML={{ __html: h_cont }} /> */}
      {h_cont}
    </div>
  );
}

export default Contact