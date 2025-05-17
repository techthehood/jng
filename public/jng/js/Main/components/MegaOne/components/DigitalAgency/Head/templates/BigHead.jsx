import {useRef} from 'react'
import ListItems from './ListItems';
import NavLink from './NavLink';
import Socials from './Socials';

const BigHead = (props) => {

  const {
    menu,
    social_icons,
    images,
    urls,
  } = props;

  const iUN_ref = useRef(props.iUN || Math.round(Math.random() * 10000)),
  iUN = iUN_ref.current;

  const menu_map = (ary, {tag = "", ...rest} = {}) => { 
    // li_cls="dropdown" a_cls="scroll dropbtn"
    let menus = ary.map((item, ndx) =>{ 
      let data = {
        ...item,
        tag,
        iUN,
        ndx,
        ...rest
      };
      let key = `nav_link_${tag}_${ndx}_${iUN}`;

      return <NavLink {...data} key={key}/>;
    });

    return menus;
  }

  const list_items = menu_map(menu, {tag:"li", li_cls:"dropdown", a_cls:"scroll dropbtn"});

  // the keys have to be slightly different - links are slightly different  
  const nav_items = menu_map(menu);

  // this uses the same elements so no need for multiple properties
  let socials = social_icons.map((icon, ndx) => {
    let data = {
      ...icon,
      iUN,
      ndx,
    };
    let key = `socials_${ndx}_${iUN}`;
    return <Socials {...data} key={key}/>;
  });

  return (
    <header id={`home`}  data-comp={`Head`}>
      <div className={`container`}>
        <div className={`main-nav`}>
          <div className={`row`}>
            <div className={`col-12`}>
              <nav className={`navbar navbar-expand-lg navbar-light`}>
                <a className={`navbar-brand bg-dark`} href={`${urls.home}`}>
                  <img src={`${images.logo1}`} />
                </a>
                <div className={`collapse navbar-collapse`} id={`navbarNavDropdown`}>
                  <ul className={`navbar-nav ml-auto`}>
                    {list_items}
                  </ul>
                </div>
                <div className={`contact-social-icons d-flex justify-content-end align-items-center`}>
                  <ul className={`upper-social-icons`}>
                    {socials}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Side Menu Button--> */}
      {/* ${!-- <a href={`javascript:void(0)`} className={`sidemenu_btn`} id={`sidemenu_toggle`}>
        <i className={`lni lni-menu`}></i>
      </a> --} */}
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
          <path d={`M 30 73 L 100 18 V 10 Z`} fill={`#fff`} strokeWidth={`0`} />
        </svg>
      </div>
      {/* <a id={`close_side_menu`} href={`javascript:void(0);`}></a> */}
      <a id={`close_side_menu`} ></a>
    </header>
  )
}

export default BigHead



// drop down menu https://www.w3schools.com/css/css_dropdowns.asp