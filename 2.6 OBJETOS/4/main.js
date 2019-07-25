"use strict";

const button = document.querySelector(".btn");

function showButton(event) {
  console.log(event.currentTarget);
}

button.addEventListener("click", showButton);
