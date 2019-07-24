"use strict";

const text = document.querySelector(".text");

function addParagraph() {
  text.innerHTML = text.innerHTML + `<p>lorem ipsum</p>`;
}

text.addEventListener("mouseover", addParagraph);
