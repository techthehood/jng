// import React from 'react'
// import "../../../lib/vendor/css/bundle.min.css";
// import "../../../lib/vendor/css/LineIcons.min.css";
import "../../../lib/vendor/css/revolution-settings.min.css";
import "../../../lib/vendor/css/jquery.fancybox.min.css";
import "../../../lib/vendor/css/owl.carousel.min.css";
// import "../../../lib/vendor/css/cubeportfolio.min.css";
import "../../../lib/vendor/css/wow.css";

import "../lib/css/slick.css";
import "../lib/css/slick-theme.css";
import "../lib/css/style.css";

// import "../../../lib/vendor/js/bundle.min.js";// fails in the vendor
// <!--Plugin Js-- >
import "../../../lib/vendor/js/jquery.appear.js";
import "../../../lib/vendor/js/jquery.fancybox.min.js";
// import "../../../lib/vendor/js/wow.min.js";// wow is a global variable and needs to load early
import "../../../lib/vendor/js/owl.carousel.min.js";
import "../../../lib/vendor/js/parallaxie.min.js";
// import "../../../lib/vendor/js/jquery.cubeportfolio.min.js";

// <!--custom script-- >
import "../lib/js/slick.min.js";
// import "../../../lib/vendor/js/contact_us.js";
import "../lib/js/script.js";
import "../../../../../../../../icomoon/style.scss";




const DeferMe = () => {
  return null;
}

export default DeferMe;

// NOTE: works for deferring the loading of a group of js and css files after page loads
// helps projects avoid conflicts in page loading since all the files aren't stored in a single bundle.js/css file
// these files only load when triggered by an event or by the loading of a specific element using a useEffect/Suspend trigger