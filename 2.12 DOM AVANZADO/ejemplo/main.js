"use strict";

const dates = document.querySelectorAll(".js-date");

for (const date of dates) {
  if (date.dataset.dateformat === "m/d/y") {
    date.innerHTML = "Date: 8/5/2019";
  } else if (date.dataset.dateformat === "d/m/y") {
    date.innerHTML = "Date: 5/8/2019";
  }
  console.log(date.dataset);
}
