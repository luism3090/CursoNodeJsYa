var fs = require("fs");

fs.readFile('archivo1.txt', leerFile);

function leerFile(error, datos) {
  if (error) {
    console.log(error)
  } else {
    console.log(datos.toString());
  }
}

console.log("utlima linea del programa");
