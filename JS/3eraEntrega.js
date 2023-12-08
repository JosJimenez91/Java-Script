// crear el array de objetos //

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
    if (typeof producto.valor !== "number") {
      throw new Error("El precio del producto debe ser un número");
    }
}


  //buscador//
const productos = productosLista;

function filtrarProductos(){
    const textoBusqueda = document.getElementById("buscadorProductos").value.toLowerCase();
    
    const productosFiltrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(textoBusqueda)
    );
    mostrarProductos(productosFiltrados);   
  }
 
  document.getElementById("buscadorProductos").addEventListener("input", filtrarProductos);






// mostrar productos //
function mostrarProductos(productosLista) {
    const contenedor = document.getElementById("productos_todos");
    contenedor.innerHTML = "";
  
    productosLista.forEach(producto => {
      const divProducto = document.createElement("div");
      divProducto.classList.add("col-lg-3", "m-3","p-3",);
      divProducto.innerHTML = `
        <div class="card-body",>
          <img src="${producto.img}" class="card-img-top", "rounded mx-auto d-block"  alt="Imagen de ${producto.nombre}">
          <div class="Descripcion>
          <h2 class="card-title text-primary">${producto.nombre}</h2>
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text text-danger">Valor:$ ${producto.valor}</p>
          <div class="d-grid gap-2">
            <button class="btn btn-warning p-2" onclick="agregarAlCarrito('${producto.nombre}', ${producto.valor})">Comprar</button>
          </div>
        </div>
        </div>
      `;
      contenedor.append(divProducto);
    });
  }

  mostrarProductos(productosLista); 


// formulario // 

const miFormulario = Document.getElementById(form)
miformulario.addEventListener("submit",validarformulario)

function validarformulario(e) {
 e.preventdefault();

 const formulario = e.target;

const mail = document.getElementById("mail").value.trim().toLowerCase();
const mensaje = document.getElementById("mensaje").value.trim();

  // Validar mensaje
  if (nombre === "") {
    alert("Por favor, introduce tu ,mail.");
    return;
  }

  // Validar mail
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
    alert("Por favor, introduce un mail válido.");
    return;
  }
alert("gracias por su consulta, la responderemos a la brevedad")
}





























