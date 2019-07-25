"use strict";

const adalaber = {
  name: "Susana",
  age: 34,
  profession: "periodista",
  run: () => console.log("estoy corriendo"),
  showBio: function() {
    return (
      "Mi nombre es " +
      this.name +
      ", tengo " +
      this.age +
      " años y soy " +
      this.profession
    );
  }
};

const adalaber2 = {
  name: "Rocío",
  age: 25,
  profession: "actriz",
  showBio: function() {
    return (
      "Mi nombre es " +
      this.name +
      ", tengo " +
      this.age +
      " años y soy " +
      this.profession
    );
  }
};

console.log(adalaber.showBio());
console.log(adalaber2.showBio());
