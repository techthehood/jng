import { useEffect } from "react";

import "./Countdown.scss";

import htmlContent from './Countdown.hbs';// works as template fn

const Countdown = (props) => {

  useEffect(()=>{

      const countDownDate = new Date("November 19, 2022 11:00:00").getTime();// works
      
      console.debug(`[Countdown] running countdown`);
      
      const setValue = (val, zero = false) => {
        return zero ? 0 : val > 0 ? val : 0;
      }
      
      const x = setInterval(function () {
        
        let wipe = true;
        let now = new Date().getTime();

        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);


        document.getElementById("day").innerHTML = setValue(days, wipe);
        document.getElementById("hours").innerHTML = setValue(hours, wipe);
        document.getElementById("minutes").innerHTML = setValue(minutes, wipe);
        document.getElementById("seconds").innerHTML = setValue(seconds, wipe);

        if (distance < 0) {
          clearInterval(x);
          try {
            document.getElementById("demo").innerHTML = "EXPIRED";
          } catch (error) {
            // do nothing
          }
        }
      }, 1000);

      return () => {
        clearInterval(x);
      }
  },[]);

  const {
    data
  } = props;

  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: htmlContent(data) }} />
    </div>
  );
}

export default Countdown
