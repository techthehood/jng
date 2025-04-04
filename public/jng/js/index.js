// import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './Main/App';
// import NovEvt from './NovEvt';
import Archives from './elements/Archives/Archives';

import Events from './Events';
import ErrorBoundary from './Error';
import { NOV_EVT_PATH, MAIN_PATH, EVENTS_PATH, CONFIRM_PATH, ARTICLE_PATH } from './paths/'
import MainMenu from './elements/MainMenu';
import Confirm from './Events/Confirm';
import Articles from './elements/Articles/Articles';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.querySelector('.root');

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