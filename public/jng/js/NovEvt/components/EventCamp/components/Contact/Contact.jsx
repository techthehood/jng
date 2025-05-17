import {useEffect} from "react";
import ReactDOM from "react-dom";
// import Handlebars from "handlebars";
import CForm from './CForm';

import "./Contact.scss";

// const htmlContent = require("./Contact.html");
import htmlContent from './Contact.hbs';// works as template fn
import use_root from "../../../../../tools/use_root";

const Contact = (props) => {

  const {
    data
  } = props;

  useEffect(() => {
    // ReactDOM.render(
    use_root(
      <CForm />,
      document.querySelector(".contact-left")
    )
  },[])

  const h_cont = htmlContent(data);

  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: htmlContent(data) }} />
      {/* {h_cont} */}
    </div>
  );
}

export default Contact
