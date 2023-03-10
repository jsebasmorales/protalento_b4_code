//1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.

function funcionIncial (nombre) {
    console.log ("hola soy una función incial");
}

function ejercicioUno (callback, mensaje) {
    callback (mensaje);
}

ejercicioUno (console.log, 'holis, precaución');

setTimeout (function () {
    console.log('Al fin');
}, 2000);
setTimeout (function () {
    ejercicioUno (console.log, 'holis, asd');
}, 2000);