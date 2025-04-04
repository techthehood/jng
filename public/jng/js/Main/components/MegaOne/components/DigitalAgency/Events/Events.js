import React from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";

import "./Events.scss";

import htmlContent from './Events.hbs';// works as template fn
import staticContent from './Static.hbs';

const Events = (props) => {

  const {
    data = {},
    children,
  } = props;

  let has_slider = data.img_slider;

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .5,
    triggerOnce: true,
    onChange: (inView, entry) => console.log('[Events] Inview:', inView),
  });

  const h_cont = has_slider ? htmlContent(data) : staticContent(data);

  return (
    <div className="Events" ref={ref}>
      <div dangerouslySetInnerHTML={{ __html: h_cont }} />
      {children}
    </div>
  );
}

export default Events

/**
 * 
  {{#each member}}
    <div class="item text-center wow fadeInUp">
      <div class="image-holder">
        <img src="{{src}}" alt="{{alt}}">
      </div>
      <h3 class="team-name">{{name}}</h3>
    </div>
  {{/each}}
 */