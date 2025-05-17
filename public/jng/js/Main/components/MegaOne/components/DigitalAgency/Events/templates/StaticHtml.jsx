import React from 'react'

const StaticHtml = (props) => {

  const {
    data,
    pot,
  } = props;

  const latest_blog = data.map((item, ndx) => { 

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
      button2 = {},
      img,
      target,
    } = item;

    if(!active) return;

    return (
      <div className={`container position-relative`} key={`static_evt_blog_${ndx}`}>
        <div className={`row`}>
          <div className={`col-12 col-md-12 col-lg-6`}>
            <div className={`blog-content wow fadeInDown`}>
              <span className={`custom_head ${alias}`}></span>
              <div className={``}>
                <h1>{text1}</h1>
                <h1><span>{text2}</span> {text3}</h1>
                <h5 className={`sub1`}>{sub}</h5>
                  {sub2 && <h5 className={`sub2`}>{sub2}</h5>}
                  {sub3 && <h5 className={`sub3`}>{sub3}</h5>}
                <p>{p}</p>
                <span className={`custom_cont ${alias}`}></span>
                  {button.active && <a href={`${button.href}`} className={`btn1 btn btn-large btn-rounded white-tran-yellow-btn`} target={`${target}`}>{button.text}</a>}
                <span className={`custom_foot ${alias}`}></span>
              </div>
            </div>
          </div>
          <div className={`col-12 col-md-12 col-lg-6`}>
            <div className={`blog-img wow fadeInUp`}>
              <div className={``}>
                <div className={``}>
                  <img src={`${img}`} className={``} />
                    {button2.active && <a href={`${button2.href}`} className={`btn2 btn btn-large btn-rounded white-tran-yellow-btn`} target={`${target}`}>{button2.text}</a>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  });// latest_blog

  return (
    <section className={`lastest-blog`} id={`lastest-blog`}>
      <svg className={`separator__svg`} id={`blog-header-svg`} width={`100%`} height={`100`} viewBox={`0 0 100 100`}
        preserveAspectRatio={`none`} fill={`#fff`} version={`1.1`} xmlns={`http://www.w3.org/2000/svg`}>
        <path d={`M 100 100 V 10 L 0 100`} />
        <path d={`M 30 73 L 100 18 V 10 Z`} fill={`#fff`} strokeWidth={`0`} />
      </svg>
      {latest_blog}
      <svg className={`separator__svg`} id={`blog-foot-svg`} width={`100%`} height={`100`} viewBox={`0 0 100 100`}
        preserveAspectRatio={`none`} fill={`#fff`} version={`1.1`} xmlns={`http://www.w3.org/2000/svg`}>
        <path d={`M 100 100 V 10 L 0 100`} />
        <path d={`M 30 73 L 100 18 V 10 Z`} fill={`#fff`} strokeWidth={`0`} />
        <img src={`${pot}`} alt={`plant`} className={`pot-2 wow slideInLeft`} data-wow-delay={`.5s`} />
      </svg>
    </section>
  );
}

export default StaticHtml