"use strict";

const Name = document.querySelector(".name");
const button = document.querySelector(".btn");

function hello() {
  console.log(`Hola ${Name.value}`);
}

button.addEventListener("click", hello);
