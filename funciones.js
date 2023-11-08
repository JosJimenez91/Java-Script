


const iva = 1.21;

function aplicardescuento(montoinicial, porcentajededescuento) {
  const montoadescontar = montoinicial * (porcentajededescuento / 100);
  const montofinal = (montoinicial - montoadescontar) * iva;
  alert("El monto final incluyendo IVA es: " + montofinal);
}

const montoinicial = parseFloat(prompt("Ingrese el monto inicial"));
let codigodescuento = prompt("Ingrese el código de descuento");

let porcentajededescuento = 0;

if (codigodescuento.toLowerCase() === "cibermonday") {
  porcentajededescuento = 25;
  alert("Se aplicará un 25% de descuento (cibermonday).");
} else if (codigodescuento.trim() === "") {
  alert("No se ingresó ningún código de descuento. Se asumirá un descuento del 0%.");
} else {
  alert("Código incorrecto. No se aplicará ningún descuento.");
}

  alert("Se le sumará el 21% de IVA.");
  aplicardescuento(montoinicial, porcentajededescuento);

