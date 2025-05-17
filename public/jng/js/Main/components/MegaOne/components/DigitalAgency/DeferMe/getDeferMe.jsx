import { lazy } from "react";

const DeferMe = lazy(() => import(/* webpackChunkName: "templates/DeferMe" */ `./DeferMe`));

export default {
  DeferMe
};