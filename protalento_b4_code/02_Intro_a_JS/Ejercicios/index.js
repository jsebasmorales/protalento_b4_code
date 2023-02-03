// document.getElementById (nombreID).value;  .value se usa para traer el valor ingresado por el usuario.
// 

/* EJERCICIO 1: Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en
caso de contestar sí, responder “Ciertamente”, en caso de contestar no,
responder: “No te creo”. */

function eresBello() {
    let respUsuario = document.getElementById("respUsuario").value;
    respUsuario = respUsuario.toLowerCase();
        if (respUsuario === "si" || respUsuario === "sí") {
            const verdadero = document.createTextNode("Ciertamente");
            document.getElementById("resBello").appendChild(verdadero);
            const resultadoFinal = document.getElementById("resBello");
            resultadoFinal.innerHTML = "";
            resultadoFinal.appendChild (verdadero);
        } else if (respUsuario === "no"){
            const falso = document.createTextNode("No te creo");
            document.getElementById("resBello").appendChild(falso);
            const resultadoFinal = document.getElementById("resBello");
            resultadoFinal.innerHTML = "";
            resultadoFinal.appendChild (falso);    
        }
}


/* EJERCICIO 2: Solicitar al usuario un número, y determinar si es divisible entre dos o no.
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x
núm */

function esDivisible2 (numeroIngresado) {
    if ((parseFloat(numeroIngresado) % 2) === 0) {
        return "¡Es divisible!";
    } else {
        return "No es divisible";
    }
}

function numeroDivisible() {
    const numeroUsuario = document.getElementById ("numUsuario").value; 
    const resultado = document.createTextNode (esDivisible2(numeroUsuario));
    const numeroFinal = document.getElementById("resDivisible");
    numeroFinal.innerHTML = "";
    numeroFinal.appendChild (resultado);
}


/* EJERCICIO 3: Crear un programa que determine si un número introducido en un Prompt
es par o no, la respuesta será mostrada en un Alert. */

function esPar(numeroIngresado) {
    if ((parseFloat(numeroIngresado) % 2) === 0) {
        return "¡Es Par";
    } else {
        return "No es par";
    }
}

function numeroPar() {
    const numeroUsuario = document.getElementById ("numParUsuario").value; 
    const resultado = document.createTextNode (esPar(numeroUsuario));
    const numeroFinal = document.getElementById ("resPar");
    numeroFinal.innerHTML = "";
    numeroFinal.appendChild (resultado);
}


/* EJERCICIO 4: Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
"Ganaste un premio", en caso contrario mostrar el número y el mensaje
“Lo sentimos, sigue participando”. */

function esGanador (numeroUsuario) {
    if (parseFloat(numeroUsuario) === 1000) {
        return "¡Ganaste un premio!"
    } else {
        return `** ${numeroUsuario} ** Lo sentimos, sigue participando`
    }
}

function numeroGanador() {
    const numeroIngresoUsuario = document.getElementById ("numUsuarioIngresado").value;
    const resultado = document.createTextNode (esGanador (numeroIngresoUsuario));
    const numeroGanadorUsuario = document.getElementById ("resGanador");
    numeroGanadorUsuario.innerHTML = "";
    numeroGanadorUsuario.appendChild (resultado);
}


/* EJERCICIO 5: Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es
menor. No considerar el caso en que ambos números son iguales. */

function esMenor (num1, num2) {
    if (num1 > num2) {
        return `${num2} es menor que ${num1}`;
    } else {
        return `${num1} es menor que ${num2}`;
    }
}

function numeroMayor() {
    const num1 = document.getElementById("numero1").value;
    const num2 = document.getElementById("numero2").value;

    const resultadoNumero = document.createTextNode(esMenor (num1, num2));
    const numeroMenor = document.getElementById("resMenor");
    numeroMenor.innerHTML = ""; 
    numeroMenor.appendChild(resultadoNumero);
}

/* EJERCICIO 6: Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es
el número mayor. Considerar el caso en que 2 números sean iguales. */

function mayor3 (num1, num2, num3) {
    let temp = null;
    let mayor = null;

    if (num1 > num2) {
        temp = num1;
    } else {
        temp = num2;
    }

    if (temp > num3) {
        mayor = temp;
    } else {
        mayor = num3;
    }

    return `El número mayor es ${mayor}`;
}

function numeroIgual (num1, num2, num3) {
    if (num1 === num2) {
        return `${num1} es igual a ${num2}`;
    } else if (num2 === num3) {
        return `${num2} es igual a ${num3}`;
    } else if (num3 === num1) {
        return `${num3} es igual a ${num1}`;
    } else {
        return `No hay números iguales`
    }
}

