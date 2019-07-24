"use strict";

const button = document.querySelector(".btn");
const button2 = document.querySelector(".btn-2");

function changeBackground(event) {
  const selected = event.currentTarget;
  selected.classList.toggle("btn-red");
}

button.addEventListener("click", changeBackground);
button2.addEventListener("click", changeBackground);
