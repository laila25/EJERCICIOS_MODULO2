"use strict";

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false
  }
];

const list = document.querySelector(".js-list");

function updateList() {
  const ulItem = document.querySelectorAll("li");

  for (let i = 0; i < tasks.length; i++) {
    list.innerHTML += `<li>${tasks[i].name}</li>`;

    if (tasks[i].completed === true) {
      ulItem.clas;
    }
  }
}

updateList();
