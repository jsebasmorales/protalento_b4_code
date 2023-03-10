

const callback = (resolve, reject) => {
    const number = Math.floor(Math.random() * 10);
    console.log (number);
    setTimeout (() => {
        if (number < 3) {
            resolve ("Hola, se logró");
        } else {
            reject (new Error ("No se logró"));
        }
    }
    ,2000);
}

const promise = new Promise (callback);
console.log ('Mi promesa', promise);

promise.then ((algo) => {
    console.log ("Se muestra la promesa", promise);
}).catch ((otroAlgo) => {
    console.log ("otroAlgo", promise)
})