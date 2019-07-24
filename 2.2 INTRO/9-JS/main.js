'use strict';

const text = document.querySelector('.text');
const Name = 'Leticia';
const surname ='Fernández';
const secondSurname = 'Sánchez';

text.innerHTML = `
El nombre de mi compañera es ${Name} ${surname} ${secondSurname}, y está compuesto por ${Name.length + surname.length + secondSurname.length} caracteres
`;