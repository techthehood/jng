// import {} from 'react'

const Head = () => {
  return (
    <>
      {/*<!--Header Start-->*/}
      <header className="cursor-light">

        {/*<!--Navigation-->*/}
        <nav className="navbar navbar-top-default navbar-expand-lg navbar-gradient nav-icon alt-font">
          <div className="container">
            <a href="../index-agency.html" title="Logo" className="logo link">
              {/*<!--Logo Default-->*/}
              <img src="img/logo-white.png" alt="logo" className="logo-dark default"/>
            </a>


            {/*<!--Nav Links-->*/}
            <div className="collapse navbar-collapse" id="agency">
              <div className="navbar-nav ml-auto">
                <a className="nav-link link" href="../index-agency.html#home">Home</a>
                <a className="nav-link link" href="../index-agency.html#about-us">About Us</a>
                <a className="nav-link link" href="../index-agency.html#portfolio">Our Work</a>
                <a className="nav-link link" href="../index-agency.html#clients">Clients</a>
                <a className="nav-link link active" href="../index-agency.html#blog">Our Blog</a>
                <a className="nav-link link" href="../index-agency.html#contact">Contact Us</a>
                <span className="menu-line"><i className="fa fa-angle-down" aria-hidden="true"></i></span>
              </div>
                {/* previosly javascript:void(0); */}
              <a data-fancybox data-animation-duration="500" data-src="#animatedModal" href="#"
                className="btn btn-medium btn-rounded btn-transparent-white btn-hvr-white ml-3">Get A Quote
                <div className="btn-hvr-setting">
                  <ul className="btn-hvr-setting-inner">
                    <li className="btn-hvr-effect"></li>
                    <li className="btn-hvr-effect"></li>
                    <li className="btn-hvr-effect"></li>
                    <li className="btn-hvr-effect"></li>
                  </ul>
                </div>
              </a>
            </div>

            {/*<!--Menu Button-->*/}
            <button className="fullnav-toggler link" type="button" id="full-menu-1">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>

            {/*<!--Slider Social-->*/}
            <div className="slider-social">
              <ul className="list-unstyled">
                <li className="animated-wrap"><a className="animated-element" href="#"><i className="fab fa-facebook-f"
                      aria-hidden="true"></i></a></li>
                <li className="animated-wrap"><a className="animated-element" href="#"><i className="fab fa-instagram"
                      aria-hidden="true"></i></a></li>
                <li className="animated-wrap"><a className="animated-element" href="#"><i className="fab fa-twitter"
                      aria-hidden="true"></i></a></li>
              </ul>
            </div>

          </div>
        </nav>

        {/*<!--Full menu-->*/}
        <div className="nav-holder alt style-2 alt-font">

          {/*<!--Menu Button-->*/}
          <button className="fullnav-close link" type="button">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>

          <div className="container">
            <div className="shape-left">
              <nav className="navbar full-menu-navigation left">
                <ul className="list-unstyled">
                  <li><a href="../index-agency.html#home" className="link">
                      <span className="anchor-circle"></span>
                      <span className="anchor-text">Home</span>
                    </a></li>
                  <li><a href="../index-agency.html#about-us" className="link">
                      <span className="anchor-circle"></span>
                      <span className="anchor-text">About</span>
                    </a></li>
                  <li><a href="../index-agency.html#portfolio" className="link">
                      <span className="anchor-circle"></span>
                      <span className="anchor-text">Work</span>
                    </a></li>
                  <li><a href="../index-agency.html#clients" className="link">
                      <span className="anchor-circle"></span>
                      <span className="anchor-text">Clients</span>
                    </a></li>
                  <li><a href="../index-agency.html#blog" className="link">
                      <span className="anchor-circle"></span>
                      <span className="anchor-text">Blog</span>
                    </a></li>
                  <li><a href="../index-agency.html#contact" className="link">
                      <span className="anchor-circle"></span>
                      <span className="anchor-text">Contact</span>
                    </a></li>
                </ul>
                <span className="full-menu-dot" style={{transform: "scale(0)"}}></span>
              </nav>
              <img src="img/shape-8.png" alt="shape"/>
            </div>
            <div className="shape-right">
              <div className="full-menu-detail hide-cursor">
                <h6 className="title">Press Contact</h6>
                <p><i className="fas fa-user-alt"></i>David Warrior</p>
                <p><i className="fas fa-mobile-alt"></i>+97 53 49 24 78 36</p>
                <p><i className="fas fa-envelope"></i>contact@megaone.com</p>
              </div>
              <img src="img/shape-7.png" alt="shape"/>
            </div>
          </div>
        </div>

        {/*<!--Get Quote Model Popup-->*/}
        <div id="animatedModal" className="animated-modal hidden quote-content">
          {/*<!--Heading-->*/}
          <div className="heading-area pb-2 mx-570">
            <span className="sub-title">We are megaone company</span>
            <h2 className="title mt-2">Lets start your <span className="alt-color js-rotating">project, website</span></h2>
          </div>
          {/*<!--Contact Form-->*/}
          <form className="contact-form">
            <div className="row">
              {/*<!--Result-->*/}
              <div className="col-12" id="quote_result"></div>

              {/*<!--Left Column-->*/}
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Name" required="" id="quote_name" name="quote_name"/>
                </div>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Contact #" required="" id="quote_contact"
                    name="quote_contact"/>
                </div>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Project type" required="" id="quote_type"
                    name="quote_type"/>
                </div>
              </div>

              {/*<!--Right Column-->*/}
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" type="email" placeholder="Email" required="" id="quote_email"
                    name="quote_email"/>
                </div>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="City / Country" required="" id="quote_address"
                    name="quote_address"/>
                </div>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Budget" required="" id="quote_budget"
                    name="quote_budget"/>
                </div>
              </div>

              {/*<!--Full Column-->*/}
              <div className="col-md-12">
                <div className="form-group">
                  <textarea className="form-control" placeholder="Please explain your project in detail." id="quote_message"
                    name="quote_message"></textarea>
                </div>
              </div>

              {/*<!--Button-->*/}
              <div className="col-md-12">

                <div className="form-check">
                  <label className="checkbox-lable">Contact by phone ins preffered
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                  </label>
                </div>

                <a href="#" id="quote_submit_btn"
                  className="btn btn-large btn-rounded btn-blue btn-hvr-pink">Send Message
                  <div className="btn-hvr-setting">
                    <ul className="btn-hvr-setting-inner">
                      <li className="btn-hvr-effect"></li>
                      <li className="btn-hvr-effect"></li>
                      <li className="btn-hvr-effect"></li>
                      <li className="btn-hvr-effect"></li>
                    </ul>
                  </div>
                </a>
              </div>

            </div>
          </form>
        </div>

      </header>
      {/*<!--Header End-->*/} 
    </>
  )
}

export default Head