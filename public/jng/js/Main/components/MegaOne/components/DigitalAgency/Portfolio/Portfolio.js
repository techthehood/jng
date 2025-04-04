import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";

import { useInView } from "react-intersection-observer";
import Exporter from "../Exporter";

import "./Portfolio.scss";

import htmlContent from './Portfolio.hbs';// works as template fn

import "../../../lib/vendor/css/cubeportfolio.min.css";
import "../../../lib/vendor/js/jquery.cubeportfolio.min.js";
// https://www.ehasa.org/assets/plugins/cube-portfolio/documentation/

const display_console = true

const Portfolio = (props) => {

  const {
    data = {},
  } = props;

  const [init, setInit] = useState(false);

  const [limit, setLimit] = useState(data.limit || props.limit || 10);

  const count = useRef(1);

  let list = [...data.images.july22.slice(0, limit), ...data.images.nov21.slice(0, limit), ...data.images.july21.slice(0, limit),];

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .5,
    triggerOnce: true,
    onChange: (inView, entry) => {
      if(display_console || false) console.log('[Portfolio] Inview:', inView);
      if(inView) setInit(true);
    },
  });

  const initialize = () => { 

    console.log(`[Portfolio] init is running`)

    // $('#js-grid-mosaic').cubeportfolio('destroy');

    $('#js-grid-mosaic').cubeportfolio({
        filters: '#js-filters-mosaic',
        layoutMode: 'grid',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 4,
        }, {
            width: 1100,
            cols: 4,
        }, {
            width: 700,// 768 - this doesn't use accurate breakpoints - 700 may be closer to 768
            cols: 3,// 1
        }, {
            width: 480,
            cols: 2,
            options: {
                gapHorizontal: 60
            }
        }],
        defaultFilter: '*',
        animationType: 'fadeOut',
        gapHorizontal: 50,
        gapVertical: 50,
        gridAdjustment: 'responsive',
        caption: 'zoom',

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: "#js-loadMore-lightbox-gallery",
                action: "click",
                loadItems: 5,
            }
        }

    })
      .on('initComplete.cbp', function () {
          // your functionality
          var $this = $(this);
          if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
              $("#js-loadMore-lightbox-gallery").addClass("active");
          } else {
              $("#js-loadMore-lightbox-gallery").removeClass("active");
          }
          $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
              $(this).removeClass("even");

              console.log();
              var val = index + 1;
              if ($(this).css('left') !== "0px") {
                  $(this).addClass("even");

              }
          });
      })
      .on('onAfterLoadMore.cbp', function () {
          // your functionality
          var $this = $(this);
          $("#js-loadMore-lightbox-gallery a").addClass("d-none");
          $("#js-loadMore-lightbox-gallery").addClass("active-outer");
          $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
              $(this).removeClass("even");
              console.log();
              var val = index + 1;
              if ($(this).css('left') !== "0px") {
                  $(this).addClass("even");
              }
          });
      })
      .on('filterComplete.cbp', function () {
          // your functionality
          var $this = $(this);
          if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
              $("#js-loadMore-lightbox-gallery").addClass("active");
              $("#js-loadMore-lightbox-gallery").removeClass("d-none");
          } else {
              $("#js-loadMore-lightbox-gallery").removeClass("active");
              $("#js-loadMore-lightbox-gallery").addClass("d-none");
          }
          $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
              $(this).removeClass("even");
              var val = index + 1;
              if ($(this).css('left') !== "0px") {
                  $(this).addClass("even");
              }
          });
      });


   }

   const prep_list = (lst) => { 
    return lst.map((entry, ndx) => { 
        let iUN = Math.round(Math.random() * 10000);
        return entry.active ? (
          <div className={`cbp-item ${entry.tags}`} key={`profile_el_${iUN}_${ndx}`}>
            <a href={entry.link} className="cbp-caption cbp-lightbox"
              data-title={entry.title}>
              <div className="cbp-caption-defaultWrap">
                <img src={entry.image} alt="img" />
              </div>
              <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                <div className="portfolio-inner-content">
                  <span></span>
                  <span></span>
                </div>
                <div className="hover-text">
                  <h4 className="p-hover-title">{entry.hov_title}</h4>
                  <p className="p-hover-des">{entry.hov_desc}</p>
                </div>
              </div>
            </a>
          </div>
        ) : null;
      });
   };

   const prep_list_str = (lst) => { 
    return lst.map((entry, ndx) => { 
        let l_el;
        let iUN = Math.round(Math.random() * 10000);
       if(entry.active){
         
         l_el = `<div class="cbp-item ${entry.tags}" key="profile_el_${iUN}_${ndx}" >`
         + `<a href="${entry.link}" class="cbp-caption cbp-lightbox"`
         + `data-title="${entry.title}">`
         + `<div class="cbp-caption-defaultWrap">`
         + `<img src="${entry.image}" alt="img" />`
         + `</div>`
         + `<div class="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">`
         + `<div class="portfolio-inner-content">`
         + `<span></span>`
         + `<span></span>`
         + `</div>`
         + `<div class="hover-text">`
         + `<h4 class="p-hover-title">${entry.hov_title}</h4>`
         + `<p class="p-hover-des">${entry.hov_desc}</p>`
         + `</div>`
         + `</div>`
         + `</a>`
         + `</div>`;
       } else {
        l_el = null;
       }
       return l_el;
      });
   };

  const update_view = () => { 
    let counter = count.current;
    let s1 = limit * counter;// 10
    let s2 = limit * (counter + 1);// 20

    let new_list = [...data.images.july22.slice(s1, s2),  ...data.images.nov21.slice(s1, s2), ...data.images.july21.slice(s1, s2),];
    let new_lObj = prep_list_str(new_list);// NOTE: appended items have to be in the for of a string
    let new_lStr = new_lObj.join("");

      debugger;

      $('#js-grid-mosaic').cubeportfolio('appendItems',new_lStr);
    // increase the counter
    count.current = counter + 1;
  }

  useEffect(() => {
    
    if(init){
      initialize();
      let load_more = document.querySelector('.portfolio-load-more-btn');
      load_more.addEventListener('click', (e) => { 
        // setCounter(prev => prev + 1);
          update_view();
       });
    }

    return () => {
      
    }
  }, [init])

  
  

  const h_cont = htmlContent(data);

  let img_els = prep_list(list);

  return (
    <div className="Portfolio" ref={ref}>
      <div dangerouslySetInnerHTML={{ __html: h_cont }} />
      {inView ? (
        <Exporter {...{ home: ".portfolio-js-grid-mosaic", delay: 1 }}>
          {img_els}
        </Exporter>
      ) : null}
    </div>
  );
}

export default Portfolio