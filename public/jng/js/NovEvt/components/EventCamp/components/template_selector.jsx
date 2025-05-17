import { lazy } from "react";

console.log("[EventCamp] Component loading lazy");

const About = lazy(() => import(/* webpackChunkName: "templates/EventCamp" */ `./About`));
const Biolist = lazy(() => import(/* webpackChunkName: "templates/EventCamp" */ `./Biolist`));
const Contact = lazy(() => import(/* webpackChunkName: "templates/EventCamp" */ `./Contact`));
const Countdown = lazy(() => import(/* webpackChunkName: "templates/EventCamp" */ `./Countdown`));
const DeferMe = lazy(() => import(/* webpackChunkName: "templates/EventCamp" */ `../../../../elements/DeferMe`));// WORKS

// FAILS delays too long - the loader screen depends on the timing to hide
// const DeferMe = lazy(() => import(/* webpackChunkName: "templates/EventCamp" */ `./DeferMe/DelayDefer`));

const Footer = lazy(() => import(/* webpackChunkName: "templates/EventCamp" */ `./Footer`));
const Hero = lazy(() => import(/* webpackChunkName: "templates/EventCamp" */ `./Hero`));
const Partners = lazy(() => import(/* webpackChunkName: "templates/EventCamp" */ `./Partners`));
// const Speakers = lazy(() => import(/* webpackChunkName: "templates/EventCamp" */ `./Speakers`));
const Testimony = lazy(() => import(/* webpackChunkName: "templates/EventCamp" */ `./Testimony`));
const RegisterMe = lazy(() => import(/* webpackChunkName: "templates/EventCamp" */ `./Register/RegisterMe`));

export default { 
  About,
  Biolist,
  Contact,
  Countdown,
  Footer,
  Hero,
  Partners,
  // Speakers,
  Testimony,
  RegisterMe,
  DeferMe,
};