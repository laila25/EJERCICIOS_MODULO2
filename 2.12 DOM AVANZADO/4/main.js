"use strict";

const paragraph = document.querySelectorAll(".text");

for (let i = 0; i < paragraph.length; i++) {
  let heightText = paragraph[i].offsetHeight;
  paragraph[i].setAttribute("style", `height:${heightText / 3}px`);
  console.log(heightText);
}
