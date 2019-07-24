"use strict";

const Name = "sonia";

if (Name === "Laura" || name === "Sara") {
  //hay que poner dos veces la condicion de la variable, porque el texto siempre es truthy
  console.log("Bienvenida " + Name);
} else {
  console.log(
    "Lo siento pero el usuario que has introducido no está registrado"
  );
}
