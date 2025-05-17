import React from 'react'

const WWAHtml = (props) => {

  const {
    title,
    title1,
    title2,
    title3,
    tag,
    name,
    images,
  } = props;

  return (
    <section className={`about-sec ${name}`} id={`about-sec`}>
      <svg id={`about-header-svg`} className={`separator__svg svg_top ${name}`} width={`100%`} viewBox={`0 0 100 100`} preserveAspectRatio={`none`}
        fill={`#e8d716`} version={`1.1`} xmlns={`http://www.w3.org/2000/svg`}>
        <path d={`M 100 100 V 10 L 0 100`} />
        <path d={`M 30 73 L 100 18 V 10 Z`} fill={`#e8d716`} strokeWidth={`0`} />
      </svg>
      <div className={`container`}>
        <div className={`row about-box`}>
          {/* <!-- Heading Area--> */}
          <div className={`service-title slim`}>
            <h1>{title}</h1>
            <h1>{title1} <span>{title2}</span> {title3}</h1>
          </div>
          <div className={`col-lg-6 wow fadeInUp details-col`}>
            <div className={`service-details`}>
              <div className={`service-title wide`}>
                <h1>{title}</h1>
                <h1>{title1} <span>{title2}</span> {title3}</h1>
              </div>
              <div className={`service-details-inner ${tag}`}>
                {/* inject details here */}
              </div>
            </div>
          </div>

          {/* <!-- Features Box--> */}
          <div className={`col-lg-6 card-col`}>
            <div className={`services-area-width-manage`}>
              <div className={`row no-gutters services-area ${tag}`}>
                {/* inject slider data here */}
              </div>
            </div>
          </div>

        </div>
      </div>
      <svg id={`banner_svg`} className={`separator__svg svg_bot ${name}`} width={`100%`} viewBox={`0 0 100 100`} preserveAspectRatio={`none`}
        fill={`#ffffff`} version={`1.1`} xmlns={`http://www.w3.org/2000/svg`}>
        <path d={`M 100 100 V 10 L 0 100`} />
        <path d={`M 30 73 L 100 18 V 10 Z`} fill={`#ffffff`} strokeWidth={`0`} />
        { images.active && <img src={`${images.pot}`} className={`wow slideInLeft`} data-wow-delay={`1s`} alt={`plant`} /> }
      </svg>
    </section>
  )
}

export default WWAHtml