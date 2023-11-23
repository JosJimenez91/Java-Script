function ingresaNombre(nombre) {
    // Función para validar si la entrada es un nombre (solo letras)
    return /^[a-zA-Z]+$/.test(nombre);
  }
  
  const productos = ["raquetas", "bolsos", "accesorios"];
  
  let nombre;
  
  while (true) {
    const inputNombre = prompt("Ingrese tu nombre");
    if (ingresaNombre(inputNombre)) {
      nombre = inputNombre;
      break;
    } else {
      alert("Por favor, ingrese un nombre válido. Intente nuevamente.");
    }
  }
  
  alert("Hola, " + nombre + ". Bienvenido a nuestra tienda. Tenemos los siguientes productos: " + productos.join(", "));
  
  while (true) {
    const eleccionProducto = prompt("Ingrese el número del producto que desea ver:\n1. Raquetas\n2. Bolsos\n3. Accesorios");
    const indiceProducto = parseInt(eleccionProducto) - 1;
  
    if (!isNaN(indiceProducto) && indiceProducto >= 0 && indiceProducto < productos.length) {
      alert("Usted ha elegido ver " + productos[indiceProducto] + ".");
      break;
    } else {
      alert("Por favor, ingrese un número válido de producto. Intente nuevamente.");
    }
  }
  

