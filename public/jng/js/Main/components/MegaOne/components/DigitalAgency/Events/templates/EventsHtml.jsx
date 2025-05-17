import React from 'react'

const EventsHtml = (props) => {

  const {
    data = [],
    mokup,
    pot,
  } = props;

  const blog_content = data.map((item, ndx) => { 

    const {
      active,
      alias,
      text1,
      text2,
      text3,
      sub,
      sub2,
      sub3,
      p,
      button = {},
    } = item;

    if(!active) return;

    return (
      <div className={`slider-slide`} key={`evt_blog_${ndx}`}>
        <div className={`custom_head ${alias}`}></div>
        <h1>{text1}</h1>
        <h1><span>{text2}</span> {text3}</h1>
        <h5 className={`sub1`}>{sub}</h5>
          {sub2 && <h5 className={`sub2`}>{sub2}</h5>}
          {sub3 && <h5 className={`sub3`}>{sub3}</h5>}
        <p>{p}</p>
        <div className={`custom_cont ${alias}`}></div>
          {button.active && <a href={`${button.href}`} className={`btn btn-large btn-rounded white-tran-yellow-btn`} target={`${target}`}>{button.text}</a>}
        <div className={`custom_foot ${alias}`}></div>
      </div>
    )
  });// blog_content

  const blog_img = data.map((val, ndx) => { 

    const {
      active,
      img,
    } = val;

    if(!active) return;
    
    return (
      <div className={`img-slide`} key={`evt_blog_img_${ndx}`}>
        <img src={`${img}`} className={`mockup-img`} />
      </div>
    );
  });// blog_img

  return (
    <section className={`lastest-blog`} id={`lastest-blog`}  data-comp={`Events`}>
      <svg className={`separator__svg`} id={`blog-header-svg`} width={`100%`} height={`100`} viewBox={`0 0 100 100`}
        preserveAspectRatio={`none`} fill={`#fff`} version={`1.1`} xmlns={`http://www.w3.org/2000/svg`}>
        <path d={`M 100 100 V 10 L 0 100`} />
        <path d={`M 30 73 L 100 18 V 10 Z`} fill={`#fff`} strokeWidth={`0`} />
      </svg>
      <div className={`container position-relative`}>
        <div className={`row`}>
          <div className={`col-12 col-md-12 col-lg-6`}>
            <div className={`blog-content slider-detail wow fadeInDown`}>
              {blog_content}
            </div>
          </div>
          <div className={`col-12 col-md-12 col-lg-6`}>
            <div className={`blog-img wow fadeInUp`}>
              {mokup.active && <img src={`${mokup.img}`} />}
              <div className={`slider-img`}>
                {blog_img}
              </div>
            </div>
          </div>
        </div>
        <a className='circle' id={`blog-circle-left`}><i className={`lni lni-chevron-left`}></i></a>
        <a className='circle' id={`blog-circle-right`}><i className={`lni lni-chevron-right`}></i></a>
      </div>

      <svg className={`separator__svg`} id={`blog-foot-svg`} width={`100%`} height={`100`} viewBox={`0 0 100 100`}
        preserveAspectRatio={`none`} fill={`#fff`} version={`1.1`} xmlns={`http://www.w3.org/2000/svg`}>
        <path d={`M 100 100 V 10 L 0 100`} />
        <path d={`M 30 73 L 100 18 V 10 Z`} fill={`#fff`} strokeWidth={`0`} />
        <img src={`${pot}`} alt={`plant`} className={`pot-2 wow slideInLeft`} data-wow-delay={`.5s`} />
      </svg>
    </section>
  )
}

export default EventsHtml