



const iva = 1.21

function aplicardescuento(montoinicial, porcentajededescuento) {
  const montoadescontar = montoinicial / 100 * porcentajededescuento;
  const montofinal = (montoinicial - montoadescontar)*iva;
  alert("El monto final incluyendo iva es : " + montofinal);
}

const montoinicial = parseFloat(prompt("Ingrese el monto inicial"));
const porcentajededescuento = parseFloat(prompt("Ingrese el porcentaje de descuento"));
alert("se le sumara el 21% del iva");
aplicardescuento(montoinicial, porcentajededescuento);