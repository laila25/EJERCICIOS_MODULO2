'use strict';

const main = document.querySelector('.main');

const content = '<h1>Lorem ipsum</h1>';
const contentImg = '<img src="http://via.placeholder.com/350x150"/>';
const contentText = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';

main.innerHTML = content + contentImg + contentText;