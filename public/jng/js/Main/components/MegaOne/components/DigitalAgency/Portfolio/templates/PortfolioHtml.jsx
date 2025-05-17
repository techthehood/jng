import React from 'react'

const PortfolioHtml = (props) => {

  const {
    topics,
  } = props;

  const topic_list = topics.map((topic, ndx) => { 

    const {
      active,
      home,
      label,
      filter,
    } = topic;

    if(!active) return;// what happens if i return null?

    return home ? (
      <div data-filter={`${filter}`} className={`cbp-filter-item-active cbp-filter-item`} key={`filt_${ndx}`} > {label}</div>
    ) : (
      <div data-filter={`${filter}`} className={`cbp-filter-item`} key={`filt_${ndx}`}> {label}</div>
    );
  })

  return (
    <section className={`portfolio-sec company-portfolio-section padding-top`} id={`company-portfolio-section`}  data-comp={`Portfolio`}>
      <div className={`container`}>
        <div className={`section-heading`}>
          <div className={`row`}>
            <div className={`col-md-6 wow fadeInUp text-center text-lg-left portfolio-title`} data-wow-delay={`300ms`}>
              <h1 className={`heading`}>OUR</h1>
              <h1 className={`heading`}>AMAZING PORTFOLIO</h1>
            </div>
            <div className={`col-md-12 pt-5`}>
              <div id={`js-filters-mosaic`} className={`cbp-l-filters-button wow fadeInUp text-center text-md-left portfolio-btns`}
                data-wow-delay={`350ms`}>
               {topic_list}
              </div>
              <div id={`js-grid-mosaic`} className={`cbp cbp-l-grid-mosaic portfolio-js-grid-mosaic`}></div>
              <div className={`col-12 d-flex justify-content-end align-items-center portfolio-load-more-cont`} >
                <div className={`portfolio-load-more-btn btn blue-and-black-btn rounded-pill`}>LOAD MORE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioHtml