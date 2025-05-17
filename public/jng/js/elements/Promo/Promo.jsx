import React from "react";
import ReactDOM from "react-dom";

import './Promo.scss';

import htmlContent from './Promo.hbs';// works as template fn

const Promo = (props) => {

  const {
    data = {},
    dark = true,
  } = props;

  const {
    h2,
    h3,
    button1,
    button2,
  } = data;

  // let dark = true;
  let tag = dark ? "dark" : "light";
  let variant = dark ? "bg-dark" : "";


  // const h_cont = htmlContent({...data, variant});
  const h_cont = (
    <section id="content">
      <div className="content-wrap">
        <div className="container clearfix">
          
            <div className="promo text_cont shadow-sm text-center p-5 p-md-6 border {{variant}} dark rounded-5">
              { h2 && <h2 className="mb-1 h2"><span>{h2}</span></h2> }
              { h3 && <h3 className="text-info mb-4 fw-medium">{h3}</h3> }
              { button1.active && <a href={`${button1.link}`} className={`button w3-btn button-large button-rounded bg-info btn1`}>{button1.text}</a> }
              { button2.active  && <a href={`${button2.link}`} className={`button w3-btn button-large button-rounded button-black btn2`}>{button2.text}</a> }
            </div>
          
        </div>
      </div>
    </section>
  )

  return (
    <div className={`Promo ${tag}`}>
      {/* <div dangerouslySetInnerHTML={{ __html: h_cont }} /> */}
      {h_cont}
    </div>
  );
}

export default Promo;