import React from 'react'

const HeroHtml = (props) => {

  const {
    video = {},
    image = {},
    title = {},
    title_class = "",
    promo_class = "",
    promo = {},
  } = props;

  const promo_flyer = promo.flyer.active ? (
    <div className={`fly-box`}>
      {/* {<img src={`${promo.flyer.img}`}> } */}
      <div className={`fly-img`} style={{backgroundImage: `url(${promo.flyer.img})`}}></div>
      {promo.flyer.active_btn && 
      <a href={`javascript:void(0);`}
        className={`fly-btn btn btn-large btn-rounded white-tran-black-btn`}>{promo.flyer.button}</a>
      }
    </div>
  ) : (
    <div className={`overlay-yellow-box`}></div>
  );

  const promo_text = promo.text.active && (
    <div className={`banner-right-area-content`}>
      <h2>{promo.text.h2_a}<span className={`main-bold-text`}> {promo.text.h2_b}</span></h2>
      <p>{promo.text.p}</p>
      { promo.text.active_btn && ( 
        <a href={`javascript:void(0);`}
          className={`btn btn-large btn-rounded white-tran-black-btn`}>
          ${promo.text.button}
        </a>
      )}
    </div>
  );

  return (
    <>
      { video.active && 
        <video autoPlay muted loop id={`myVideo`}>
          <source src={`${video.src}`} type={`video/mp4`} />
        </video> 
      }
      { image.active && 
        <div className={`hero-image`} style={{backgroundImage: `url(${image.src})`}}>
          {/* { <img src={`${image.src}`} /> } */}
        </div>
      }
      <div
        className={`content-inner ${title_class} d-flex justify-content-center justify-content-lg-end align-items-center text-center text-lg-right`}>
        {title.active && 
          <div className={`banner-text-left wow fadeInLeft ${title.className}`} data-depth={`0.1`}>
            <h1>{title.h1}</h1>
            <p>{title.p}</p>
            { title.active_btn && (
            <a href={`javascript:void(0);`} className={`fly-btn btn btn-large btn-rounded white-tran-black-btn`}>{title.button}</a>
            )}
          </div>
        }
      </div>
      { promo.active && 
        <div className={`${promo_class} d-flex align-items-center`}>
            { promo.flyer.active ? (
              <div className={`banner-text-right wow fadeInRight flyer ${promo.flyer.className}`} data-depth={`0.1`}>
                { promo_flyer }
                { promo_text }
              </div> 
            ) : (
              <div className={`banner-text-right wow fadeInRight`} data-depth={`0.1`}>
                { promo_flyer }
                { promo_text }
              </div> 
            )}
        </div>
      }
    </>
  )
}

export default HeroHtml