function numeroMayor3 () {
    const num1 = document.getElementById ("primerNumero").value;
    const num2 = document.getElementById ("segundoNumero").value;
    const num3 = document.getElementById ("tercerNumero").value;

    // Número mayor
    const resultadoMayor = document.createTextNode (mayor3(num1, num2, num3));
    const numeroMayor = document.getElementById("resMayor");
    numeroMayor.innerHTML = "";
    numeroMayor.appendChild (resultadoMayor);

    //Números iguales
    const resultadoIguales = document.createTextNode (numeroIgual (num1, num2, num3));
    const igualdad = document.getElementById ("resIguales");
    igualdad.innerHTML = "";
    igualdad.appendChild (resultadoIguales);
}

/* EJERCICIO 7: Requerir al usuario que ingrese un día de la semana e imprimir un
mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje
diferente si es sábado o domingo. Si el día ingresado no es ninguno de
esos, imprimir otro mensaje. */

function diaSemanaProceso (diaUsuario) {
    if (diaUsuario == "lunes") {
        return `¡Si! Hoy es ${diaUsuario}. Empieza con toda la energía`;
    } else if (diaUsuario == "viernes") {
        return `¡Si! Hoy es ${diaUsuario}. A disfrutar del fin de semana`;
    } else if (diaUsuario == "sábado" || diaUsuario == "sabado" || diaUsuario == "domingo") {
        return `¡Si! Hoy es ${diaUsuario}. Pronto se acaba el descanso.`;
    } else {
        return `¡Sigue así!`;
    }
}

function diaSemana () {
    const diaUsuario = document.getElementById ("diaUsuario").value;

    const diaSemana = document.createTextNode (diaSemanaProceso (diaUsuario));
    const diaFinal = document.getElementById ("diaSemana");
    diaFinal.innerHTML = "";
    diaFinal.appendChild (diaSemana); 
}

/* EJERCICIO 8: Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la
calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.*/

function validacionNota (nota) {
    let notaUsuario = parseInt(nota);
    if (nota >= 1 && nota <= 10) {
        if (nota < 6) {
            return `Reprobado`
        } else if (nota >= 6 && nota <= 8 ) {
            return `Regular`
        } else if (nota == 9) {
            return `Bien`
        } else if (nota == 10) {
            return `Excelente`
        }
    } else {
        return `Tu número es inválido, debe ser entre 1 y 10`
    }
}

function notaUsuario () {
    const nota = document.getElementById ("notaUsuario").value;

    const notaUsuario = document.createTextNode (validacionNota (nota));
    const notaFinal = document.getElementById ("nota");
    notaFinal.innerHTML = "";
    notaFinal.appendChild (notaUsuario);
}

/* EJERCICIO 9: Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
● El helado sin topping cuesta 50 MXN.
● El topping de oreo cuesta 10 MXN.
● El topping de KitKat cuesta 15 MXN.
● El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/

function validacionTopping (usuarioTopping) {
    const valorHelado = 50;
    let topping = usuarioTopping.toLowerCase();
    if (topping == "" || topping == "Sin topping") {
        return `$50 MXN`;
    } else if (topping == "oreo") {
        return `$${valorHelado + 10} MXN`
    } else if (topping == "kitkat") {
        return `$${valorHelado + 15} MXN`
    } else if (topping == "brownie") {
        return `$${valorHelado + 20} MXN`
    } else {
        return `No tenemos este topping, lo sentimos. Tu helado cuesta ${valorHelado} MXN`
    }
}

function inputTopping () {
    const usuarioTopping = document.getElementById ("heladoUsuario").value;

    const valorTopping = document.createTextNode (validacionTopping (usuarioTopping));
    const topping = document.getElementById ("valorHelado");
    topping.innerHTML = "";
    topping.appendChild (valorTopping);
}


/* EJERCICIO 10: Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida. 
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
● Course: $4999 MXN
● Carrera $3999 MXN
● Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
● Beca Facebook: 20% de descuento.
● Beca Google: 15% de descuento.
● Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
● Course: 2 meses
● Carrera 6 meses
● Master: 12 meses*/

