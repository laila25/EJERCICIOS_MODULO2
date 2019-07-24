"use strict";

const button = document.querySelector(".btn");

function changeBackground(event) {
  button.classList.toggle("btn-red");
}

button.addEventListener("click", changeBackground);
