import { lazy } from "react";

console.log("[MegaOne] Component loading lazy");

const Head = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/Head`));

const Loader = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/Loader`));

const Banner = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/Banner`));

const Promo = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `../../../../elements/Promo`));

const About = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/WWA`));
// const About = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/About`));

const Videos = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/Videos`));

const Practices = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/WWA`));// WWD

const Portfolio = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/Portfolio`));

const Team = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/Team`));

const Events = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/Events`));

const Brands = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/Brands`));

const Blog = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/Blog`));

const Contact = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/Contact`));

const Foot = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/Foot`));

const FixedNav = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/FixedNav`));

// NOTE there are 2 of these. this one is in MegaOne the other is in elements
const DelayDefer = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/DeferMe/DelayDefer`));

// const WWA = lazy(() => import(/* webpackChunkName: "templates/MegaOne" */ `./DigitalAgency/WWA`));

export default { 
  Head, 
  DelayDefer,
  Loader,
  Banner,
  Promo,
  About,
  Videos,
  Practices,
  Team,
  Events,
  Brands,
  Blog,
  Contact,
  Foot,
  Portfolio,
  FixedNav,
  // WWA,
};