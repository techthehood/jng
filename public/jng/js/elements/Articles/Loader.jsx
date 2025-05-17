import { useEffect, useRef, useState } from "react";

// import "./Loader.scss";

// import htmlContent from './Loader.hbs';// works as template fn

const Loader = (props) => {

  const {
    data = {},
    delay = 3,// in seconds
  } = props;

  const load_interval = useRef();
  const [wait] = useState(delay*1000);
  const load_ref = useRef();

  useEffect(() => {
    // window.addEventListener('load', (event) => { 
      // FAILS - i don't think it needs this. its inconsistent
    // });
      // WORKS
      let loader = document.querySelector(".preloader");

      load_interval.current = setInterval(() => {
        
        // debugger;
        loader.classList.add("hide");
        // loader.style.display = "none";
        clearInterval(load_interval.current);
      }, wait);

    loader.addEventListener('click', (e) => { 
      // alert("loader double clicked");
      let load_el = document.querySelector(".preloader");
      load_el.classList.add("hide");
    });
  
    return () => {
      clearInterval(load_interval.current);
    }
  }, [])
  

  // const h_cont = htmlContent(data);

  return null;
  // return (
  //   <div className="Loader" ref={load_ref}>
  //     <div dangerouslySetInnerHTML={{ __html: h_cont }} />
  //   </div>
  // );
}

export default Loader
