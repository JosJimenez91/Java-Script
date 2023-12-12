// crear el array de objetos //
let carrito = [];

const productosLista = [
    { nombre: "Head Speed Mp", valor: 95000, descripcion: "Peso 300gr Tamaño de cabeza 100 inch Patron de cuerdas 16/19 Balance 300mm", img: "../imagenes/head speed.webp"},
    { nombre: "Head Extreme Mp", valor: 90000, descripcion: "Peso 300gr Tamaño de cabeza 100 inch Patron de cuerdas 16/19 Balance 320mm", img: "../imagenes/head extreme.jpg" },
    { nombre: "Head Radical Mp", valor: 110000, descripcion: "Peso 300gr Tamaño de cabeza 100 inch Patron de cuerdas 16/19 Balance 320mm", img: "../imagenes/head radical.jpg" },
    { nombre: "Bolso Babolat", valor: 130000, descripcion: "Modelo Pure Aero Peso 1,600kg Altura 32cm Ancho 320cm", img: "../imagenes/bolso babolat.jpg" },
    { nombre: "Bolso Head Novak", valor: 150000, descripcion: "Peso 2kg Altura 35cm Ancho 35cm Cantidad de raquetas 6", img: "../imagenes/bolos nole.jpg" },
    { nombre: "Bolso Wilson", valor: 140000, descripcion: "Peso 2kg Altura 35cm Ancho 35cm Cantidad de raquetas 6", img: "../imagenes/bolso wilson.jpg" },
];

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


function agregarAlCarrito(nombre, valor) {

//sumar productos al carrito//
const productoExistente = carrito.find(producto => producto.nombre === nombre);

if (productoExistente) {
  productoExistente.cantidad++;  // Incrementar la cantidad si el producto ya existe
} else {
  carrito.push({ nombre, valor, cantidad: 1 });  // Agregar un nuevo producto si no existe
}


// Actualizar el contenido del modal de carrito//
actualizarlistaCarrito();

}

// Actualizar carrito//

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

}

// finalizar la compra//
function finalizarCompra() {

 // Limpiar el carrito después de finalizar la compra//
  carrito = [];

  // Cerrar el modal después de finalizar la compra//
  const myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.hide();

  // Actualizar el contenido del modal de carrito después de finalizar la compra//
  actualizarlistaCarrito ();
}


//BUSCAR PRODUCTOS//
const productos = productosLista;

function filtrarProductos(){
    const textoBusqueda = document.getElementById("buscadorProductos").value.toLowerCase();
    
    const productosFiltrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(textoBusqueda)
    );
    mostrarProductos(productosFiltrados);   
  }
 //EVENTO PARA LA ENTRADA DEL USUARIO //
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
          <img src="${producto.img}" class="card-img-top", "rounded mx-auto d-block"  alt="Imagen de ${producto.nombre}">
          <div class="descripcion>
          <h2 class="card-title text-primary">${producto.nombre}</h2>
          <p class="card-text">${producto.descripcion}</p>
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
































