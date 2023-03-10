//1. ¿Cuál es la salida de este código?
/* 
console.log('start');
const promise1 = new Promise((resolve, reject) => {
console.log(1)
})
console.log('end'); */

//2. ¿Cuál es la salida de este código?

/* console.log('start');
const promise1 = new Promise((resolve, reject) => {
console.log(1)
resolve(2)
})
promise1.then(res => {
console.log(res)
})
console.log('end'); */

//3. ¿Cuál es la salida de este código?

/* console.log('start');
const promise1 = new Promise((resolve, reject) => {
console.log(1)
resolve(2)
console.log(3)
})
promise1.then(res => {
console.log(res)
})
console.log('end'); */

//4. ¿Cuál es la salida de este código?

/*console.log('start');
const promise1 = new Promise((resolve, reject) => {
console.log(1)
})
promise1.then(res => {
console.log(2)
})
console.log('end');*/

// Ya que no hay ningúna respuesta del resolve, no se muestra el console.log (2)

//5. ¿Cuál es la salida de este código?

/*console.log('start')
const fn = () => (new Promise((resolve, reject) => {
console.log(1);
resolve('success')
}))
console.log('middle')
fn().then(res => {
console.log(res)
})
console.log('end')*/

//6. ¿Cuál es la salida de este código?

/* console.log('start')
Promise.resolve(1).then((res) => {
console.log(res)
})
Promise.resolve(2).then((res) => {
console.log(res)
})
console.log('end') */

//7. ¿Cuál es la salida de este código?

/* console.log('start') // 1
setTimeout(() => {
console.log('setTimeout') // 4
})
Promise.resolve().then(() => {
console.log('resolve') // 3 Mayor prioridad
})
console.log('end') // 2 */

//8. ¿Cuál es la salida de este código?

/* const promise = new Promise((resolve, reject) => {
console.log(1); // 1
setTimeout(() => {
console.log("timerStart"); // 3
resolve("success"); // 5
console.log("timerEnd"); // 4
}, 0);
console.log(2); // 2
});
promise.then((res) => {
console.log(res); 
});
console.log(4); // 3 */

//9. ¿Cuál es la salida de este código?

console.log('start'); // 1
const promise1 = Promise.resolve().then(() => {
console.log('promise1'); // 3 Mayor prioridad
const timer2 = setTimeout(() => {
console.log('timer2') // 6
}, 0)
});
const timer1 = setTimeout(() => {
console.log('timer1') // 4 
const promise2 = Promise.resolve().then(() => {
console.log('promise2') // 5 Mayor prioridad
})
}, 0)
console.log('end'); // 2