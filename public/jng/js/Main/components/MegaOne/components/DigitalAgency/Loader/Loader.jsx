// import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./Loader.scss";

import htmlContent from './Loader.hbs';// works as template fn

const Loader = (props) => {

  const {
    data = {},
    delay = 3,// in seconds
    children,
  } = props;

  const load_interval = useRef();
  const [wait] = useState(delay*1000);
  const load_ref = useRef();

  useEffect(() => {
    // window.addEventListener('load', (event) => { 
      // FAILS - i don't think it needs this. its inconsistent
    // });
      // WORKS
      // let loader = load_ref.current.querySelector(".loader.center-block");
      let loaders = document.querySelectorAll(".loader.center-block");

      load_interval.current = setInterval(() => {
        
        // loader.classList.add("hide");
        loaders.forEach((entry) => {
          // entry.addEventListener('click', view_bio);
          entry.classList.add("hide");
        });
        // loader.style.display = "none";
        clearInterval(load_interval.current);
      }, wait);

    // load_ref.current.addEventListener('click', (e) => { 
    //   // alert("loader double clicked");
    //   let load_el = load_ref.current.querySelector(".loader.center-block");
    //   load_el.classList.add("hide");
    // });

    loaders.forEach((entry) => {
      // entry.addEventListener('click', view_bio);
      entry.addEventListener('click', (e) => { 
        // alert("loader double clicked");
        // let load_el = load_ref.current.querySelector(".loader.center-block");
        entry.classList.add("hide");
      });
    });
  
    return () => {
      clearInterval(load_interval.current);
    }
  }, [])
  

  // const h_cont = htmlContent(data);
  const h_cont = (
    <div className="loader center-block"  data-comp="Loader">
      <div className="spinner">
        <div className="spinner-container container1">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
        </div>
        <div className="spinner-container container2">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="Loader" ref={load_ref}>
        {/* <div dangerouslySetInnerHTML={{ __html: h_cont }} /> */}
        {h_cont}
      </div>
      {children}
    </>
  );
}

export default Loader
