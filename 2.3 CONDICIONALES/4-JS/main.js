"use strict";

const dogAge = 3;

if (dogAge <= 1) {
  console.log(
    `${dogAge} año de perro equivale a ${dogAge * 15} años de humano`
  );
} else if (dogAge > 1 && dogAge <= 2) {
  console.log(`${dogAge} año de perro equivale a ${dogAge * 9} años de humano`);
} else if (dogAge > 2) {
  console.log(`${dogAge} año de perro equivale a ${dogAge * 5} años de humano`);
}
