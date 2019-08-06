"use strict";
let counter = 0;

const time = document.querySelector(".time");
const div = document.querySelector(".div");
const div2 = document.querySelector(".div2");
const image = document.createElement(`img`);

const incrementAndShowCounter = () => {
  image.setAttribute("src", "./uva.png");
  image.setAttribute("style", "width: 5%");
  counter++;
  div.appendChild(image);
  time.innerHTML = counter;
};

function resetHtml() {
  time.remove();
  div.remove();
  image.setAttribute("src", "./confeti.png");
  image.setAttribute("style", "width: 50%");
  div2.appendChild(image);
}

setInterval(incrementAndShowCounter, 1000);
setInterval(resetHtml, 13000);
