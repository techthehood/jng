import { useEffect, useRef, useState, Suspense } from 'react';
import ReactDOM from 'react-dom';
// import getDeferMe from './components/EventCamp/components/DeferMe/getDeferMe';

// import Countdown from './components/Countdown';
// import Hero from './components/Hero';
// import About from './components/About';
// import Testimony from './components/Testimony/Testimony';
// import Partners from './components/Partners/Partners';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
// import Register from './components/EventCamp/components/Register/Register';
import "./components/EventCamp/lib/js/classie.js";
import Biolist from './components/EventCamp/components/Biolist/Biolist';
import EventCamp from './components/EventCamp/EventCamp';

import { JngProvider } from './jngContext';
const jngStore = require('./jngStore').default;

const {landing_data} = require('./jng');

import './components/EventCamp/lib/css/font-awesome.min.css';

require('./NovEvt.scss');

// this creates the css class for choosing which file path to use local or cdn
const file_src = typeof FILE_SRC == "undefined" || FILE_SRC == "cdn" ? "cdn" : "";

const display_console = false;

const NovEvt = ({
  delay = 4,
}) => {

  const store = jngStore;
  
  // const run_defer = () => { 

  //   let DeferMe = getDeferMe['DeferMe'];

  //   ReactDOM.render(
  //     <Suspense fallback={<div className="loader_modal w3-modal active"><div className="loader">Loading...</div></div>} >
  //       <DeferMe />
  //     </Suspense>,
  //     document.querySelector('.deferMe')
  //   );
  //  }

  


  const addText = function () {
    this.setState({ name: "And some more scratchy" })
  }

  return (
    <>
      <JngProvider>
        <EventCamp component="Hero" {...{ data: {...landing_data.hero, file_src} }} />
        <EventCamp component="Countdown" {...{ data: landing_data.countdown }} />
        <EventCamp component="About" {...{ data: {...landing_data.about, file_src}}} />
        <EventCamp component="Partners" {...{ data: landing_data.partners }} />
        {/* <EventCamp component="Testimony" {...{data: {...landing_data.testimony, file_src}}} /> */}
        <EventCamp component="Contact" {...{ data: landing_data.contact }} />
        <EventCamp component="Footer" {...{ data: landing_data.footer }}/>
        <EventCamp component="RegisterMe" />
        <EventCamp component="DeferMe" />
      </JngProvider>
    </>
  )
}

export default NovEvt;
