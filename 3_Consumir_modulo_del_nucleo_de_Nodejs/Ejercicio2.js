// Confeccionar un programa que requiera el módulo 'os' para recuperar el espacio libre de memoria. Mostrar inicialmente el epacio libre mediante el método freemem()
// Luego crear un vector y mediante el método push almacenar 1000000 de enteros. Mostrar luego de la creación y carga del vector la cantidad de espacio libre.
// Llamar al archivo ejercicio2.js

var os = require('os');

console.log('La memoria libre es: ' + os.freemem() + ' bytes');

var vector = [];

for (var x = 0; x < 1000000; x++) {
  vector.push(x);
}

console.log('La memoria libre despues de crear el vector: ' + os.freemem() + ' bytes');
