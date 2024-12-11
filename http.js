const http = require('http');
const fs = require('fs');
const host = '127.0.0.1';   //este puerto va ser parte del ultimo codigo del ejercicio 
const port = 8083;        //esta ya no se lo paso por defecto sino por el nombre de esta Constante.

// documentacion (de http.node)https://nodejs.org/api/http.html

http.createServer((request, response) => {  
response.writeHead(200, {
    'content-type' : 'text/plain'
});

response.write("cuerpo de la respuesta");

response.end();
}).listen(8081); //si voy a la ruta http://127.0.0.1:8081/  (se vvarra la respuest del servidor con el mensaje)


// este primer codigo de servidor lo puedo ejecutar tambien en una variable const, de la siguiente manera y ejecutarla con el server.listen//

/*const server = http.createServer((request, response) => {  
    response.writeHead(200, {
        'content-type' : 'text/plain'
    });
    response.write("cuerpo de la respuesta 2");
    response.end();
})
server.listen(8083);   // aca se ejecutara en el siguiente puerto 8083
*/

/*let index = (request, response) => {
    response.statuscode = 200;
    response.writeHead(200);
    response.write("Hola mundo! desde 'index'");
    response.end();
};

const server = http.createServer((request, response) => { 
console.log(request.url);

return index(request, response);

});

server.listen(8083) */
//__________________________//

//otra version del codigo seria agregando el error

/*let index = (request, response) => {
    response.statuscode = 200;
    response.writeHead(200);
    //response.write("Hola mundo! desde 'index'");
    response.end("Hola mundo! desde 'index'");
};

const server = http.createServer((request, response) => { 
console.log(request.url);
console.log(request.method);
console.log(request.headers);
console.log(request.headers['user-agent']);

if(request.url ==='/'){ 
return index(request, response);
}
response.writeHead(404);
response.end(http.STATUS_CODES[404]);

});

server.listen(8083)*/

// ahora en el siguiente codigo realizare unas modificaciones para acceder al puerto, declarando una constante.
/*
let index = (request, response) => {
    response.statuscode = 200;
    response.writeHead(200);
    //response.write("Hola mundo! desde 'index'");
    response.end("Hola mundo! desde 'index'");
};

const server = http.createServer((request, response) => { 
console.log(request.url);
console.log(request.method);
console.log(request.headers);
console.log(request.headers['user-agent']);

if(request.url ==='/'){ 
return index(request, response);
}
response.writeHead(404);
response.end(http.STATUS_CODES[404]);

});

server.listen(port, host,() => {
console.log('servidor corriendo en: http://${host}:${port}');

});*/


// parte2 de crear uun servidor
let indexJSON = (request, response) => {
    response .setHeader('Context-Type', 'application/json');
    response.writeHead(200);
    let objeto = {      ///creo este objeto de js
        "canal": "youtube",
        "edad" : 29,
        "cursos" : ["php", "python", "js"]    //de esta forma puedo devolver un JSON
    }
    response.end(JSON.stringify(objeto));   // para utilizar el objeto lo convierto,le paso el strinhify
   // response.end('{"mensaje": "Contenido en formato JSON."}');
};

let indexHTML = (request, response) => {  /// ahora creo este metodo para devlver formato html
 /* 
    response .setHeader('Context-Type', 'text/html');
    response.writeHead(200);    
    response.end(`<html><body><h1>Esto es contenido HTML.</h1></body></html>`);   
   */
let archivoHTML=fs.readFileSync(__dirname+"/contenido.html ")
response .setHeader('Context-Type', 'text/html');
response.writeHead(200);  
response.end(archivoHTML);
}; 

const server = http.createServer((request, response) => { 
    console.log(request.url);
    console.log(request.method);
    //console.log(request.headers);
    //console.log(request.headers['user-agent']);

    if(request.url ==='/'){ 
        return index(request, response);  // tambien puedo retornar las tres rutas (tampoco es la forma adecuada de manejar rutas)
        }
        if(request.url ==='/json'){ 
            return indexJSON(request, response);
            } 
            if(request.url ==='/html'){ 
                return indexHTML(request, response);
                }
        response.writeHead(404);
        response.end(http.STATUS_CODES[404]);
        
        });

        server.listen(port, host,() => {
            console.log(`servidor corriendo en: http://${host}:${port}`);            
            });