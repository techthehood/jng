import {useRef} from 'react'
import ListItems from './ListItems';

const NavLink = (props) => {
  const {
    label,
    href,
    cls,
    act,
    dropdown,
    list,
    li_cls = "",
    a_cls = "",
    ndx = "",
    // target,
  } = props;

  const iUN_ref = useRef(props.iUN || Math.round(Math.random() * 10000)),
  iUN = iUN_ref.current;

  let link = dropdown ? (
    <>
    <a className={`nav-link wow ${cls} ${a_cls}`} href={`#`}>{label}</a>
    {/* <a className={`nav-link wow ${cls} ${a_cls}`} href={`javascript:void(0);`}>{label}</a> */}
    <div className={`dropdown-content`}>
      <ListItems {...{list}} iUN={iUN} />
    </div>
    </>
  ) : (
    <a className={`nav-link wow ${cls} ${a_cls}`} href={`${href}`}>{label}</a>
  )

  return (
    <li className={`nav-item ${act} ${li_cls}`} key={`nav_link_${ndx}_${iUN}`}>
      {link}
    </li>
  )
}

export default NavLink