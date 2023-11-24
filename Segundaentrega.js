function ingresaNombre(nombre) {
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
  const eleccionProducto = prompt("Ingrese el número del producto que desea ver:\n1. raquetas\n2. bolsos\n3. accesorios");
  const indiceProducto = parseInt(eleccionProducto) - 1;

  if (!isNaN(indiceProducto) && indiceProducto >= 0 && indiceProducto < productos.length) {
    alert("Usted ha elegido ver " + productos[indiceProducto] + ".");

    const nombreProducto = productos.find((producto) => producto === productos[indiceProducto]);


    window.location.href = `https://matchpointstore.000webhostapp.com/pages/${nombreProducto}.html`;
    break;
  } else {
    alert("Por favor, ingrese un número válido de producto. Intente nuevamente.");
  }
}

for (const producto of productos) {
  const linkProducto = document.createElement("a");
  linkProducto.href = `productos/${producto}.html`;
  linkProducto.textContent = producto;

  document.body.appendChild(linkProducto);
}
