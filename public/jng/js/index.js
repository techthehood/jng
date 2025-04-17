// import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './Main/App';
// import NovEvt from './NovEvt';
import Archives from './elements/Archives/Archives';

import Events from './Events';
import ErrorBoundary from './Error';
import { NOV_EVT_PATH, MAIN_PATH, EVENTS_PATH, CONFIRM_PATH, ARTICLE_PATH, CDN_PATH } from './paths/'
import MainMenu from './elements/MainMenu';
import Confirm from './Events/Confirm';
import Articles from './elements/Articles/Articles';

import 'bootstrap/dist/css/bootstrap.min.css';

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

ReactDOM.render(
  <ErrorBoundary>
    <Router>
      <Route exact path={NOV_EVT_PATH} render={(props) => (<Archives {...props} />)} />
      {/* <Route exact path={MAIN_PATH} render={(props) => (<NovEvt />)} /> */}
      <Route exact path={MAIN_PATH} render={(props) => (<App />)} />
      <Route exact path={EVENTS_PATH} render={(props) => (<MainMenu {...props}><Events /></MainMenu>)} />
      <Route exact path={CONFIRM_PATH} render={(props) => (<MainMenu {...props} tag="Confirm" ><Confirm /></MainMenu>)} />
      <Route exact path={ARTICLE_PATH} render={(props) => (<MainMenu {...props} fixed={true} tag="Article" ><Articles {...props} /></MainMenu>)} />
      {/* i need a 404 page */}
    </Router>
  </ErrorBoundary>,
  root
);
// hack to make the event page work in place of the live site.
// [React: how to pass props to children](https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children)   