import React from 'react'

const FixedNavHtml = (props) => {

  const {
    images = {},
  } = props;

  return (
    <div className={`fixed-nav-on-scroll fixed-nav-appear d-none`}>
      <div className={`row no-gutters`}>
        <div className={`d-flex justify-content-center align-items-center`}>
          <div className={`col-9 logo-fixed-scroll`}>
            <img src={`${images.logo}`} alt={`logo`} />
          </div>
          <div className={`fixed-icon-scroll`}>
            <a href={`#`} id={`sidemenu_toggle1`}><i className={`lni lni-menu`}></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FixedNavHtml