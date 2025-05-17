import React from 'react'
import NavLink from './NavLink';
import Socials from './Socials';

const LilHead = ({
  menu,
  social_icons,
  images,
  urls
}) => {

  const nav_items = menu.map((nI, ndx) => <NavLink {...nI} key={`lH_nI_${ndx}`}/>);
  let socials = social_icons.map((icon, ndx) => <Socials {...icon} key={`lH_sI_${ndx}`}/>);

  return (
    <header id={`home`}  data-comp={`Head`}>
      <div className={`container`}>
        <div className={`upper-nav`}>
          <div className={`row`}>
            <div className={`col-6 d-flex align-items-center`}>
              <div className={`contact-info`}>
                <span><i className={`lni lni-whatsapp`}></i> +1 631 123 4567</span>
              </div>
            </div>
            <div className={`col-6`}>
              <div className={`contact-social-icons d-flex justify-content-end align-items-center`}>
                <ul className={`upper-social-icons`}>
                  {socials}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`main-nav`}>
          <div className={`row`}>
            <div className={`col-12`}>
              <nav className={`navbar navbar-expand-lg navbar-light`}>
                <a className={`navbar-brand bg-dark`} href={`${urls.home}`}>
                  <img src={`${images.logo1}`}/>
                </a>
                <div className={`collapse navbar-collapse`} id={`navbarNavDropdown`}>
                  <ul className={`navbar-nav ml-auto`}>
                    {nav_items}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Side Menu Button--> */}
      <a href={`javascript:void(0)`} className={`sidemenu_btn`} id={`sidemenu_toggle`}>
        <i className={`lni lni-menu`}></i>
      </a>
      {/* <!--Side Nav--> */}
      <div className={`side-menu hidden side-menu-opacity`}>
        <div className={`inner-wrapper`}>
          <span className={`btn-close`} id={`btn_sideNavClose`}><i></i><i></i></span>
          <a className={`navbar-brand`}>
            <img src={`${images.logo2}`} alt={`logo`} />
          </a>
          <nav className={`side-nav w-100`}>
            <ul className={`navbar-nav`}>
              {nav_items}
            </ul>
          </nav>

          <div className={`side-footer text-white w-100 d-flex justify-content-center`}>
            <ul className={`social-icons-simple`}>
              {socials}
            </ul>
          </div>
        </div>
        <svg className={`separator__svg`} id={`site-mmenu-svg`} width={`100%`} viewBox={`0 0 100 100`} preserveAspectRatio={`none`}
          fill={`#fff`} version={`1.1`} xmlns={`http://www.w3.org/2000/svg`}>
          <path d={`M 100 100 V 10 L 0 100`} />
          <path d={`M 30 73 L 100 18 V 10 Z`} fill={`#fff`} stroke-width={`0`} />
        </svg>
      </div>
      <a id={`close_side_menu`} href={`javascript:void(0);`}></a>
    </header>
  )
}

export default LilHead