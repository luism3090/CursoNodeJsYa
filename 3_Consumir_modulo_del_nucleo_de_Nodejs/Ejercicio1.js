var os = require('os');

console.log('Sistema operativo: ' + os.platform());
console.log('Versión del Sistema: ' + os.release());
console.log('Memoria total: ' + os.totalmem() + ' bytes');
console.log('Memoria libre: ' + os.freemem() + ' bytes');
