"use strict";

//Ejercicio 5

function getEl(a) {
  return document.querySelector(a);
}

const h1Title = getEl(".title");
const content = getEl(".content");

h1Title.innerHTML = "hola holita";
content.innerHTML = " que pacha!!!";

//Ejercicio 6

function getEl2(selector) {
  const element = document.querySelector(selector);

  //if (!result === true) si el queryselector no lo hace bien devuelve null
  //if (!!result === false) {
  if (element === null) {
    console.error(`No existe ningún elemento con clase, id o tag llamado ${a}`);
    return undefined;
  } else {
    return console.log(element.innerHTML);
  }
}

const h2 = getEl2(".title2");
//h2.innerHTML = "ya tamos aqui";
//(result.innerHTML = "ya tamos aqui")
