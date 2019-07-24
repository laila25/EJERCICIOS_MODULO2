"use strict";

function getEl(selector) {
  return document.querySelector(selector);
}

function parImpar(a) {
  if (a % 2 === 0) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

const text = getEl(".text");
const pText = parseInt(text.innerHTML);

parImpar(pText);

function parImparResult() {
  if (parImpar === true) {
    return console.log(`este número es PAR: ${pText}`);
  } else {
    return console.log(`este número es IMPAR: ${pText}`);
  }
}

parImparResult();
