import {useRef, useState, useEffect, forwardRef} from "react";
import ReactDOM from "react-dom";

import "./Slider.scss";

// import htmlContent from './Slider.hbs';// works as template fn

// import Hero from '../Hero';

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

const display_console = false;

const Slider = forwardRef((props, ref) => {

  const {
    data = {},
    auto = false,
    effect,
    children,
    alias,
    handle_change,
    loop = true,
    slidesPerView = 1,
    speed = 800,
    navigation = true,
    pagination = true,
    lazy,
    freeMode,
    spaceBetween,
    slidesPerGroup,
    // autoHeight = false,
  } = props;

  const swiper_ref = useRef();

  if(ref) ref.current.swiper = swiper_ref;

  // track the active index so i can display the corresponding list array data
  const [activeIndex, setActiveIndex] = useState();

  const iUN_ref = useRef(props.iUN || Math.round(Math.random() * 10000)),
  iUN = iUN_ref.current;

  const tag = `sli${iUN}`;
  let tag_cls = `.${tag}`;

  useEffect(() => {

    let swiper_data = {
      // Optional parameters
      // direction: 'vertical',
      // effect: 'cards',
      // cardsEffect: {
      //   slideShadows: true,
      //   // rotate: true,
      // },
      loop,
      slidesPerView,
      speed,
      // If we need pagination
      // virtual: {
      //   slides: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'],
      //   addSlidesAfter: 5,
      //  FAILs - needs to be added in string form to operate with swiper core
      // },

      // Navigation arrows
      
      on: {
        init: (swiper) => {
          if(display_console || false) console.log(`[WWA] swiper `, swiper);
          if(display_console || false) console.log('slide realIndex', swiper.realIndex);
          setActiveIndex(swiper.realIndex);
          swiper_ref.current = swiper;
        },
      },
      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    }// swiper_data

    if (navigation) {
      swiper_data.navigation = {
        nextEl: `.swiper-button-next${tag}`,//.wwa - not needed. no naming issues
        prevEl: `.swiper-button-prev${tag}`,//.wwa - not needed. no naming issues
      };
    }

    if (lazy) {
      swiper_data.lazy = true;
      swiper_data.preloadImages = false;// i think it does this by default
    }
    if (freeMode) {
      swiper_data.freeMode = true;
    }// use instead of pagination (dots)
      
    if (pagination) {
      swiper_data.pagination = {
        el: `.swiper-pagination${tag}`,//.wwa - not needed. no naming issues
        clickable: true,
      };
    }

    if (spaceBetween) {
      swiper_data.spaceBetween = spaceBetween;
    }

    if (slidesPerGroup) {
      swiper_data.slidesPerGroup = slidesPerGroup;
    }

    if(effect){
      swiper_data.effect = effect;
    }

    // if(autoHeight){
    //   swiper_data.autoHeight = true;
    //   // swiper_data.calculateHeight = true;
    // }

    if (auto) {
      swiper_data.autoplay = {
        delay: 10000,
        disableOnInteraction: false,
      }
    }

    const swiper = new Swiper(`.sli_swiper${tag}`, swiper_data);

    swiper.on('slideChange', () => {
      // debugger;
        if(swiper_ref.current){
          console.log('slide activeIndex', swiper_ref.current.activeIndex);
          console.log('slide realIndex', swiper_ref.current.realIndex);
          console.log('slide previousIndex', swiper_ref.current.previousIndex);
          setActiveIndex(swiper_ref.current.realIndex);
        }
        if(handle_change) handle_change();
    });
  
    return () => {
      
    }
  }, []);
  
  
  // DEPRECATED - i don't think im using this at all
  // const h_cont = htmlContent(data[0]);
  // let og_content = (<div className="og_slider" dangerouslySetInnerHTML={{ __html: h_cont }} />);
  

  let content_wrapper = (
    <div className={`swiper cdn sli_swiper  sli_swiper${tag} ${tag}`} >
      <div className={`swiper-wrapper swiper-wrapper${tag} ${tag}`}>
        {children}
      </div>
      {/* <!-- If we need pagination --> */}
      <div className={`swiper-pagination swiper-pagination${tag} ${tag}`}></div>

      {/* <!-- If we need navigation buttons --> */}
      <div className={`swiper-button-prev swiper-button-prev${tag} ${tag}`}></div>
      <div className={`swiper-button-next swiper-button-next${tag} ${tag}`}></div>
    </div>
  );

  let content = (
    <div className={`slider ${tag}`}>
      {content_wrapper}
    </div>
  )

  return (
    <div className={`Slider ${tag} ${alias}`}>
      {/* {og_content} */}
      {content}
    </div>
  );
});

export default Slider
