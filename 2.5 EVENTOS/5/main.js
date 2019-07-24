"use strict";

const page = document.querySelector(".main");

function changeBackground(event) {
  if (event.key === "r") {
    page.classList.remove("purple");
    page.classList.add("red");
  } else if (event.key === "m") {
    page.classList.remove("red");
    page.classList.add("purple");
  } else if (event.key === "Escape") {
    page.classList.remove("red");
    page.classList.remove("purple");
  }
}

document.addEventListener("keyup", changeBackground);
