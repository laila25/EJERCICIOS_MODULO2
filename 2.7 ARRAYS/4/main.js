"use strict";

let lastMoonDay = 5;
let lastMoonMonth = 10;
let lastMoonYear = 2017;

let lastDate = new Date("10/05/2017");
let days = 365;

console.log(`Última Luna del Cazador: ${lastDate}`);

let nextDate = lastDate.getDate() + parseInt(days);

console.log(`Próxima Luna del Cazador: ${nextDate}`);

for (let i = 0; i < 16; i++) {
  let nextDate = lastDate.getDate() + parseInt(days);

  console.log(`Próxima Luna del Cazador: ${nextDate}`);
}

/*let nextMoonDay = (lastMoonDay += 365);
  let nextMoonMonth = lastMoonMonth;
  let nextMoonYear = (lastMoonYear += 1);

  console.log(
    `Próxima Luna del Cazador: ${nextMoonDay}/${nextMoonMonth}/${nextMoonYear}`*/
