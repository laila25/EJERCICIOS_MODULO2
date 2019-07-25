"use strict";

const button = document.querySelector(".btn");

function showButton(event) {
  console.log(event);
}

button.addEventListener("click", showButton);
