"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
//"http://www.fillmurray.com/300/300"
let userAvatar = "http://www.fillmurray.com/300/300";

let Avatar = document.querySelector(".user__avatar");

Avatar.setAttribute("src", userAvatar || DEFAULT_AVATAR);

//Avatar.src = userAvatar || DEFAULT_AVATAR; es otra opcion
