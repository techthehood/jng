import React from 'react'

const TeamHtml = (props) => {

  const {
    h6,
    h2,
    members = [],
    callback,
  } = props;

  const bios = members.map((member, ndx) => { 
    let {
      src,
      alt,
      name,
      cls,
    } = member;
    return (
      <div className={`item text-center wow fadeInUp ${cls}`} key={`th_${ndx}`} onClick={callback} data-alt={`${alt}`}>
        <div className={`image-holder`}>
          <img src={`${src}`} alt={`${alt}`} />
        </div>
        <h3 className={`team-name`}>{name}</h3>
      </div>
    )
  })

  return (
    <section className={`team-section`} id={`team-section`}  data-comp={`Team`}>
      <svg className={`separator__svg`} id={`team-header-svg`} width={`100%`} viewBox={`0 0 100 100`} preserveAspectRatio={`none`}
        fill={`#fff`} version={`1.1`} xmlns={`http://www.w3.org/2000/svg`}>
        <path d={`M 100 100 V 10 L 0 100`} />
        <path d={`M 30 73 L 100 18 V 10 Z`} fill={`#fff`} strokeWidth={`0`} />
      </svg>
      <div className={`container position-relative`}>
        <div className={`row`}>
          <div className={`col-12 col-lg-12`}>
            <div className={`team-details pr-lg-5`}>
              <h6 className={`sub-title main-color`}>{h6}</h6>
              <h2 className={`title`}>{h2}</h2>
            </div>
          </div>
          <div className={`col-12 col-lg-12 team-member-area`}>
            <div className={`testimonial-team owl-carousel owl-theme`}>
              {bios}
            </div>
          </div>
        </div>
        <a className='circle' id={`team-circle-left`}><i className={`lni lni-chevron-left`}></i></a>
        <a className='circle' id={`team-circle-right`}><i className={`lni lni-chevron-right`}></i></a>
      </div>
      <svg className={`separator__svg`} id={`team-foot-svg`} width={`100%`} height={`100`} viewBox={`0 0 100 100`}
        preserveAspectRatio={`none`} fill={`#fff`} version={`1.1`} xmlns={`http://www.w3.org/2000/svg`}>
        <path d={`M 100 100 V 10 L 0 100`} />
        <path d={`M 30 73 L 100 18 V 10 Z`} fill={`#fff`} strokeWidth={`0`} />
      </svg>
    </section>
  )
}

export default TeamHtml