/*const fs = require('fs');

let data = fs.readFileSync ('./data/personas.json');
    //console.log(data);
    let personas = JSON.parse(data).personas;
    console.log(personas);
    console.log(typeof(personas)); */

//require es una funcion sincronica y se llama solo una vez
/*
    let jsonData = require('./data/personas.json');
    console.log(jsonData);
    console.log(typeof(jsonData)); */ 

    const fs = require('fs');

    let data = {        

            "personas": [{
                "apellidos": "Vega Tejada ",
                "nombre": "Juan Jose",
                "edad": 30
            }, {
                "apellidos": "Uribe Tapia ",
                "nombre": "Andrea",
                "edad": 27
            }, {
                "apellidos": "Zapata Quiste ",
                "nombre": "luis Adrian",
                "edad": 29  
            }]
        };

        let jsonData = JSON.stringify(data);
        console.log(jsonData);
        console.log(typeof (jsonData));

        fs.writeFile('./data/cursos.json', jsonData,(error) =>{    //esta linea generara un archivo que escribira en la ruta especificada
            if(error){
                console.log('Error: ${error}');
            }else {
                console.log("archivo JSON generado correctaente");
            }
        });




    
