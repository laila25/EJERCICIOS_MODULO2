"use strict";
debugger;

const content = document.querySelector(".main");

function changeBackground() {
  if (window.scrollY < 250) {
    content.classList.add("green");
    content.classList.remove("blue");
  } else {
    content.classList.remove("green");
    content.classList.add("blue");
  }
}

window.addEventListener("scroll", changeBackground);

//window.onscroll = changeBackground;

/*function changeBackground() {
  if (window.scrollY > 250) {
    content.classList.remove("main");
    content.classList.add("blue");
  }
}*/
