"use strict";

const arr = [];

function get100Numbers() {
  for (let i = 1; i < 101; i++) {
    arr.push(i);
  }
}

function getReversed100Numbers() {
  get100Numbers();
  const Reversed100Numbers = arr.reverse();
  console.log(Reversed100Numbers);
}

getReversed100Numbers();
