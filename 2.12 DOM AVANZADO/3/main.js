"use strict";

const users = [
  {
    name: "Laura",
    surname: "Sanchez",
    tel: 12345678
  },
  {
    name: "Sonia",
    surname: "Martinez",
    tel: 87654321
  },
  {
    name: "Miriam",
    surname: "gutierrez",
    tel: 45678123
  }
];

const select = document.querySelector(".select");
const inputs = document.querySelectorAll(".input");

function autocompleteUser() {
  for (let i = 0; i < users.length; i++) {
    if (select.value === users[i].name) {
      inputs[0].value = users[i].name;
      inputs[1].value = users[i].surname;
      inputs[2].value = users[i].tel;
    }
  }
}

select.addEventListener("change", autocompleteUser);
