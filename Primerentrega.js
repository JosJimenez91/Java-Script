
  const iva = 1.21;

  function esNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
  }
  
  while (true) {
    const montoInicialStr = prompt("Ingrese el monto inicial");
    if (esNumero(montoInicialStr)) {
      montoInicial = parseFloat(montoInicialStr);
      break;
    } else {
      alert("Por favor, ingrese un monto inicial válido. Intente nuevamente.");
    }
  }
  
  let codigoDescuento = prompt("Ingrese el código de descuento");
  let porcentajeDescuento = 0;
  
  if (codigoDescuento.toLowerCase() === "cibermonday") {
    porcentajeDescuento = 25;
    alert("Se aplicará un 25% de descuento (cibermonday).");
  } else if (codigoDescuento.trim() === "") {
    alert("No se ingresó ningún código de descuento. Se asumirá un descuento del 0%.");
  } else {
    alert("Código incorrecto. No se aplicará ningún descuento.");
  }
  
  alert("Se le sumará el 21% de IVA.");
  aplicarDescuento(montoInicial, porcentajeDescuento);
  
function aplicarDescuento(montoInicial, porcentajeDescuento) {
    const montoDescontar = montoInicial * (porcentajeDescuento / 100);
    const montoFinal = (montoInicial - montoDescontar) * iva;
    alert("El monto final incluyendo IVA es: " + montoFinal);
  }