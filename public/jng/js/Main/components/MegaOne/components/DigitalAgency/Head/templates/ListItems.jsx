import {useRef} from 'react'

function ListItems(props) {

  const {
    list,
  } = props;
  
  const iUN_ref = useRef(props.iUN || Math.round(Math.random() * 10000)),
  iUN = iUN_ref.current;

  let links = list.map((link, ndx) => { 
    let {
      label,
      href,
      cls = "",
      act,
      target,
    } = link;


    let targ_el = target ? (
      <a href={`${href}`} key={`li_nav_${ndx}_${iUN}`} target={`${target}`}>{label}</a>/* no class (for now) */
    ) : (
      <a className={`scroll ${cls}`} key={`li_nav_${ndx}_${iUN}`} href={`${href}`}>{label}</a>
    );


    return targ_el
  });

  return links;
};

export default ListItems;