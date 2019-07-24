"use strict";

const content = document.querySelector(".js-item");
const title = document.querySelector(".title");
const text = document.querySelector(".text");

content.classList.add("error");

if (content.classList.contains("warning")) {
  title.innerHTML = "AVISO";
  text.innerHTML = "Tenga cuidado";
} else if (content.classList.contains("error")) {
  title.innerHTML = "ERROR";
  text.innerHTML = "Ha surgido un error";
} else if (content.classList.contains("success")) {
  title.innerHTML = "CORRECTO";
  text.innerHTML = "Los datos son correctos";
}