function validacionPrograma (nivel, beca) {
    const course = 4999;
    const carrera = 3999;
    const master = 2999;
    const duracionCourse = 2;
    const duracionCarrera = 6;
    const duracionMaster = 12;
    
    if (nivel == "course") {
        return `Tu curso ${nivel} tiene un costo de $${course} mensual y una duración de ${duracionCourse} meses. El precio total de tu curso sin descuento es: $${course*duracionCourse}`;
    } else if (nivel == "carrera") {
        return `Tu curso ${nivel} tiene un costo de ${carrera} mensual y una duración de ${duracionCarrera} meses. El precio total de tu curso sin descuento es: $${carrera*duracionCarrera}`;
    } else if (nivel == "master") {
        return `Tu curso ${nivel} tiene un costo de ${master} mensual y una duración de ${duracionMaster} meses. El precio total de tu curso sin descuento es: $${master*duracionMaster}`;
    }
}

function validacionBeca (beca, nivel) {
    const facebook = 0.20;
    const facebookTexto = "20%";
    const google = 0.15;
    const googleTexto = "15%";
    const jesua = 0.50;
    const jesuaTexto = "50%";
    const course = 4999;
    const carrera = 3999;
    const master = 2999;
    
    if (nivel == "course" && beca == "facebook") {
        return `Aplicamos un descuento del ${facebookTexto} al valor total de tu curso. El total es $${parseInt(2*(course-(course*facebook)))}`;
    } else if (nivel == "course" && beca == "google") {
        return `Aplicamos un descuento del ${googleTexto} al valor total de tu curso. El total es $${parseInt(2*(course-(course*google)))}`;
    } else if (nivel == "course" && beca == "jesua") {
        return `Aplicamos un descuento del ${jesuaTexto} al valor total de tu curso. El total es $${parseInt(2*(course-(course*jesua)))}`;
    } 

    if (nivel == "carrera" && beca == "facebook") {
        return `Aplicamos un descuento del ${facebookTexto} al valor total de tu curso. El total es $${parseInt(6*(carrera-(carrera*facebook)))}`;
    } else if (nivel == "carrera" && beca == "google") {
        return `Aplicamos un descuento del ${googleTexto} al valor total de tu curso. El total es $${parseInt(6*(carrera-(carrera*google)))}`;
    } else if (nivel == "carrera" && beca == "jesua") {
        return `Aplicamos un descuento del ${jesuaTexto} al valor total de tu curso. El total es $${parseInt(6*(carrera-(carrera*jesua)))}`;
    } 

    if (nivel == "master" && beca == "facebook") {
        return `Aplicamos un descuento del ${facebookTexto} al valor total de tu curso. El total es $${parseInt(12*(master-(master*facebook)))}`;
    } else if (nivel == "master" && beca == "google") {
        return `Aplicamos un descuento del ${googleTexto} al valor total de tu curso. El total es $${parseInt(12*(master-(master*google)))}`;
    } else if (nivel == "master" && beca == "jesua") {
        return `Aplicamos un descuento del ${jesuaTexto} al valor total de tu curso. El total es $${parseInt(12*(master-(master*jesua)))}`;
    } 
}

function inputEstudios () {
    const nivel = document.getElementById ("nivelUsuario").value;
    const beca = document.getElementById ("becaUsuario").value;

    const validacionNivel = document.createTextNode (validacionPrograma (nivel));
    const nivelUser = document.getElementById ("cursoUsuario");
    nivelUser.innerHTML = "";
    nivelUser.appendChild (validacionNivel); 

    const becaFinal = document.createTextNode (validacionBeca (beca, nivel));
    const becaUser = document.getElementById ("precioTotal");
    becaUser.innerHTML = "";
    becaUser.appendChild (becaFinal); 

}

/* EJERCICIO 11: Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.

Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. 
Considere qué: total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.*/

function validacionVehiculo (vehiculo, distancia, litros){
    const moto = 0.1;
    const carro = 0.2;
    const bus = 0.5;
    let recargo = 0;

    if (litros >= 0 && litros <= 100) {
        recargo += 5;
    } else {
        recargo += 10;
    }

    if (vehiculo == "moto") {
        return `El costo total de la gasolina usada es de ${(moto*distancia)+recargo}`
    } else if (vehiculo == "carro") {
        return `El costo total de la gasolina usada es de ${(carro*distancia)+recargo}`
    } else if (vehiculo == "bus") {
        return `El costo total de la gasolina usada es de ${(bus*distancia)+recargo}`
    }
}

function inputVehiculo () {
    const vehiculo = document.getElementById ("vehiculo").value;
    const distancia = document.getElementById ("distancia").value;
    const litros = document.getElementById ("litros").value;

    console.log (vehiculo);
    console.log (distancia);
    console.log (litros);

    const totalGasolina = document.createTextNode (validacionVehiculo (vehiculo, distancia, litros));
    const precioGasolina = document.getElementById ("precioGasolina");
    precioGasolina.innerHTML = "";
    precioGasolina.appendChild (totalGasolina);
}