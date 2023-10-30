const startBtn = document.querySelector(".start");
const stoptBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stoptBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

let hr = "0" + 0;
let min = "0" + 0;
let sec = "0" + 0;
let ms = "0" + 0;

let stratTimer;

function start() {
  startBtn.classList.add("active");

  stoptBtn.classList.remove("active2");
  stratTimer = setInterval(() => {
    ms++;

    ms = ms < 10 ? "0" + ms : ms;

    if (ms === 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "0" + 0;
    }
    if (sec === 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    }
    if (min === 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "0" + 0;
    }

    putValue();
  }, 10);
}

function stop() {
  startBtn.classList.remove("active");
  stoptBtn.classList.add("active2");

  clearInterval(stratTimer);
}

function reset() {
  startBtn.classList.remove("active");
  stoptBtn.classList.remove("active2");

  clearInterval(stratTimer);
  hr = "0" + 0;
  min = "0" + 0;
  sec = "0" + 0;
  ms = "0" + 0;
  putValue();
}

function putValue() {
  let milisecond = document.querySelector(".milisecond"),
    second = document.querySelector(".second"),
    minute = document.querySelector(".minute"),
    hours = document.querySelector(".hours");

  milisecond.innerHTML = ms;
  second.innerHTML = sec;
  minute.innerHTML = min;
  hours.innerHTML = hr;
}
