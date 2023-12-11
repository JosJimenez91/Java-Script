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

function validarProducto(productosLista) {
    if (productosLista.nombre === "") { 
      throw new Error("El nombre del producto no puede estar vacío");
    }
    if (typeof productosLista.valor !== "number") {
      throw new Error("El precio del producto debe ser un número");
    }
}

// Carrito //

function agregarAlCarrito(nombre, valor) {
  // Actualizar el modal con los detalles del producto
  document.getElementById("productoNombre").innerText = `Nombre: ${nombre}`;
  document.getElementById("productoValor").innerText = `Valor: $${valor}`;

  // Mostrar el modal
  const myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
}

function finalizarCompra() {
const myModal = new bootstrap.Modal(document.getElementById('myModal'));
myModal.hide();
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


// formulario // 

const miFormulario = document.getElementById("contacto");
const botonEnviar = document.getElementById("enviar");

console.log(miFormulario);
console.log(botonEnviar);


botonEnviar.addEventListener("submit", validarformulario);
miFormulario.addEventListener("submit", validarformulario);

function validarformulario(e) {
  e.preventDefault();

const miFormulario = e.target;

const mail = document.getElementById("mail").value.trim().toLowerCase();
const mensaje = document.getElementById("mensaje").value.trim();

  // Validar mail
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
    alert("Por favor, introduce un mail válido.");
    return;
  } 
  

  // Validar mensaje
  if (mensaje === "") {
    alert("Por favor, introduce tu mensaje.");
    return;
  }

console.log("formulario valido");

alert("gracias por su consulta, la responderemos a la brevedad")
}





























