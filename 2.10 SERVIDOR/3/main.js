"use strict";

const button = document.querySelector(".button");
const username = document.querySelector(".inputName");

function showUser(ev) {
  ev.preventDefault();
  console.log(username.value);

  //debugger;
  fetch(`https://api.github.com/users/${username.value}`)
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector("img");
      const name = document.querySelector(".name");
      console.log(name);
      name.innerHTML = `${data.name}`;
      img.src = data.avatar_url;
    });
}

button.addEventListener("click", showUser);
