const listaProductos = [];
let productos = {
    nombre: null,
    precio: null,
    iva: null
    }  
let contProductos = 0;

// Ingreso de Producto
function productosUsuario (){
    let cantProductos = prompt("Cuántos productos vas a ingresar");
    cantProductos = parseInt(cantProductos);
    // ! No funcional el if - ARREGLAR
    if (cantProductos !== 0) {
        for (let contaProductos = 0; contaProductos < cantProductos; contaProductos++) {
            productos.nombre = prompt ("Ingresa el nombre del producto");
            productos.precio = parseInt(prompt ("Ingresa el precio"));
            productos.iva = parseFloat(prompt ("Ingresa el IVA del producto"));
            alert (`Nombre: ${productos.nombre} Precio: ${productos.precio} IVA: ${productos.iva}`);
        }
    } else if (cantProductos === 0){
        alert ("Ingrese un número");
    }
}

// ! NO FUNCIONAL - Pendiente hacer push de producto a un array listaProductos
function crearProducto () {
    listaProductos [listaProductos.length + 1] = new productos (productos.length + 1, productos.nombre, productos.precio, productos.iva);
    listaproductos.push [productos]
}

// ! EN PROCESO
// Muestra la lista de productos globales
function muestraListaProductos () {
    console.log(`El listado de productos es ${productos}`);
}

// Calculo del IVA
function imprimeIVA () {
    console.log (`El IVA del producto ${productos.nombre} es ${productos.precio*productos.iva} y el total del valor sería ${productos.precio+(productos.precio*productos.iva)}`);
}

// Imprime la data del producto ingresado
function imprimeData () {
    if (productos.nombre !== null) {
        console.log (`Nombre: ${productos.nombre}, Precio ${productos.precio}, IVA ${productos.iva}`);
    } else {
        alert ("No se han ingresado productos");
    }
}
    

