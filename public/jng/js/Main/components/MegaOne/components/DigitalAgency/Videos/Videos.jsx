import { useRef, useState } from 'react';
import Slant from '../Slant';
import Slider from '../../../../../../elements/Slider';
import Slide from '../../../../../../elements/Slider/Slide';
import { useInView } from "react-intersection-observer";

import './Videos.scss';

const display_console = false;

const Videos = (props) => {

  let {
    data,
  } = props;

  const [use_data, setAry] = useState(data.list.filter((entry) => {
    return entry.active;
  }));

  const iUN_ref = useRef(props.iUN || Math.round(Math.random() * 10000)),
  iUN = iUN_ref.current;

  const handle_change = () => { 
    // trun all videos off
    let slide_videos = document.querySelectorAll('.slide_video');
    // slide_videos = Array.from(slide_videos);

    debugger;

    slide_videos.forEach((entry) => { 
      entry.pause();
     })
  }// handle_change

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .5,
    triggerOnce: false,
    onChange: (inView, entry) => {if(display_console || true) console.log('[WWA] Inview:', inView, entry.target.dataset.ndx);},
  });// FAILS - only tracking one item

  let content = use_data.map((entry, ndx) => { 
    return (
      <Slide {...{ndx, iUN}} key={`vid_${iUN}_${ndx}`}>
        <video 
          id={`my-player_${iUN}_${ndx}`}
          className={`slide_video video-js vjs-theme-forest`} /*ref={ref}*/ 
          controls
          // width="640px" 
          // height="264px" 
          // width="700px"
          // height="400px"
          data-ndx={ndx}
          preload="auto"
          poster={entry.poster}
          data-setup='{}'
        >
          <source src={entry.src} type='video/mp4'/>
          {"Your browser does not support the video tag."}
        </video>
        {/* <img src={entry.src} alt="" /> */}
      </Slide>
    )
   })

  return (
    <div className={`Videos`}>
      <Slant {...{top_color: "#fff", bottom_color: "#fff"}}>
        <Slider {...{iUN, loop: false, auto: false, autoHeight: true, /*handle_change*/ /*effect: 'cube'*/}}>
          {content}
        </Slider>
      </Slant>
    </div>
  )
}

export default Videos