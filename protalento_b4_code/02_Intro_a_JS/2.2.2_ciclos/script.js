//const array = [];
//Inicialización => let index = 0; index => contador
//Condicional index < array.length => Condicion de Paro
//Si cumple
    //Bloque de código { ... }
    //Incremento || Decremento => index++
//No cumple 
    //No hace nada. 

// for (let index = 0; index < array.length; index++) {
     //const element = array[index];
//     console.log (array[index]);
// }


//Ejercicio 1

// var cantidadNumeros = 10 ;
// const numerosAzar = [];

// while (numerosAzar.length < cantidadNumeros) {
//     var aleatorio = Math.ceil(Math.random()*cantidadNumeros);
//     for (let index = 0; index < numerosAzar.length; index++) {
        
//     }
// }
// console.log (numerosAzar);

// var cantidadNumeros = 10;
// const numerosAzar = []
// while(numerosAzar.length < cantidadNumeros ){
//     var numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
//     var existe = false;
//     for(var i = 0; i < numerosAzar.length; i++){
//         if(numerosAzar [i] == numeroAleatorio){
//             existe = true;
//             break;
//         }
//     }
//     if(!existe){
//         numerosAzar[numerosAzar.length] = numeroAleatorio;
//     }
// }
// console.log (numerosAzar);

// Ejercicio 2
    //El usuario deberá ingresar un string con varias palabras separadas por coma en un popup
    //y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]). 
    //Mostrar en consola dicho resultado.
let cadenaValores = prompt ("Ingresa varias palabras separadas por coma (,)");
console.log (cadenaValores);
let finalValores = cadenaValores.split(","); 
console.log(finalValores);


//Ejercicio 3
let array = [10,40,30,20,15,5]; 

function compareNumbers (a, b) {
    console.log (`a: ${a}, b: ${b}, a-b: ${b - a}`)
    return b - a;
}

console.log (array.sort());
console.log (Math.max(...array));
console.log (Math.min(...array));