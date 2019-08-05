"use strict";

const movies = document.querySelectorAll(".input");
const text = document.querySelector(".text");
const form = document.querySelector(".form");

function getMovies(ev) {
  ev.preventDefault();
  text.innerHTML = "";
  for (const movie of movies) {
    text.innerHTML += `¡A mí también me encantó ${movie.value}!<br />`;
  }
}

form.addEventListener("submit", getMovies);
