'use strict';

const name = 'Lola';

const title = document.querySelector('.title');
const title2 = document.querySelector('.title2');

title.innerHTML = 'Hola ' + name + ', encantada de conocerte';

title2.innerHTML = `Hola ${name},<br /> encantada de conocerte`;