import {useRef, useState, useEffect} from "react";
import ReactDOM from "react-dom";

import "./Banner.scss";

import htmlContent from './Banner.hbs';// works as template fn

import Hero from '../Hero';

// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, EffectFade, Pagination, Autoplay } from 'swiper';

// SwiperCore.use([EffectFade, Pagination, Autoplay]);// works
/**
 * [How to use Swiper js for beginners with react js](https://bestofreactjs.com/repo/coderboy-raiyan-Swiper-js-guidline-react-miscellaneous);
 * not a fully finished example - the autoplay is implied 
 * to use it add autoplay to SwiperCore.use and then add autoplay to the Swiper component attributes
 */

// Import Swiper styles
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css';// works
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

  useEffect(() => {

    let swiper_data = {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      slidesPerView: 1,
      speed: 800,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: (swiper) => {
          console.log(`[Banner] swiper `, swiper);
          console.log('slide realIndex', swiper.realIndex);
          setActiveIndex(swiper.realIndex);
          swiper_ref.current = swiper;
        },
      },
      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    }// swiper_data

    if (/*auto*/ true) {
      swiper_data.autoplay = {
        delay: 10000,
        disableOnInteraction: false,
      }
    }

    const swiper = new Swiper('.my_swiper', swiper_data);

    swiper.on('slideChange', () => {
      // debugger;
        if(swiper_ref.current){
          console.log('slide activeIndex', swiper_ref.current.activeIndex);
          console.log('slide realIndex', swiper_ref.current.realIndex);
          console.log('slide previousIndex', swiper_ref.current.previousIndex);
          setActiveIndex(swiper_ref.current.realIndex);
        }
    });
  
    return () => {
      
    }
  }, []);
  

  let svg = (
    <svg id="banner_svg" className="separator__svg" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none"
      fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M 100 100 V 10 L 0 100" />
      <path d="M 30 73 L 100 18 V 10 Z" fill="#ffffff" strokeWidth="0" />
    </svg>
  );

  let inner = use_data.map((obj, ndx) => { 
    // NOW: i need a component selector here and use the template prop
    if (use_data.length > 1){
      // use a slider
      return (
        <div className="swiper-slide" key={`ss-${ndx}`}>
          <Hero {...{ data: obj }} />
          {svg}
        </div>
      )
    }else{
      return (
        <div className="banner_inner" key={`ss-${ndx}`}>
          <Hero {...{data: obj}}/>
          {svg}
        </div>
      )
    }
  });
  
  // DEPRECATED - i don't think im using this at all
  // const h_cont = htmlContent(data[0]);
  // let og_content = (<div className="og_banner" dangerouslySetInnerHTML={{ __html: h_cont }} />);
  

  let content_wrapper = use_data.length > 1 ? (
    <div className="swiper my_swiper cdn" >
      <div className="swiper-wrapper">
        {inner}
      </div>
      {/* <!-- If we need pagination --> */}
      <div className="swiper-pagination"></div>

      {/* <!-- If we need navigation buttons --> */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
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
    <div className="Banner" data-comp="Banner">
      {/* {og_content} */}
      {content}
    </div>
  );
}

export default Banner
