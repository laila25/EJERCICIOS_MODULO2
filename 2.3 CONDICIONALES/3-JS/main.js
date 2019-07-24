"use strict";

const Number = 11;

if (Number === 0) {
  console.log("El número es 0");
} else if (Number < 0) {
  console.log("El número es negativo");
} else if (Number + 2 > 13 && Number + 2 <= 20) {
  console.log("El número más 2 es: mayor 13 pero menor o igual que 20");
} else if (Number > 20 && Number < 50) {
  console.log("El número es mayor que 20 pero menor que 50");
} else {
  console.log("el número no es 123123125");
}
