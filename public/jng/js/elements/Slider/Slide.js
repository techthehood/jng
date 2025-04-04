import { useRef } from 'react'

const display_console = false;

const Slide = (props) => {
  let {
    children,
    ndx,
    alias = "",
  } = props;

  const iUN_ref = useRef(props.iUN || Math.round(Math.random() * 10000)),
  iUN = iUN_ref.current;

  return (
    <div className={`swiper-slide ${alias}`} key={`slide-${ndx}${iUN}`}>
      {children}
    </div>
  )
}

export default Slide;