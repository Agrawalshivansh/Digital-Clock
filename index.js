function CurrTime() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var seconds = date.getSeconds();
  var session = "AM";

  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // var time = h + ":" + m + ":" + s + " " + session;  or
  var time = `${hour} : ${minute} : ${seconds} ${session}`;

  document.getElementById("DigitalClock").innerText = time;
  document.getElementById("DigitalClock").textContent = time;

  setTimeout(CurrTime, 1000);
}

CurrTime();
