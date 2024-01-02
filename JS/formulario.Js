//Formulario//
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", validarFormularioFormulario);

function validarFormularioFormulario(e) {
  e.preventDefault();

  const mail = document.getElementById("mail").value.trim().toLowerCase();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (mensaje === "") {
    mostrarAlert("Por favor, introduce tu mensaje.", "error", document.getElementById("alerta"));
    return;
  }

  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
    mostrarAlert("Por favor, introduce un correo electrónico válido.", "error", document.getElementById("alerta"));
    return;
  }

  mostrarAlert("Gracias por tu consulta, la responderemos a la brevedad.", "success", document.getElementById("alerta"));
  formulario.reset();
}

function mostrarAlert(mensaje, tipo) {
  Toastify({
    duration: 3000,
    text: mensaje,
    className: tipo,
    style: {
      background: tipo === "success" ? "linear-gradient(to right, #00b09b, #96c93d)" : "linear-gradient(to right, #FF6F61, #9E5D49)",
    },
  }).showToast();
}