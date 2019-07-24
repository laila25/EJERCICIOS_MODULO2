"use strict";
//debugger;

const text = document.querySelector(".text");
const input = document.querySelector(".input");

function upgradeText(event) {
  const inputValue = event.currentTarget;
  text.innerHTML = `${inputValue.value}`;
}

input.addEventListener("keyup", upgradeText);
