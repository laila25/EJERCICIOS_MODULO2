"use strict";

//Ejercicio 1
function multi(a, b) {
  const result = a * b;
  return console.log(result);
}
multi(2, 4);
multi(2, 5);
multi(3, 8);

//Ejercicio 2
function average(a, b, c, d) {
  const result = (a + b + c + d) / 4;
  return console.log(result);
}
average(1, 2, 3, 4);
average(2, 3, 4, 5);

//Ejercicio 3
function finalPrice(a) {
  const iva = a * 0.21;
  const result = a + iva;
  return console.log(`Precio sin IVA: ${a}€, IVA: ${iva}€ y Total: ${result}€`);
}
finalPrice(10);
finalPrice(20.99);

//Ejercicio 4
function parImpar(a) {
  if (a % 2 === 0) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

/*function parImpar(a) {
  return console.log(a % 2 === 0);
}*/

parImpar(2);
parImpar(7);
parImpar(10);
