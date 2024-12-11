const fs = require('fs');              //modulo de file system generar archivos txt (escribe archivos)

/*fs.writeFile('data1.txt', 'yousuario', (error) => {  //con esto escribo el nombre yousuario, modulo file escribo data1 y dentro el nombre y verifico y existe un nombre
    if(error){
        console.log('Error: ${error}');
    }
});
*/
/*
fs.readFile('data1.txt', (error, data) => {
    if (!error){
        console.log(data);
    } else{
        console.log('Error: $(error)');
    }
})
    */

/*
fs.readFile('data1.txt', 'utf-8', (error, data) => {   /* es el mismo codigo de arriba pero agrego el utf-8 /* y lee el archivo y lo convierte en una codificacion de caracteres en especifico */
 /*   if (!error){                                          
        console.log(data);
    } else{
        console.log('Error: $(error)');
    }
}); 

fs.rename('data1.txt', 'datacanal.txt', (error) => {   /*este codigo tiene un rename que genera el mismo archivo tipo txt datacanal */ 
 /*   if (!error) {                                           
        console.log("Renombrada!");
    } else{
        console.log('Error: $(error)');
    }
});

fs.appendFile('datacanal.txt', '\n, he visto el video del curso', (error) => {      /* \n se conguie que agregue el comentario en una line aparte */
/*    if (!error) {                                           
        console.log("contenido agregado");
    } else{
        console.log('Error: $(error)');
    }
});

fs.createReadStream('datacanal.txt').pipe(fs.createWriteStream('datacanal_bv.txt'));    /* con pipe hago una copia y hago un create de escritura, (esto es hace una backup)*/


/*fs.unlink('datacanal_bv.txt', (error) => {           /*con esto elimino el archivo datacanal */
 /*   if(error){
        console.log('Error: $(error)');

    }
});

*/

fs.readdir('./', (error, archivos) => {
    archivos.forEach(archivo => {        /* con el bucle de foreach itero todos los archivos que valla encontrando */
      console.log(archivo);
    });
});

     
