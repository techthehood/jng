import { forwardRef, useRef, useState } from 'react';
import Slider from '../../../elements/Slider';
import Slide from '../../../elements/Slider/Slide';
import { useInView } from "react-intersection-observer";

import './PhotoSwipe.scss';

const display_console = false;

const PhotoSwipe = forwardRef((props, ref) => {

  let {
    list,
    tag,
    alias = "",
    lazy,
    slidesPerView = 5,
    freeMode,
    pagination,
    spaceBetween  = 10,
    slidesPerGroup,
    effect,
  } = props;

  const [use_data, setAry] = useState(list.filter((entry) => {
    return entry.active;
  }));

  const iUN_ref = useRef(props.iUN || Math.round(Math.random() * 10000)),
  iUN = iUN_ref.current;

  const handle_change = () => { 
    // trun all videos off
    let slide_photos = document.querySelectorAll('.slide_photo');
    // slide_photos = Array.from(slide_photos);

    debugger;

    slide_photos.forEach((entry) => { 
      entry.pause();
     })
  }// handle_change

  const { /*ref,*/ inView, entry } = useInView({
    /* Optional options */
    threshold: .5,
    triggerOnce: false,
    onChange: (inView, entry) => {if(display_console || true) console.log('[WWA] Inview:', inView, entry.target.dataset.ndx);},
  });// FAILS - only tracking one item

  let content = use_data.map((entry, ndx) => { 
    return (
      <Slide {...{ndx, iUN}} key={`vid_${iUN}_${ndx}`}>
        <img 
          id={`my-player_${iUN}_${ndx}`}
          className={`slide_photo ${lazy ? `swiper-lazy` : ""}`} /*ref={ref}*/ 
          src={entry.image}
        />
        {lazy ? <div className="swiper-lazy-preloader"></div> : null}
        {/* <img src={entry.src} alt="" /> */}
      </Slide>
    )
   })

   let slider_data = {
    alias, 
    ref,
    iUN, 
    loop: true, 
    auto: false, 
    autoHeight: true, 
    navigation,
    pagination,
    slidesPerView, 
    lazy,/*handle_change*/ /*effect: 'cube'*/
    freeMode,
    spaceBetween,
    slidesPerGroup,
    effect,
  } 

  return (
    <div className={`PhotoSwipe ${tag}`}>
      <Slider {...slider_data}>
        {content}
      </Slider>
    </div>
  )
})

export default PhotoSwipe