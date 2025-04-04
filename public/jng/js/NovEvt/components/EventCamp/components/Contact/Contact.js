import {useEffect} from "react";
// import ReactDOM from "react-dom";
// import Handlebars from "handlebars";
import CForm from './CForm';

import "./Contact.scss";

// const htmlContent = require("./Contact.html");
import htmlContent from './Contact.hbs';// works as template fn

// const template = Handlebars.compile(htmlContent);// fails

const Contact = (props) => {

  const {
    data
  } = props;

  useEffect(() => {
    ReactDOM.render(
      <CForm />,
      document.querySelector(".contact-left")
    )
  },[])

  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: htmlContent(data) }} />
      {/* <div dangerouslySetInnerHTML={{ __html: template(data) }} /> */}
    </div>
  );
}

export default Contact
