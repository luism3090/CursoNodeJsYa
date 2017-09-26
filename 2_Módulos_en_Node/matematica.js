var PI = 3.14;

function sumar(n1, n2) {
  return n1 + n2;
}

function restar(n1, n2) {
  return n1 - n2;
}

function producto(n1, n2) {
  return n1 * n2;
}

function division(n1, n2) {
  if (n2 == 0) {
    return "No se puede dividir entre cero";
  }

  return n1 / n2;
}


exports.sumar = sumar;
exports.restar = restar;
exports.producto = producto;
exports.division = division;
exports.PI = PI;
