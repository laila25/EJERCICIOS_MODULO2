"use strict";

const modal = document.querySelector(".modal");
//const message = document.querySelector(".message");
//let counter = 0;

function showModal() {
  //counter++;
  //message.innerHTML = `${counter}`;

  modal.classList.remove("hidden");
}

setTimeout(showModal, 15000);
