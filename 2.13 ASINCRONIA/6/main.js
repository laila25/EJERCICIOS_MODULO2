"use strict";

const timer = document.querySelector(".timer");
const start = document.querySelector(".btn-start");
const stop = document.querySelector(".btn-stop");
let counter = 0;
let temp;

function incrementCounter() {
  counter++;
  let cociente = Math.trunc(counter / 60);
  if (cociente < 10) {
    if (counter < 10) {
      timer.innerHTML = `0${cociente}:0${counter - 60 * cociente}`;
    } else {
      timer.innerHTML = `0${cociente}:${counter - 60 * cociente}`;
    }
  } else {
    if (counter < 10) {
      timer.innerHTML = `${cociente}:0${counter - 60 * cociente}`;
    } else {
      timer.innerHTML = `${cociente}:${counter - 60 * cociente}`;
    }
  }
}

function startTimer() {
  temp = setInterval(incrementCounter, 100);
}

function stopTimer() {
  clearInterval(temp);
  counter = 0;
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
