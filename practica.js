
    alert('Voy a leer');

    let cantdehojasparaleer = parseInt(prompt('¿Cuántas hojas vas a leer hoy?'));

    while (isNaN(cantdehojasparaleer)) {
        cantdehojasparaleer = parseInt(prompt('Eso no es un número. Ingrésalo de nuevo:'));
    }

    let cantidaddehojasquelei = 0;

    while (cantidaddehojasquelei < cantdehojasparaleer) {
        alert('Leí 10 hojas');
        cantidaddehojasquelei = cantidaddehojasquelei + 10;
        alert('Ya he leído ' + cantidaddehojasquelei + ' hojas.');
    }

    alert('Terminé');




// funciones primera parte // 


const iva = 1.21;

function aplicardescuento(montoinicial, porcentajededescuento) {
  const montoadescontar = montoinicial * (porcentajededescuento / 100);
  const montofinal = (montoinicial - montoadescontar) * iva;
  alert("El monto final incluyendo IVA es: " + montofinal);
}

const montoinicial = parseFloat(prompt("Ingrese el monto inicial"));
const codigodescuento = prompt("Ingrese el código de descuento");

let porcentajededescuento = 0;

if (codigodescuento.toLowerCase() === "cibermonday") {
  porcentajededescuento = 25;
  alert("Se aplicará un 25% de descuento (cibermonday).");
} else {
  alert("No se aplicará ningún descuento.");
}

alert("Se le sumará el 21% de IVA.");
aplicardescuento(montoinicial, porcentajededescuento);

// con un while  logro que me valide que el codigo sea correcto y no mne deje continar hata que no lo sea //


const iva = 1.21;

function aplicardescuento(montoinicial, porcentajededescuento) {
  const montoadescontar = montoinicial * (porcentajededescuento / 100);
  const montofinal = (montoinicial - montoadescontar) * iva;
  alert("El monto final incluyendo IVA es: " + montofinal);
}

const montoinicial = parseFloat(prompt("Ingrese el monto inicial"));
let codigodescuento = prompt("Ingrese el código de descuento");

let porcentajededescuento = 0;

while (codigodescuento.toLowerCase() !== "cibermonday") {
  alert("Código incorrecto. Intente nuevamente.");
  codigodescuento = prompt("Ingrese el código de descuento");
}

alert("Se aplicará un 25% de descuento (cibermonday).");
alert("Se le sumará el 21% de IVA.");
aplicardescuento(montoinicial, porcentajededescuento);


// el problema que tengo es que hata que no coloque un codigo no me deja avanzar // 




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

if (codigodescuento.trim() === "" || codigodescuento.toLowerCase() === "cibermonday") {
  alert("Se le sumará el 21% de IVA.");
  aplicardescuento(montoinicial, porcentajededescuento);
}




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



