import {useRef, useState} from "react";
import ReactDOM from "react-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectFade, /*EffectCards,*/ Pagination, Autoplay } from 'swiper';

SwiperCore.use([EffectFade, /*EffectCards,*/ Pagination, Autoplay]);// works

import Exporter from "../Exporter/Exporter";

import htmlContent from './WWA.hbs';// works as template fn
import detailsHtmlContent from './templates/details.hbs';

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

  const {
    data = {},
    auto = false,
  } = props;

  const swiper_ref = useRef();
  let services_details = [];

  // track the active index so i can display the corresponding list array data
  const [activeIndex, setActiveIndex] = useState();

  // this narrows the available array data to ones set to active
  const [use_data, setAry] = useState(data.services.filter((entry) => {
    return entry.active;
  }));

  const iUN_ref = useRef(Math.round(Math.random() * 10000)),
  iUN = iUN_ref.current;

  let inner = use_data.map((details, ndx) => {
    // NOW: i need a component selector here and use the template prop
    const d_cont = detailsHtmlContent(details);
    let a_cls = activeIndex == ndx ? "active" : "";

    services_details.push(
      <div className={`services-details-cont ${a_cls}`} 
        dangerouslySetInnerHTML={{ __html: d_cont }} 
        key={`wwa_details_${iUN}_${ndx}`} 
      />
    )
      // <div className="services_details">
      //   <div dangerouslySetInnerHTML={{ __html: d_cont }} />
      // </div>

    if (use_data.length > 1) {
      // use a slider
      return (
        <SwiperSlide key={`ss-${ndx}`}>
          <p>im a slide</p>
        </SwiperSlide>
      )
    } else {
      return <p>im a slide</p>
    }
  });

  let swiper_data = {
    className: "services_cards",
    // modules: [Navigation, EffectFade, Autoplay],
    navigation: true,
    slidesPerView: 1,
    speed: 800,
    loop: true,
    // autoplay: {
    //   delay: 10000,
    //   disableOnInteraction: false,
    // },
    pagination: { clickable: true },
    // delay: 300,
    // effect: "fade",
  }

  if (/*auto*/false) {
    swiper_data.autoplay = {
      delay: 10000,
      disableOnInteraction: false,
    }
  }

  let services_wrapper = (
    <Exporter {...{ home: ".service-details-inner", delay: 1 }}>
      {services_details}
    </Exporter>
  );
  let content_wrapper = use_data.length > 1 ? (
    <Exporter {...{ home: ".services-area", delay: 1 }}>
      <Swiper {...swiper_data}
        onSwiper={(swiper) => {
          if(display_console || false) console.log(`[WWA] swiper `, swiper);
          if(display_console || true) console.log('slide realIndex', swiper.realIndex);
          setActiveIndex(swiper.realIndex);
          swiper_ref.current = swiper;

        }}
        onSlideChange={() => {
          debugger;
          if (swiper_ref.current) {
            if(display_console || false) console.log('slide activeIndex', swiper_ref.current.activeIndex);
            if(display_console || true) console.log('slide realIndex', swiper_ref.current.realIndex);
            if(display_console || false) console.log('slide previousIndex', swiper_ref.current.previousIndex);
            setActiveIndex(swiper_ref.current.realIndex);
          }
        }}
      >
        {inner}
      </Swiper>
    </Exporter>
  ) : (
    <>
      {inner}
    </>
  );

  const h_cont = htmlContent(data);

  return (
    <div className="About WWA WhoWeAre">
      <div dangerouslySetInnerHTML={{ __html: h_cont }} />
      {services_wrapper}
      {content_wrapper}
    </div>
  );
}

export default WWA
