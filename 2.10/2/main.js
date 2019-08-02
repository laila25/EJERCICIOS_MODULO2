"use strict";

function getDogImage() {
  fetch("https://dog.ceo/api/breed/terrier/westhighland/images/random")
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector("img");
      console.log(data);
      img.src = data.message;
      img.alt = "Un perro";
    });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);
