"use strict";

const alarm = document.querySelectorAll(".btn");

function changeBackground() {
  const page = document.querySelector(".main").classList.toggle("red");
}

for (let i = 0; i < alarm.length; i++) {
  alarm[i].addEventListener("click", changeBackground);
}
