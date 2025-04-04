import { lazy } from "react";

const DeferMe = lazy(() => import(/* webpackChunkName: "templates/DeferMe" */ `./DeferMe`));
const ArticleDefer = lazy(() => import(/* webpackChunkName: "templates/ArticleDefer" */ `../Articles/ArticleDefer`));

export default {
  DeferMe,
  ArticleDefer,
};