const fs = require('fs');     //procesamiento de archivo txt

console.log("inicio");
/* con esto puedo leer el archivo de datacanal, es procesamiento asincrono*/
fs.readfile('datacanal.txt', 'utf-8',  (error, data) => {
if (!error) {
    console.log(data);
} else {
    console.log('Error: ${error}');
}   
} );
console.log("fin")

/*se imprimira inicio fin, luego la lectura del archivo (esto es porque js tiene un procesamiento asincrono, cada proceso toma un tiempo para hacer acciones)*/


/*con la siguiente linea que realizaremos se hace una mejora, es procesamiento sincrono */

console.log("inicio"); 
const miData=fs.readFileSync('datacanal.txt', 'utf-8'); /*leo el archivo y lo pongo en una constante con el metodo fileSync y esto leera primero el inicio luego el archivo y despues fin*/
console.log("fin")
