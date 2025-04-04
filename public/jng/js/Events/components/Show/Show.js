import {useEffect, useRef, useState} from 'react'
import './Show.scss';
import PhotoSwipe from '../PhotoSwipe/PhotoSwipe';
import { exists } from '../../../tools/exists';
import { get_device } from '../../../tools/get_device';

const Show = ({
  alias = "",
  title,
  sub,
  description,
  has_background = false,
  card = false,
  button1 = {active: true},
  button2 = {active: false},
  image,
  what,
  feat = false,
  photos,
}) => {

  const [val, setVal] = useState(0); // integer state
  const forceUpdate = () => {
    setVal(val => ++val); // update the state to force render
  }// forceUpdate

  const last_size = useRef("");
  const photo_ref = useRef({});
  
  useEffect(() => {
    // window
    //     // window.on( 'resize', function() {
    // window.onresize = () => {
    //   // console.log(`[Show] window is resizing`);
    //   test_resize();//FAILS
    // };
    
    return () => {
      
    }
  }, [])

  const test_resize = () => { 
    let {device_size, device_type} = get_device({mode: "both"});

    if(last_size.current != device_size){
      console.log(`[Show] window is resizing`, device_size);
      //force swiper resize
      photo_ref.current.swiper.current.update();
      // photo_ref.current.swiper.resize();
      // save last size
      last_size.current = device_size;

      // force refresh
      forceUpdate();
    }
  }
  

  let show_bg = has_background ? (
    <div className={`show_img_cont`}>
      <img className={`dad_job`} src="jng/MegaOne/digital-agency/img/dad_job2.png" />
    </div>
  ) : null;

  let {device_size, device_type} = get_device({mode: "both"});

  if(last_size.current == "") last_size.current = device_size;

  let has_photos = exists(photos) && Array.isArray(photos) && photos.length > 0;

  let card_cls = card ? "w3-card" : "";
  let card_cont = card ? "card-container" : "";

  let btn1 = button1.active ? (
    <a href={button1.url} className={`learn w3-btn`}>{button1.text}</a>
  ): null;

  let btn2 = button2.active ? (
    <a 
      className={`register w3-btn`} 
      href={button2.url} 
      target={`_blank`}
    >{button2.text}</a>
  ): null;

  let show_cls = feat ? "" : "show_list";

  let photoswipe_data = {
    list: photos, 
    tag: "event-photo-slide", 
    alias: "evp-swiper", 
    lazy: true, 
    pagination: false, 
    ref: photo_ref,
  };

  // let sv = device_size == "medium" ? 3 : 5;
  let sv = 3;
  
  photoswipe_data = device_size != "small" ? {
    ...photoswipe_data,
    slidesPerView: sv,
    slidesPerGroup: sv - 1,
  } : {
    ...photoswipe_data,
    // slidesPerGroup: 4,
    pagination: false,
    slidesPerView: 1,
    effect: "cube",
    spaceBetween: 0,
  };

    // photoswipe_data = {
    //   ...photoswipe_data,
    //   slidesPerView: sv,
    //   slidesPerGroup: sv - 1,
    // } 

  return (
    <div className={`show_container container ${card_cont} ${alias} ${show_cls}`} data-comp="Show">
      <div className={`show_inner ${card_cls}`}>
        <div className={`date-saver`}>
          <img className={`flyer_img`} src={image}/>
        </div>
        <div className="show_text_cont">
          <h1>{title}</h1>
          <h3>{sub}</h3>
          <p>{description}</p>
          <div className="nav_btns">
            {btn1}
            {btn2}
          </div>
        </div>
        {show_bg}
      </div>
        {has_photos ? <PhotoSwipe {...photoswipe_data}/> : null}
    </div>
  );
}

export default Show
// "jng/MegaOne/digital-agency/img/jng-w1-savethedate_og.png"