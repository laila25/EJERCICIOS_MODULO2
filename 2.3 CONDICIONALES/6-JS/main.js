"use strict";

let avocados;
const avocadoPrice = 1.5;
const money = 33;

/*if (money >= avocadoPrice) {
  console.log((avocados = money / avocadoPrice));
} else {
  console.log((avocados = 0));
}
*/

money >= avocadoPrice
  ? console.log((avocados = money / avocadoPrice))
  : console.log((avocados = 0));
