import {useRef, useState} from "react";
import ReactDOM from "react-dom";

import "./Banner.scss";

import htmlContent from './Banner.hbs';// works as template fn

import Hero from '../Hero';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectFade, Pagination, Autoplay } from 'swiper';

SwiperCore.use([EffectFade, Pagination, Autoplay]);// works
/**
 * [How to use Swiper js for beginners with react js](https://bestofreactjs.com/repo/coderboy-raiyan-Swiper-js-guidline-react-miscellaneous);
 * not a fully finished example - the autoplay is implied 
 * to use it add autoplay to SwiperCore.use and then add autoplay to the Swiper component attributes
 */

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css';// works
// [](https://stackoverflow.com/questions/69154197/module-not-found-cant-resolve-swiper-css)

const Banner = (props) => {

  const {
    data = {},
    auto = false,
  } = props;

  const swiper_ref = useRef();

  // track the active index so i can display the corresponding list array data
  const [activeIndex, setActiveIndex] = useState();
  
  // this narrows the available array data to ones set to active
  const [use_data, setAry] = useState(data.filter((entry) => {
    return entry.active;
  }));

  let svg = (
    <svg id="banner_svg" className="separator__svg" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none"
      fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M 100 100 V 10 L 0 100" />
      <path d="M 30 73 L 100 18 V 10 Z" fill="#ffffff" stroke-width="0" />
    </svg>
  );

  let inner = use_data.map((obj, ndx) => { 
    // NOW: i need a component selector here and use the template prop
    if (use_data.length > 1){
      // use a slider
      return (
        <SwiperSlide key={`ss-${ndx}`}>
          <Hero {...{ data: obj }} />
          {svg}
        </SwiperSlide>
      )
    }else{
      return <Hero {...{data: obj}}/>
    }
  });
  
  const h_cont = htmlContent(data[0]);
  let og_content = (<div className="og_banner" dangerouslySetInnerHTML={{ __html: h_cont }} />);

  let swiper_data = {
    className:"my_swiper",
    // modules: [Navigation, EffectFade, Autoplay],
    navigation: true,
    slidesPerView: 1,
    speed: 800,
    loop: true,
    // autoplay: {
    //   delay: 10000,
    //   disableOnInteraction: false,
    // },
    pagination: {clickable: true},
    // delay: 300,
    // effect: "fade",
  }

  if (/*auto*/false){ 
    swiper_data.autoplay = {
      delay: 10000,
      disableOnInteraction: false,
    }
  }
  
  let content_wrapper = use_data.length > 1 ? (
    <Swiper {...swiper_data}
      onSwiper={(swiper) => {
        console.log(`[Banner] swiper `,swiper);
        console.log('slide realIndex', swiper.realIndex);
        setActiveIndex(swiper.realIndex);
        swiper_ref.current = swiper;
        
      }}
      onSlideChange={() => {
        debugger;
        if(swiper_ref.current){
          console.log('slide activeIndex', swiper_ref.current.activeIndex);
          console.log('slide realIndex', swiper_ref.current.realIndex);
          console.log('slide previousIndex', swiper_ref.current.previousIndex);
        }
      }}
    >
      {inner}
    </Swiper>
  ) : (
    <>
      {inner}
    </>
  );

  let content = (
    <div className="banner parallax">
      <div className="container-fluid">
        <div className="content-row row banner-row">
          {content_wrapper}
          {/* {svg} */}
        </div>
      </div>
      {/* {svg} */}
    </div>
  )

  return (
    <div className="Banner">
      {/* {og_content} */}
      {content}
    </div>
  );
}

export default Banner
