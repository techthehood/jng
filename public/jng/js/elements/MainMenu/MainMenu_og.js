import { CDN_PATH } from '../../paths/'
import React from 'react';
import './MainMenu.scss';

const MainMenu = (props) => {

  let {
    children,
    tag = "",
    fixed = false,
    ...rest
  } = props;

  const use_path = typeof FILE_SRC == "undefined" || FILE_SRC == "cdn" ? `${CDN_PATH}/` : "";

  let fixed_cls = fixed ? "fixed" : "";
  return (
    <>
    <div id="offcanvas-full-screen" className={`offcanvas-full-screen z-30 ${tag}`} data-off-canvas data-transition="overlap">
      <div className="offcanvas-full-screen-inner">
        <button className="offcanvas-full-screen-close" aria-label="Close menu" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
          <ul className="offcanvas-full-screen-menu">
            {/* {<!-- offcanvas-full-screen-menu -->} */}
            <li><a href="#">Home</a></li>
            {/* <li><a href="#">INVESTORS</a></li> */}
            {/* <li><a href="#">Events</a></li> */}
            {/* <li className="auth-btn"><a href="#">Sign Up</a></li> */}
            {/* <li className="auth-btn"><a href="#">Sign In</a></li> */}
          </ul>
      </div>
    </div>
    <div className={`off-canvas-content ${tag}`} data-off-canvas-content>
      {/* {<!-- Your page content lives below -->} */}
    <header className="sticky-shrinknav-header">
      <div className={`menu-container sticky-shrinknav-menu ${fixed_cls}`}>
        {/* {{!-- <div className="brand-title color-white">BusinessTech</div> --}} */}
        <a href={location.origin} className="brand-title color-white">
          <img src={`${use_path}jng/EventCamp/images/jobsnotguns.png`} />
        </a>
        <button className="menu-icon offCanvas-menu-icon m-20px" type="button" data-toggle="offcanvas-full-screen"></button>
        <ul className="menu align-center">
          <li><a href={location.origin}>Home</a></li>
          {/* <li><a href="#">INVESTORS</a></li> */}
          {/* <li><a href="#">ABOUT</a></li> */}
          {/* <li className="auth-btn"><a href="#">Events</a></li> */}
          {/* <li className="auth-btn"><a href="#">Sign In</a></li> */}
        </ul>
      </div>
    </header>
      {children}
    </div>
    {/* {<!-- off-canvas-content -->} */}
    </>
  )
}

export default MainMenu