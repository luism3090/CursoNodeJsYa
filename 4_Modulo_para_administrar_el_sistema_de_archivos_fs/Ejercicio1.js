var fs = require('fs');

fs.writeFile('./archivo1.txt', 'linea 1 \n Linea 2', function(error) {

  if (error) {
    console.log(error);
  } else {
    console.log("El archivo fue creado");
  }

});

console.log('ultima linea del programa');
