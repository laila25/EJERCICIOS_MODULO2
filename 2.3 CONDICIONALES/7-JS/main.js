"use strict";

const actualYear = 3;
const actualYearRest = actualYear % 4;
const actualYearRestBool = actualYear % 4 === 0;

if (actualYearRest === 3) {
  console.log(
    `${actualYear} no es un año bisiesto. El próximo año bisiesto es ${actualYear +
      1}`
  );
} else if (actualYearRest === 2) {
  console.log(
    `${actualYear} no es un año bisiesto. El próximo año bisiesto es ${actualYear +
      2}`
  );
} else if (actualYearRest === 1) {
  console.log(
    `${actualYear} no es un año bisiesto. El próximo año bisiesto es ${actualYear +
      3}`
  );
} else if (actualYearRest === 0) {
  console.log(`${actualYear} es un año bisiesto.`);
}

/*
let actualYear = 2019;

const actualYearRest = actualYear % 4 === 0;

if (actualYearRest === true) {
 console.log(`${actualYear} es un año bisiesto.`);
} else {
 console.log(`${actualYear} no es un año bisiesto.`);
}
--Para saber si x año es bisiesto o no --
*/
