import {useRef} from 'react'

const FootHtml = (props) => {

  const {
    social,
    year,
    copy,
    url,
    creator,
  } = props;

  const iUN_ref = useRef(props.iUN || Math.round(Math.random() * 10000)),
  iUN = iUN_ref.current;

  const socials = social.map((soc, ndx) => { 

    const {
      href,
      font_icon,
    } = soc;

    return (
      <li key={`foot_li_${iUN}_${ndx}`} ><a className={`wow fadeInUp`} href={`${href}`} target={`_blank`}><i aria-hidden={`true`} className={`${font_icon}`}></i></a></li>
    )
  })

  return (
    <footer className={`footer-style-1`}  data-comp={`Foot`}>

        <div className={`container`}>
            <div className={`row align-items-center`}>
                {/* <!--Social--> */}
                <div className={`col-lg-6`}>
                    <div className={`footer-social text-center text-lg-left `}>
                        <ul className={`list-unstyled`}>
                          {socials}
                        </ul>
                    </div>
                </div>
                {/* <!--Text--> */}
                <div className={`col-lg-6 text-center text-lg-right`}>
                    <p className={`company-about fadeIn`}>© {year} {copy} <a href={`${url}`} target={`_blank`} >{creator}</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FootHtml