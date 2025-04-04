// import React from 'react'

const Banner = () => {
  return (
    <>
      {/*<!--Banner Start-->*/}
      <section className="page-title cursor-light">
        {/*<!-- Pattern Layers -->*/}
        <div className="pattern-layers">
          <div className="layer-one"></div>
          <div className="layer-two"></div>
        </div>
        <div className="auto-container">
          <h2 className="hide-cursor">Latest News</h2>
          <ul className="page-breadcrumb link">
            <li><a href="#"><span className="icon fas fa-home"></span> home</a></li>
            <li>Latest News</li>
          </ul>
        </div>
      </section>
      {/*<!--Banner End-->*/} 
    </>
  )
}

export default Banner