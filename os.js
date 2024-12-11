const os = require ('os');  // importo modulo propio de node, es del sistema operativo

let cpu = os.cpus();

//console.log(cpu);             //imprime las cpu instaladas          

let sistema = os.platform();
//console.log(sistema);         //imprime el sistema op

let usuario = os.hostname();
console.log(usuario);            // datos del user de mi sistema

let arquitectura = os.arch();     //imprime arquitectura (documentacion https://nodejs.org/api/os.html#osarch)
console.log(arquitectura);