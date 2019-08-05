"use strict";

const adalabers = [];
adalabers[0] = {
  name: "Maria",
  age: 29,
  job: "diseñadora"
};

adalabers[1] = {
  name: "Lucia",
  age: 31,
  job: "ingeniera química"
};

adalabers[2] = {
  name: "Susana",
  age: 34,
  job: "periodista"
};

adalabers[3] = {
  name: "Rocio",
  age: 25,
  job: "actriz"
};

adalabers[4] = {
  name: "Inmaculada",
  age: 21,
  job: "diseñadora"
};

console.log(adalabers);

//saber cuantas adalabers hay
function countAdalabers(arr) {
  console.log(`Hay ${arr.length} adalabers`);
}

//calcular la edad media de todas las adalabers
function averageAge(arr) {
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc = acc + arr[i].age;
  }
  console.log(`La edad media es de ${acc / arr.length} años`);
}

//saber cual es la mas joven y que edad tiene
function theYoungest(arr) {
  let youngest = 100;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < youngest) {
      youngest = arr[i].age;
    } else {
      youngest = youngest;
    }
  }

  let name;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age === youngest) {
      name = arr[i].name;
    }
  }
  console.log(`La adalaber más joven tiene ${youngest} años y es ${name}`);
}

//saber cuantas adalabers son diseñadoras
function countDesigners(arr) {
  let designers = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].job === "diseñadora") {
      designers += 1;
    } else {
      designers = designers;
    }
  }

  console.log(`Hay ${designers} adalabers diseñadoras`);
}

countAdalabers(adalabers);
averageAge(adalabers);
countDesigners(adalabers);
theYoungest(adalabers);
