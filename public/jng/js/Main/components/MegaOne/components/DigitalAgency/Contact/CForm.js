import React, {useEffect, useRef} from 'react';

const dev_mode = false;

const CForm = () => {

  let disabled = true;

  const cForm_ref = useRef();

  useEffect(() => {
    //effect
    cForm_ref.current.addEventListener("submit", (e) => {
      e.preventDefault();

      // console.log("submit clicked");  

      let formData = {
        from: from.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
        format: "text"
      }

      // console.log(formData);

      let xhr = new XMLHttpRequest();
      xhr.open('POST', '/api/mail/sendMail');
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.onload = () => {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
          alert('Email sent');

          if (dev_mode) {
            // do nothing
          } else {
            from.value = "";
            email.value = "";
            subject.value = "";
            message.value = "";
          }
        } else {
          alert('An error occured!');
        }
      }

      xhr.send(JSON.stringify(formData));
    })
    return () => {
      //cleanup
    }
  }, [])

  let attrib = {}
  if(disabled) attrib.disabled = true;

  return (
    <>
      <h4 className="heading text-center text-lg-left">GET IN TOUCH</h4>
      <form className="row contact-form wow fadeInLeft" ref={cForm_ref} id="contact-form-data">
        <div className="col-sm-12" id="result"></div>
        <div className="col-12 col-md-5">
          <input id="from" type="text" name="userName" placeholder="Your Name" className="form-control" {...attrib}/>
          <input id="email" type="email" name="userEmail" placeholder="Email Address *" className="form-control" {...attrib}/>
          <input id="subject" type="text" name="userSubject" placeholder="Subject" className="form-control" {...attrib}/>
        </div>
        <div className="col-12 col-md-7">
          <textarea id="message" className="form-control" name="userMessage" rows="6" placeholder="Your Message" {...attrib}></textarea>
        </div>
        <div className="col-12">
          {/* <a href="javascript:void(0);" className="btn yellow-and-black-btn rounded-pill w-100 contact_btn"><i
              className="fa fa-spinner fa-spin mr-2 d-none" aria-hidden="true"></i> <b>Send Message</b>
          </a> */}
          <input type="submit" className="btn yellow-and-black-btn rounded-pill w-100 contact_btn submit"  value="Send Message" {...attrib}/>
        </div>
      </form>
    </>
  )
}

export default CForm


{/* return (
  <div className="cform_cont form-container w3-card">
    <form className="contact-form" ref={cForm_ref}>
      <h2>CONTACT</h2>
      <input type="text" id="from" placeholder="Full name" /><br/>
      <input type="email" id="email" placeholder="Email" /><br/>
      <input type="test" id="subject" placeholder="Subject" /><br/>
      <textarea  id="message" placeholder="message" cols="30" rows="10"></textarea><br/>
      <input type="submit" className="submit" value="Send Message" /><br/>
    </form>
  </div>
  ) */}