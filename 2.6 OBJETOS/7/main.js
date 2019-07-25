"use strict";

const user = {};

const job = "developer";

user.firstName = "Laura";
user.lastName = "Sanchez";
user.age = 36;
user.job = job;

console.log(user);

user.firstName = "Sara";
user.addYear = function() {
  return (this.age = this.age + 1);
};
console.log(user);
console.log(user.addYear());
