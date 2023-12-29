// crear el array de objetos //
let carrito = [];

// Función para obtener la lista de productos desde el archivo JSON //
function obtenerProductos() {
  return new Promise((resolve, reject) => {
    fetch("../JSON/productosLista.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar la API");
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Función para obtener el carrito desde Local Storage
function obtenerCarritoDesdeLocalStorage() {
  const carritoGuardado = localStorage.getItem("carrito");
  return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

// Función para guardar el carrito en Local Storage
function guardarCarritoEnLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función principal
async function main() {
  try {
    // Obtener el carrito desde Local Storage
    carrito = obtenerCarritoDesdeLocalStorage();

    // Obtener la lista de productos
    const productosLista = await obtenerProductos();

    // Mostrar los productos en la página
    mostrarProductos(productosLista);
  } catch (error) {
    console.error("Error en la aplicación:", error);
  }
}

// Llamar a la función principal
main();

// Validar productos en la lista
function validarProductos(productosLista) {
  productosLista.forEach(producto => {
    if (producto.nombre === "") {
      throw new Error("El nombre del producto no puede estar vacío");
    }
    if (typeof producto.valor !== "number" || isNaN(producto.valor)) {
      throw new Error("El precio del producto debe ser un número válido");
    }
  });
}

// CARRITO //

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, valor) {

//sumar productos al carrito//
const productoExistente = carrito.find(producto => producto.nombre === nombre);

if (productoExistente) {
  productoExistente.cantidad++;  // Incrementar la cantidad si el producto ya existe
} else {
  carrito.push({ nombre, valor, cantidad: 1 });  // Agregar un nuevo producto si no existe
}

  // Actualizar Local Storage
  guardarCarritoEnLocalStorage();


// Actualizar el contenido del modal de carrito//
actualizarlistaCarrito();

}

// Actualizar carrito  y en Local Storage //

function actualizarlistaCarrito() {
  const listaCarrito = document.getElementById("listaCarrito");
  const totalCarritoElement = document.getElementById("totalCarrito");
  listaCarrito.innerHTML = "";


let totalCarrito = 0;

//agrega productos al carrito//

carrito.forEach(producto => {
 const productoItem = document.createElement("li");
 productoItem.classList.add("list-group-item")
 productoItem.innerHTML =`<p>${producto.nombre} - Cantidad: ${producto.cantidad} - Valor: $ ${producto.valor * producto.cantidad}</p>`;
 listaCarrito.appendChild(productoItem);

//sumar el total y productos//
totalCarrito +=  + producto.valor * producto.cantidad;
  });

//mostrar el total//
totalCarritoElement.innerText = `Total: $${totalCarrito}`;

//mostrar el modal//
if (carrito.length > 0) {
  const myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
}

  // Actualizar Local Storage
  guardarCarritoEnLocalStorage();

}

// Función para finalizar la compra y limpiar el carrito
function finalizarCompra() {
  // Limpiar el carrito
  carrito = [];

  // Actualizar Local Storage
  guardarCarritoEnLocalStorage();

  // Cerrar el modal después de finalizar la compra
  const myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.hide();

  // Actualizar el contenido del modal de carrito después de finalizar la compra
  actualizarListaCarrito();
}



//BUSCAR PRODUCTOS//

// Función para filtrar productos// 
async function filtrarProductos() {
  try {
    // Obtén la lista completa de productos
    const productosLista = await obtenerProductos();

    // Obtén el texto de búsqueda desde el campo de entrada
    const textoBusqueda = document.getElementById("buscadorProductos").value.toLowerCase();

    // Filtra los productos basándote en el texto de búsqueda
    const productosFiltrados = productosLista.filter(producto =>
      producto.nombre.toLowerCase().includes(textoBusqueda)
    );

    // Muestra los productos filtrados en la interfaz
    mostrarProductos(productosFiltrados);
  } catch (error) {
    console.error("Error al filtrar productos:", error);
  }
}

// Evento para la entrada del usuario
document.getElementById("buscadorProductos").addEventListener("input", filtrarProductos);


// mostrar productos //
function mostrarProductos(productosLista) {
    const contenedor = document.getElementById("productos_todos");
    contenedor.innerHTML = "";
  
    productosLista.map(producto => {
      const divProducto = document.createElement("div");
      divProducto.classList.add("col-lg-3", "m-3","p-3");
      divProducto.innerHTML = `
        <div class="card-body",>
          <img src="${producto.img}" class="img" , "card-img-top", "rounded mx-auto d-block" , alt="Imagen de ${producto.nombre}">
          <div class="descripcion>
          <h2 class="titulo" , "card-title text-primary" ,>${producto.nombre}</h2>
          <p class="descripcion" , "card-text">${producto.descripcion}</p>
          <p class="card-text text-danger">Valor:$ ${producto.valor}</p>
          <div class="d-grid gap-2">
          <button class="btn btn-warning p-2" onclick="agregarAlCarrito('${producto.nombre}', ${producto.valor})">Comprar</button>
        </div>
        </div>
      `;
      contenedor.append(divProducto);
    });
  }
// MOSTRAR PRODUCTOS //
  mostrarProductos(productosLista); 


// Formulario
const formulario = document.getElementById("contacto");
const btnEnviar = document.getElementById("enviar");

formulario.addEventListener("submit", validarFormularioContacto);

btnEnviar.addEventListener("click", mostrarAlert);

function validarFormularioContacto(e) {
  e.preventDefault();

  const mail = document.getElementById("mail").value.trim().toLowerCase();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (mensaje === "") {
    alert("Por favor, introduce tu mensaje.");
    return;
  }

  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
    alert("Por favor, introduce un correo electrónico válido.");
    return;
  }
}

function mostrarAlert() {
  alert("Gracias por tu consulta, la responderemos a la brevedad.");
}

















