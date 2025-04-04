import {useEffect, useRef, useState} from 'react';
const display_console = false;

//
/**
 * @desc this was created to portal react elements to external DOM element locations without losing
 * its connection to its parent's state
 * @module Exporter
 * @param {object} props
 */

const Exporter = ({
  delay,
  children,
  home : export_class,
  initialize,
}) => {

  let export_str = (export_class.includes(".")) ? export_class : `.${export_class}`;
  let export_home = document.querySelector(export_str);

  const [val, setVal] = useState(0); // integer state
  const [init, setInit] = useState(false);
  const forceUpdate = () => {
    setVal(val => ++val); // update the state to force render
  }// forceUpdate

  const delay_count = useRef(0);
  useEffect(() => {
    if(typeof delay != "undefined" && delay_count.current < delay){
      delay_count.current = delay_count.current + 1;
      if(display_console || false) console.warn(`[Exporter] ${delay_count.current} delay. Ah, Ah, Ah`);
      forceUpdate();
    }else if(delay_count.current == delay && init == false){
      if(typeof initialize != "undefined") initialize();
      setInit(true);
    }
  },[delay_count.current]);


  if(typeof delay != "undefined" && delay_count.current < delay) return null;
  return ReactDOM.createPortal(
    <>
      {children}
    </>
    ,export_home
  );
}

export default Exporter;
