'use strict';

const firstDogImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAg9luisiJYPu0VB6PX27POW7-O3N-RFkR1IPHouchnsfgBHfh';
const firstDogName = 'Dina';

const secondDogImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTix-dDsgjFJbh5UpePnF_eb_xsgGXoxpQIf5qmjVAV-3tTN6C9BA';
const secondDogName = 'Luna';

const thirdDogImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKqOBZGz0NUnIfMSnnpF4kiSn1K4y-JDXbwgdUeCuFBMT8Fjfjw';
const thirdDogName = 'Lana';

const list = document.querySelector('.list');

list.innerHTML = `
<li><img src=\"${firstDogImage}\"/><br><p>${firstDogName}</li>
<li><img src=\"${secondDogImage}\"/><br><p>${secondDogName}</li>
<li><img src=\"${thirdDogImage}\"/><br><p>${thirdDogName}</li>
`;