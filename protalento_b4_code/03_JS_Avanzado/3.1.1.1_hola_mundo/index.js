/* let numeroPar = 9;
if (numeroPar % 2 === 0) {
    console.log (numeroPar + " es par");
} else {
    console.log (numeroPar + " NO es par");
}

let dia = "domingo";
diaSem = dia.toLowerCase();

if (diaSem == "lunes") {
    console.log ("¡Si! Hoy es " + diaSem + ". Empieza con toda la energía");
} else if (diaSem == "viernes") {
    console.log ("¡Si! Hoy es " + diaSem + ". A disfrutar del fin de semana");
} else if (diaSem == "sábado" || diaSem == "sabado" || diaSem == "domingo") {
    console.log ("¡Si! Hoy es " + diaSem + ". Pronto se acaba el descanso.");
} else {
    console.log ("¡Sigue así!");
} */

import anime from "anime.js/lib/anime.es.js";

const options = {
    targets: ".box",
    translateX: 250,
    rotate: "1turn",
    backgroundColor: "#FFF",
    duration: 800
};

anime(options);