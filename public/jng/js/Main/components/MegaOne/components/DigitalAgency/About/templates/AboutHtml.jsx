import React from 'react'

const AboutHtml = (props) => {

  const {
    title,
    title1,
    title2,
    description,
    button,
    images,
  } = props;

  return (
  <>
  {/*<!--About Star-->*/}
  <section className={`about-sec`} id={`about-sec`} data-comp={`About`}>
    <svg id={`about-header-svg`} className={`separator__svg`} width={`100%`} viewBox={`0 0 100 100`} preserveAspectRatio={`none`}
      fill={`#e8d716`} version={`1.1`} xmlns={`http://www.w3.org/2000/svg`}>
      <path d={`M 100 100 V 10 L 0 100`} />
      <path d={`M 30 73 L 100 18 V 10 Z`} fill={`#e8d716`} strokeWidth={`0`} />
    </svg>
    <div className={`container`}>
      <div className={`row`}>
        {/* <!-- Heading Area--> */}
        <div className={`col-lg-5 wow fadeInUp`}>
          <div className={`service-details`}>
            <h1>{title}</h1>
            <h1><span>{title1}</span>{title2}</h1>
            <p>{description}</p>
            <a href={`#`} className={`btn btn-large btn-rounded btn-black-white-background mr-2 mt-2`}>{button}</a>
          </div>
        </div>

        {/* <!-- Features Box--> */}
        <div className={`col-lg-7`}>
          <div className={`services-area-width-manage`}>
            <div className={`row no-gutters services-area`}>
              <div className={`col-12 col-md-6 services text-center`}>
                <div className={`service-card wow fadeInRight`}>
                  <div className={`icon-holder`}>
                    <i className={`lni lni-briefcase`}></i>
                  </div>
                  <h4 className={`card-heading`}>Make Business</h4>
                </div>
              </div>
              <div className={`col-12 col-md-6 services text-center`}>
                <div className={`service-card wow fadeInRight`}>
                  <div className={`icon-holder`}>
                    <i className={`lni lni-bulb`}></i>
                  </div>
                  <h4 className={`card-heading`}>Agency Ideas</h4>
                </div>
              </div>
              <div className={`col-12 col-md-6 services text-center`}>
                <div className={`service-card wow fadeInRight`} data-wow-delay={`.5s`}>
                  <div className={`icon-holder`}>
                    <i className={`lni lni-heart`}></i>
                  </div>
                  <h4 className={`card-heading`}>Our Hardwork</h4>
                </div>
              </div>
              <div className={`col-12 col-md-6 services text-center`}>
                <div className={`service-card wow fadeInRight`} data-wow-delay={`.5s`}>
                  <div className={`icon-holder`}>
                    <i className={`lni lni-wallet`}></i>
                  </div>
                  <h4 className={`card-heading`}>Make Money</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <svg id={`banner_svg`} className={`separator__svg`} width={`100%`} viewBox={`0 0 100 100`} preserveAspectRatio={`none`}
      fill={`#ffffff`} version={`1.1`} xmlns={`http://www.w3.org/2000/svg`}>
      <path d={`M 100 100 V 10 L 0 100`} />
      <path d={`M 30 73 L 100 18 V 10 Z`} fill={`#ffffff`} strokeWidth={`0`} />
      <img src={`${images.pot}`} className={`wow slideInLeft`} data-wow-delay={`1s`} alt={`plant`}/>
    </svg>
  </section>
  {/* <!--About End--> */}
  </>
  )
}

export default AboutHtml