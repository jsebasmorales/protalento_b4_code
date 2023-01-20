function numeroDivisible() {
    let numeroDiv = prompt ("Ingresa un número:");
    let numDiv = parseInt (numeroDiv);
    if (numDiv % 2 === 0) {
        alert (numDiv + " es divisible entre dos");
    } else {
        alert (numDiv + " NO es divisible entre dos");
    }
}

function numeroPar() {
    let numeroPar = prompt ("Ingresa un número:");
    if (numeroPar % 2 === 0) {
        alert (numeroPar + " es par");
    } else {
        alert (numeroPar + " NO es par");
    }
}

function numeroGanador() {
    let numGanador = prompt ("Ingresa un número:");
    if (numGanador === "1000") {
        alert ("Ganaste un premio");
    } else {
        alert ("**" + numGanador + "**" + " Lo sentimos, sigue participando");
    }
}

function numeroMayor() {
    let num1 = prompt ("Ingresa el primer número:");
    let num2 = prompt ("Ingresa el segundo número:");
    if (num1 > num2) {
        alert (num1 + " es mayor que " + num2);
    } else {
        alert (num2 + " es mayor que " + num1);
    }
}

function numeroMayor3() {
    let num1 = prompt ("Ingresa el primer número:");
    let num2 = prompt ("Ingresa el segundo número:");
    let num3 = prompt ("Ingresa el tercer número:");
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

    alert ("El número mayor es " + mayor)

    if (num1 === num2) {
        alert (num1 + " es igual a " + num2);
    } else if (num2 === num3) {
        alert (num2 + " es igual a " + num3);
    } else if (num3 === num1) {
        alert (num3 + " es igual a " + num1);
    }
}

function diaSemana() {
    let dia = prompt ("Ingresa un día de la semana:");
    diaSem = dia.toLowerCase();

    if (diaSem == "lunes") {
        alert ("¡Si! Hoy es " + diaSem + ". Empieza con toda la energía");
    } else if (diaSem == "viernes") {
        alert ("¡Si! Hoy es " + diaSem + ". A disfrutar del fin de semana");
    } else if (diaSem == "sábado" || diaSem == "sabado" || diaSem == "domingo") {
        alert ("¡Si! Hoy es " + diaSem + ". Pronto se acaba el descanso.");
    } else {
        alert ("¡Sigue así!");
    }
}