/*console.log(__filename);         //objetos globales
console.log(__dirname);

console.count("Node");   //Con esto puedo ver los datos del objeto y tambien puedo construir una tabla  con console.table para ver los datos de esa manera
console.log("hola");
console.count("Node");
console.table({ 
     a:1,
     b: 2

});

console.log("Nivel N 1 ");
console.group();
console.log("Nivel N 2 ");
console.group();
console.log("Nivel N 3 ");
console.log("mas contenido del nivel 3 ");
console.groupEnd();
console.log("regresamos al nivel 2 ");
console.groupEnd();
console.log("regresamos al nivel 1 "); */


let valor = 0;

const saludar = () => {
    console.log("Hola mundo");
    valor++;
}
/*
//setTimeput(saludar, 2000);
let timer = setTimeout(saludar, 2000);   // esto sirve para limpiar cualqquier procesamiento asincrono

clearTimeout(Timer); */

let intervalo = setInterval (() => {  // con esta funcionalidad podria realizar muchas tareas que podria necesitar para el procesamiiento asincrono y el control reiterativo de diferentes acciones
saludar(); 
if (valor === 5) {
    clearInterval(intervalo);
}
}, 1000);