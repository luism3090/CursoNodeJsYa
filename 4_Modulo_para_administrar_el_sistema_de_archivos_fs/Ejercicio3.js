var fs = require('fs');

function leerFile(error, datos) {

  if (error) {
    console.log(error);
  } else {
    console.log(datos.toString());
  }


}

fs.readFile('archivo1.txt', leerFile);

console.log('ultima linea del programa');
