import {useRef, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
// [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)

// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, EffectFade, /*EffectCards,*/ Pagination, Autoplay } from 'swiper';

// SwiperCore.use([EffectFade, /*EffectCards,*/ Pagination, Autoplay]);// works

import Exporter from "../Exporter/Exporter";

import htmlContent from './WWA.hbs';// works as template fn
import detailsHtmlContent from './templates/details.hbs';
import { exists } from "../../../../../../tools/exists";

// Import Swiper styles
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'

import "./WWA.scss";

const display_console = false;

/**
 * @module WWA (WhoWeAre)
 * @param {*} props 
 * @returns 
 */
const WWA = (props) => {

  let {
    data = {},
    auto = false,
  } = props;

  let {
    effect = "cube",
    alias = "",
    custom = "",
  } = data;

  const iUN_ref = useRef(Math.round(Math.random() * 10000)),
  iUN = iUN_ref.current;

  const tag = `wwa${iUN}`;
  let tag_cls = `.${tag}`;

  data = {...data, tag};

  const swiper_ref = useRef();
  let services_details = [];
  
  // track the active index so i can display the corresponding list array data
  const [activeIndex, setActiveIndex] = useState();

  // this narrows the available array data to ones set to active
  const [use_data, setAry] = useState(data.services.filter((entry) => {
    return entry.active;
  }));

  /** 
   * im using the react-intersection-observer package to determine if the 
   * component has scrolled into view, if so it will do stuff - the ref is used to
   * add to the item i want to detect
  */
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .5,
    triggerOnce: true,
    onChange: (inView, entry) => {if(display_console || false) console.log('[WWA] Inview:', inView);},
  });

  useEffect(() => {

    return () => {

    }
  }, [])

  const initialize = () => { 
    let swiper_data = {
      // Optional parameters
      // direction: 'vertical',
      // effect: 'cards',
      effect,
      cardsEffect: {
        slideShadows: true,
        // rotate: true,
      },
      loop: true,
      slidesPerView: 1,
      speed: 800,

      // If we need pagination
      pagination: {
        el: `.swiper-pagination${tag_cls}`,//.wwa - not needed. no naming issues
        clickable: true,
      },

      // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',//.wwa - not needed. no naming issues
      //   prevEl: '.swiper-button-prev',//.wwa - not needed. no naming issues
      // },
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

    if (/*auto*/true) {
      swiper_data.autoplay = {
        delay: 10000,
        disableOnInteraction: false,
      }
    }

    const swiper = new Swiper(`.services_swiper${tag_cls}`, swiper_data);

    swiper.on('slideChange', () => {
      // debugger;
      if (swiper_ref.current) {
        if(display_console || false) console.log('slide activeIndex', swiper_ref.current.activeIndex);
        if(display_console || false) console.log('slide realIndex', swiper_ref.current.realIndex);
        if(display_console || false) console.log('slide previousIndex', swiper_ref.current.previousIndex);
        setActiveIndex(swiper_ref.current.realIndex);
      }
    });
   };// initialize
  

  let inner = use_data.map((details, ndx) => {
    // NOW: i need a component selector here and use the template prop
    const d_cont = detailsHtmlContent(details);
    let a_cls = activeIndex == ndx ? "active" : "";

    services_details.push(
      <div className={`services-details-cont d3-fade-in-quick ${tag} ${a_cls}`} 
        dangerouslySetInnerHTML={{ __html: d_cont }} 
        key={`wwa_details_${iUN}_${ndx}`} 
      />
    );

    if (use_data.length > 1) {
      // use a slider
      return (
        <div className="swiper-slide" style={{ backgroundImage: `url(${details.image})`}} key={`ss-${ndx}`}>
          <p>{details.alias}</p>
        </div>
      )
    } else {
      return <p>im a slide</p>
    }
  });

  let services_wrapper = (
    <Exporter {...{ home: `.service-details-inner${tag_cls}`, delay: 1 }}>
      {services_details}
    </Exporter>
  );

  let content_wrapper = use_data.length > 1 ? (
    <Exporter {...{ home: `.services-area${tag_cls}`, delay: 1, initialize }}>
      <div className={`swiper services_swiper cdn ${tag}`}>
        <div className={`swiper-wrapper`}>
          {inner}
        </div>
        {/* <!-- If we need pagination --> */}
        <div className={`swiper-pagination swiper-pagination ${tag_cls} wwa`}></div>

        {/* <!-- If we need navigation buttons --> */}
        {/* <div className="swiper-button-prev swiper-button-prev wwa"></div>
        <div className="swiper-button-next swiper-button-next wwa"></div> */}
      </div>
    </Exporter>
  ) : (
    <>
      {inner}
    </>
  );

  const h_cont = htmlContent(data);

  return (
    <div id={`${alias}`} className={`About WWA ${alias} ${custom} ${tag}`} data-comp={`WWA`} ref={ref}>
      <div dangerouslySetInnerHTML={{ __html: h_cont }} />
      {inView ? services_wrapper : null}
      {inView ? content_wrapper : null}
    </div>
  );
}

export default WWA
