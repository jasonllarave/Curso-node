// res => resolve (cuando resuelve) y / rej => reject (cuando pasa algo y no funciona)
/* const miPromesa = new Promise((res, rej) => {   // promise necesita una ejecutor por eso el ((res, rej))
    res('exito en la llamada de la promesa');
    rej('ocurrio un error en el servidor');   // puedo poner res o rej con mensaje es asi que se ponene las promesas
});


/* llamo la funcion y con .then es un metodo para ejecutar una funcion cuando la promesa esta resuelta */
/*miPromesa.then((resultado) => {
console.log(resultado);
}, (error) => {
    console.log('Error: ${error}');
    });
    */

    // este es otro ejemplo mas avanzado

    const moduloPromesa = require('./misModulos/promesa.js');

    const miPromesa = moduloPromesa.dividir(15,3);
    miPromesa.then((data) => { 
    console.log(data);  
}, (error) => {
    console.log('Error: ${error}');
});

