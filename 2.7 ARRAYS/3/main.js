"use strict";

let acc = 0;
let X = 0; //acumulador

for (let i = 0; i < 11; i++) {
  X = acc += 2; //(acc += 2) => acc = acc + 2
  console.log(X);
}

console.log(X);
