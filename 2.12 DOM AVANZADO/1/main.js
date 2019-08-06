"use strict";

const numbers = [1, 2, 3];

const list = document.querySelector(".list");

for (let i = 0; i < numbers.length; i++) {
  const newLi = document.createElement(`li`);
  const newContent = document.createTextNode(numbers[i]);
  newLi.appendChild(newContent);
  list.appendChild(newLi);
}
