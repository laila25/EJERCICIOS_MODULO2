"use strict";
let counter = 0;
let temp;

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
  if (counter > 12) {
    clearInterval(temp);
    time.innerHTML = "";
    image.setAttribute("src", "./confeti.png");
    image.setAttribute("style", "width: 50%");
  }
};

temp = setInterval(incrementAndShowCounter, 1000);
