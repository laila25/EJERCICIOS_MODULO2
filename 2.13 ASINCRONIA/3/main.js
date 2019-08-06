"use strcit";

const message = document.querySelector(".message");
let counter = 0;

function incrementCounter() {
  counter++;
  let cociente = Math.trunc(counter / 60);
  console.log(counter);
  if (counter < 60) {
    message.innerHTML = `escrito hace ${counter} segundos`;
  } else {
    message.innerHTML = `escrito hace ${cociente} minutos y ${counter -
      60 * cociente} segundos`;
  }
}

setInterval(incrementCounter, 100);
