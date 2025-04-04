

// var countDownDate=new Date("November 19, 2021 11:00:00").getTime();var x=setInterval(function(){var now=new Date().getTime();var distance=countDownDate-now;var days=Math.floor(distance/(1000*60*60*24));var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));var minutes=Math.floor((distance%(1000*60*60))/(1000*60));var seconds=Math.floor((distance%(1000*60))/1000);document.getElementById("day").innerHTML=days;document.getElementById("hours").innerHTML=hours;document.getElementById("minutes").innerHTML=minutes;document.getElementById("seconds").innerHTML=seconds;if(distance<0){clearInterval(x);document.getElementById("demo").innerHTML="EXPIRED";}},1000);

var countDownDate=new Date("November 19, 2021 11:00:00").getTime();// works

let wipe = true;

const setValue = (val, zero = false) => {
  return zero ? 0 : val > 0 ? val : 0;
}

var x = setInterval(function () {

  var now = new Date().getTime();

  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("day").innerHTML = setValue(days,wipe);
  document.getElementById("hours").innerHTML = setValue(hours,wipe);
  document.getElementById("minutes").innerHTML = setValue(minutes,wipe);
  document.getElementById("seconds").innerHTML = setValue(seconds,wipe);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// May 5, 2018 15:37:25