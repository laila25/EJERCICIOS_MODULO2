"use strict";

//Ejercicio 2
/*function average(a, b, c, d) {
    const result = (a + b + c + d) / 4;
    return console.log(result);
  }*/

/* function (a, b, c, d) {
    const result = (a + b + c + d) / 4;
    return console.log(result);
  }*/

const average = (a, b, c, d) => console.log((a + b + c + d) / 4);

average(1, 2, 3, 4);

const getWaitingTime = minutes => {
  console.log(`Please, wait ${minutes} minutes`);
  // return `Please, wait ${minutes} minutes`;
};

getWaitingTime(5);
