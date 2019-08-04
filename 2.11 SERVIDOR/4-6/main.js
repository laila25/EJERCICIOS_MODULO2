"use strict";

const form = document.querySelector(".form");
const nameInput = document.querySelector(".input1");
const surnameInput = document.querySelector(".input2");

const getFromLocalStorage = () => {
  const userData = JSON.parse(localStorage.getItem("info"));
  nameInput.value = userData.name;
  surnameInput.value = userData.surname;
};

const handleInput = () =>
  //function handleInput()
  {
    const data = {
      name: nameInput.value,
      surname: surnameInput.value
    };

    localStorage.setItem("info", JSON.stringify(data));
    localStorage.setItem("name", nameInput.Value);
  };

form.addEventListener("keyup", handleInput);

getFromLocalStorage();

/*
const input1 = document.querySelector(".input1");
const text1 = document.querySelector(".text1");

const input2 = document.querySelector(".input2");
const text2 = document.querySelector(".text2");

function showName() {
  text1.innerHTML = `${input1.value}`;
  localStorage.setItem("name", input1.value);

  text2.innerHTML = `${input2.value}`;
  localStorage.setItem("apellido", input2.value);
}
input1.addEventListener("keyup", showName);
input2.addEventListener("keyup", showName);*/
