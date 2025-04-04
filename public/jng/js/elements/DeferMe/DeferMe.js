// import React from 'react'

import "../../NovEvt/components/EventCamp/lib/css/font-awesome.min.css";
// import "../../NovEvt/components/EventCamp/lib/css/bootstrap.min.css";
import "../../NovEvt/components/EventCamp/lib/css/owl.transitions.css";
import "../../NovEvt/components/EventCamp/lib/css/owl.carousel.css";
import "../../NovEvt/components/EventCamp/lib/css/owl.theme.css";
import "../../NovEvt/components/EventCamp/lib/scss/style.scss";
// import "../../NovEvt/components/EventCamp/lib/css/style.css";// ISSUE - same namespace conflicts with MegaOne
import "../../NovEvt/components/EventCamp/lib/css/responsive.css";
import "../../NovEvt/components/EventCamp/lib/scss/EventCamp.scss";

// import "../../NovEvt/components/EventCamp/lib/js/jquery-2.2.4.min.js";
// import "../../NovEvt/components/EventCamp/lib/js/bootstrap.min.js";
import "../../NovEvt/components/EventCamp/lib/js/iscroll.js";
import "../../NovEvt/components/EventCamp/lib/js/menu.js";
import "../../NovEvt/components/EventCamp/lib/js/owl.carousel.min.js";
// import "../../NovEvt/components/EventCamp/lib/js/classie.js";
// import "../../NovEvt/components/EventCamp/lib/js/custom-menu.js";// DEPRECATED
import "../../NovEvt/components/EventCamp/lib/js/eventpremium-script.js";
import "../../../../icomoon/d3po.scss";
import "../../../../icomoon/style.scss";



const DeferMe = () => {
  return null;
}

export default DeferMe;

// NOTE: works for deferring the loading of a group of js and css files after page loads
// helps projects avoid conflicts in page loading since all the files aren't stored in a single bundle.js/css file
// these files only load when triggered by an event or by the loading of a specific element using a useEffect/Suspend trigger