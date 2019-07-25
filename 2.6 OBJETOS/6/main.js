"use strict";

const basketPear = {
  max: 10,
  min: 3,
  actual: 5,
  inicial: 3,
  addPear: function() {
    return (this.actual = this.actual + 1);
  },
  quitPear: function() {
    return (this.actual = this.actual - 1);
  },
  restart: function() {
    return (this.actual = this.inicial);
  }
};

console.log(basketPear);
console.log(basketPear.addPear());
console.log(basketPear.quitPear());
console.log(basketPear.restart());
