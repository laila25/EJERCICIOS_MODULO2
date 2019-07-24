"use strict";

const teacher = document.querySelector(".teachers");
const teacherIsra = teacher.querySelector(".teacher--isra");
const teacherTuerto = teacher.querySelector(".teacher--tuerto");
const teacherNasi = teacher.querySelector(".teacher--nasi");
const mark = teacher.querySelector(".favorite");

function teacherSelected(event) {
  const selected = event.currentTarget;
  selected.classList.toggle("teacher--selected");
  if ((mark.innerHTML = "Añadir")) {
    mark.innerHTML = "Quitar";
  } else {
    mark.innerHTML = "Añadir";
  }
}

teacherIsra.addEventListener("click", teacherSelected);
teacherTuerto.addEventListener("click", teacherSelected);
teacherNasi.addEventListener("click", teacherSelected);
