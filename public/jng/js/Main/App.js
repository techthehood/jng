import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import "../../MegaOne/vendor/js/bundle.min.js";// WORKS (GOTCHA: breaks with no jquery without it)
import "../../MegaOne/vendor/js/wow.min.js";// what does this button do? - create team slider

// import * as line from "../../MegaOne/vendor/css/LineIcons.min.css";
// import * as css from "../../MegaOne/vendor/css/bundle.min.css";
// import "./test.css";// WORKS

import MegaOne from './components/MegaOne/MegaOne';
import Exporter from './components/MegaOne/components/DigitalAgency/Exporter/Exporter';

import { MainProvider } from './mainContext';
const mainStore = require('./mainStore').default;

import customContent from './components/MegaOne/components/DigitalAgency/Events/Custom.hbs';

const { main_data } = require('./data');
require('./main.scss');

const App = () => {

  const store = mainStore;

  const registration = (params) => {
    ReactDOM.render(
      <MainProvider>
        {/* <Register /> */}
      </MainProvider>,
      document.querySelector('.modal_home')
    );
  }// registration

  const bioList = (params) => {
    ReactDOM.render(
      <MainProvider>
        {/* <Biolist /> */}
      </MainProvider>,
      document.querySelector('.modal_home')
    );
  }// biolist

  useEffect(() => {
    // effect
    // let register_btn = document.querySelectorAll('.register-btn');// NodeList []
    // // let register_btn = document.querySelectorAll('.register-now-btn');

    // // Array.from()

    // // if(register_btn.length > 0){}// not needed 
    // register_btn.forEach((entry) => {
    //   entry.addEventListener('click', registration);
    // })

    // let links_btn = document.querySelectorAll('.links-btn');// NodeList []
    // // let register_btn = document.querySelectorAll('.register-now-btn');

    // // Array.from()

    // // if(register_btn.length > 0){}// not needed 
    // links_btn.forEach((entry) => {
    //   entry.addEventListener('click', bioList);
    // })


    return () => {
      // cleanup
    }
  }, [])

  const addText = function () {
    this.setState({ name: "And some more scratchy" })
  }

  const event_custom = customContent();

  return (
    <>
      <MainProvider>
        <MegaOne component="Loader" />
        <MegaOne component="Head"  {...{ data: main_data.head, mode: 'BigHead' }} />
        <MegaOne component="Banner"  {...{ data: main_data.banner }} />
        <MegaOne component="About"  {...{ data: main_data.about }} />
        <MegaOne component="Promo"  {...{ data: main_data.promo }} />
        <MegaOne component="Videos"  {...{ data: main_data.videos }} />
        <MegaOne component="Practices"  {...{ data: main_data.practices }} />
        <MegaOne component="Team"  {...{ data: main_data.team }} />
        <MegaOne component="Portfolio"  {...{ data: main_data.portfolio }} />
        {/* <MegaOne component="Brands"  {...{ data: main_data.brands }} /> */}
        <MegaOne component="Blog"  {...{ data: main_data.blogs }} />
        <MegaOne component="Events"  {...{ data: main_data.events }} >
          <Exporter {...{ home: `.custom_head.summit`, delay: 3 }}>
            <div className="summit head">
              Comming Soon
            </div>
          </Exporter>
          <Exporter {...{ home: `.custom_cont.summit`, delay: 3 }}>
            <div dangerouslySetInnerHTML={{ __html: event_custom }} />
          </Exporter>
        </MegaOne>
        <MegaOne component="Contact"  {...{ data: main_data.contact }} />
        <MegaOne component="Foot"  {...{ data: main_data.foot }} />
        <MegaOne component="FixedNav"  {...{ data: main_data.fixed_nav }} />
        <MegaOne component="DelayDefer" />
      </MainProvider>
    </>
  )
}// App

export default App;
