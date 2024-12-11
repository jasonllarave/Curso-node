const http = require('http');
const fs = require('fs');
const host = '127.0.0.1';   //este puerto va ser parte del ultimo codigo del ejercicio 
const port = 8083; 

const routes = {
    '/': (request, response) =>{
        response.statuscode = 200;
        response.writeHead(200);
        response.end("Hola mundo! desde 'index'");
    },

    '/json' : (request, response) => {
        response.setHeader('Content-type', 'application/json');
        response.writeHead(200);
        let objeto = {      
            "canal": "youtube",
            "edad" : 29,
            "cursos" : ["php", "python", "js"]    //de esta forma puedo devolver un JSON
        }
        response.end(JSON.stringify(objeto));
    },
    '/html': (request, response) => {
        let archivoHTML=fs.readFileSync(__dirname+"/contenido.html ")
        response .setHeader('Context-Type', 'text/html');
        response.writeHead(200);  
        response.end(archivoHTML);
    },
    '/csv':(request, response) => {
response.setHeader('content-type', 'text/csv');
response.setHeader('Content-Disposition', 'attachment;filename=amigos.csv');
response.writeHead(200);    
}
};

const server = http.createServer((request, response) => { 
    console.log(request.url);
    console.log(request.method);

    if (request.url in routes){
         return routes[request.url](request, response);
    }
 
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);

});
server.listen(port, host,() => {
    console.log(`servidor corriendo en: http://${host}:${port}`);            
    });