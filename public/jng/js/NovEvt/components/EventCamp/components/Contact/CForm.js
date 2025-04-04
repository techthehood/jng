import React, {useEffect, useRef} from 'react';
require("./CForm.scss");
const dev_mode = false;

const CForm = () => {

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

  return (
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
  )
}

export default CForm
