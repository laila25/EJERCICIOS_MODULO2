"use strict";

const city = document.querySelector(".select");
const div = document.querySelector(".images");

const madrid1 =
  "https://cdn.pixabay.com/photo/2017/12/16/01/42/madrid-3021998_960_720.jpg";
const madrid2 =
  "https://cdn.pixabay.com/photo/2014/07/05/23/31/madrid-385104__340.jpg";
const madrid3 =
  "https://cdn.pixabay.com/photo/2017/06/08/16/43/madrid-2384099__340.jpg";
const madridImages = [madrid1, madrid2, madrid3];

const paris1 =
  "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075__340.jpg";
const paris2 =
  "https://cdn.pixabay.com/photo/2016/02/19/11/51/louvre-1210004_960_720.jpg";
const paris3 =
  "https://cdn.pixabay.com/photo/2013/04/07/21/29/arc-de-triomphe-101632__340.jpg";
const parisImages = [paris1, paris2, paris3];

const newYork1 =
  "https://cdn.pixabay.com/photo/2016/11/29/05/34/new-york-1867569__340.jpg";
const newYork2 =
  "https://cdn.pixabay.com/photo/2013/10/29/08/34/queen-of-liberty-202218_960_720.jpg";
const newYork3 =
  "https://cdn.pixabay.com/photo/2013/04/16/14/22/brooklyn-bridge-105079_960_720.jpg";
const newYorkImages = [newYork1, newYork2, newYork3];

function showCityImage() {
  const items = document.querySelectorAll(".images img");
  for (const item of items) {
    item.remove();
  }
  //div.innerHTML = "";

  if (city.value === "Madrid") {
    for (let i = 0; i < madridImages.length; i++) {
      const image = document.createElement(`img`);
      image.setAttribute("src", madridImages[i]);
      div.appendChild(image);
    }
  } else if (city.value === "NY") {
    for (let i = 0; i < newYorkImages.length; i++) {
      const image = document.createElement(`img`);
      image.setAttribute("src", newYorkImages[i]);
      div.appendChild(image);
    }
  } else if (city.value === "Paris") {
    for (let i = 0; i < parisImages.length; i++) {
      const image = document.createElement(`img`);
      image.setAttribute("src", parisImages[i]);
      div.appendChild(image);
    }
  }
}

city.addEventListener("change", showCityImage);

/*const cities = [
    {
        name: 'madrid',
        images: ['https://cdn.pixabay.com/photo/2017/12/16/01/42/madrid-3021998_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/12/16/01/42/madrid-3021998_960_720.jp']
    },
    {
        name: 'madrid',
        images: ['https://cdn.pixabay.com/photo/2017/12/16/01/42/madrid-3021998_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/12/16/01/42/madrid-3021998_960_720.jp']
    }
];*/
