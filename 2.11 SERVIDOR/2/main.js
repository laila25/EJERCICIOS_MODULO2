"use strict";

const input = document.querySelector(".input");
const button = document.querySelector(".button");

function listPeople(ev) {
  ev.preventDefault();
  const list = document.querySelector(".list");
  list.innerHTML = "";

  fetch(`https://swapi.co/api/people/?search=${input.value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      //debugger;

      for (let i = 0; i < data.results.length; i++) {
        list.innerHTML = `<li>${data.results[i].name}, ${
          data.results[i].gender
        } </li>`;
      }
    });
}

//list.innerHTML += es igual que list.innerHTML = list.innerHTML + ``

button.addEventListener("click", listPeople);
