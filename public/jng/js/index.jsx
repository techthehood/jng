import React from 'react';
import ReactDOM from 'react-dom';
// import {createRoot} from 'react-dom/client';// vite
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './Main/App.jsx';
// import NovEvt from './NovEvt';
// import Archives from './elements/Archives/Archives';

import Events from './Events';
import ErrorBoundary from './Error/Error';
import { NOV_EVT_PATH, MAIN_PATH, EVENTS_PATH, CONFIRM_PATH, ARTICLE_PATH, CDN_PATH, FOUR_OH_FOUR } from './paths/'
import MainMenu from './elements/MainMenu';
import Confirm from './Events/Confirm';
import Articles from './elements/Articles/Articles';

import '../foundation/foundation.min.js';
import '../foundation/foundation.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './Main/components/MegaOne/components/DigitalAgency/Loader';
import use_root from './tools/use_root';
import "../MegaOne/digital-agency/css/style.css";

window.addEventListener("DOMContentLoaded", () => {
  // your functions here
  
  const root = document.querySelector('.root');
  
  // DEPRECATED - not using multiple variable interpolation ISSUE with the space character
  // window[`CDN_PATH`] = CDN_PATH;// NOTE: has no trailing slash
  // if(typeof FILE_SRC == "undefined" || FILE_SRC == "cdn"){
  //   // document.documentElement.style.setProperty("--img_root", CDN_PATH);
  
  //   let dE = getComputedStyle(document.documentElement);
  //   // let monument = dE.getPropertyValue("--monument");// still has extra characters
  //   let monument = dE.getPropertyValue("--monument").replace(/"/g, "").trim();// WORKS
  
  //   console.log(`[jng][index.js] monument`, monument);
  // }

  if(1) console.log(`[index.jsx] running`);
  if(1) debugger;

  const inner = (
    <ErrorBoundary>
      <Router>
        {/* <Route exact path={NOV_EVT_PATH} render={(props) => (<Loader><Archives {...props} /></Loader>)} /> */}
        {/* <Route exact path={MAIN_PATH} render={(props) => (<NovEvt />)} /> */}
        <Route exact path={MAIN_PATH} render={(props) => (<App />)} />
        <Route exact path={EVENTS_PATH} render={(props) => (<MainMenu {...props}><Events /></MainMenu>)} />
        <Route exact path={CONFIRM_PATH} render={(props) => (<MainMenu {...props} tag="Confirm" ><Confirm /></MainMenu>)} />
        <Route exact path={ARTICLE_PATH} render={(props) => (<MainMenu {...props} fixed={true} tag="Article" ><Articles {...props} /></MainMenu>)} />
        <Route path={FOUR_OH_FOUR} render={(props) => (<App />)}  />
        {/* <Route path={FOUR_OH_FOUR} component={Four04} /> */}
        {/* i need a 404 page */}
      </Router>
    </ErrorBoundary>
  );
  
  // if(ReactDOM.hasOwnProperty("createRoot")){
    // vite
      // const rootDOM = createRoot(root);
      // window['ROOT'] = root;
  
      // rootDOM.render(
      //   // <React.StrictMode>
      //     inner,
      //   // </React.StrictMode>, 
      // )
    // }else{
      // webpack
      // ReactDOM.render(
      //   inner,
      //   root
      // );
    // }

    use_root(inner, root);
  
  // hack to make the event page work in place of the live site.
  // [React: how to pass props to children](https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children)   
});
