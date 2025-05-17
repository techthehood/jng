import React from 'react'

const ContactHtml = (props) => {

  const {
    title,
    sub,
    address,
    phone,
    email,
  } = props;

  return (
    <section className={`contact-sec`} id={`contact-sec`}  data-comp={`Contact`}>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-12 col-lg-7 contact-left`}></div>
          <div className={`col-12 col-lg-5 text-center text-lg-left position-relative`}>
            <div className={`contact-details wow fadeInRight`}>
              <h4 className={`heading`}>{title}</h4>
              <p className={`text`}>
                {sub}
              </p>
              <ul>
                <li><i aria-hidden={`true`} className={`fas fa-map-marker-alt`}></i> {address} </li>
                <li><i aria-hidden={`true`} className={`fas fa-phone-volume`}></i>
                  <span>{phone}</span>
                </li>
                <li><i aria-hidden={`true`} className={`fas fa-paper-plane`}></i>{email}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHtml