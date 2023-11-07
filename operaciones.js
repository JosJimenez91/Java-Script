
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


















