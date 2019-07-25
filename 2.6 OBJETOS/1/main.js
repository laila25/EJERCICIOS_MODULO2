"use strict";

const adalaber = {
  name: "Susana",
  age: 34,
  profession: "periodista"
};

const adalaber2 = {
  name: "Rocío",
  age: 25,
  profession: "actriz"
};

const person1 = document.querySelector(".person1");
const person2 = document.querySelector(".person2");

person1.innerHTML = `· Hola, soy ${adalaber.name}, tengo ${
  adalaber.age
} años y soy ${adalaber.profession}`;

person2.innerHTML = `· Hola, soy ${adalaber2.name}, tengo ${
  adalaber2.age
} años y soy ${adalaber2.profession}`;
