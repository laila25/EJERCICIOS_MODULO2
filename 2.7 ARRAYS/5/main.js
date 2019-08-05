"use strict";

const numbers = [1, 2, 3, 4, 5];

//a: media de 5 elementos
let acc = 0;
for (let i = 0; i < numbers.length; i++) {
  acc = acc + numbers[i];
}
console.log(acc / numbers.length);

//b: añadir elemento y hacer la media
numbers[5] = 6;
console.log(numbers);
let acc2 = 0;
for (let i = 0; i < numbers.length; i++) {
  acc2 = acc2 + numbers[i];
}

console.log(acc2 / numbers.length);

function getAverage(arr) {
  let acc3 = 0;
  for (let i = 0; i < arr.length; i++) {
    acc3 = acc3 + arr[i];
  }

  console.log(acc3 / arr.length);
}

getAverage(numbers);
