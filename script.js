function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "¡GitHub funciona! Has creado tu primera web.";
}
function calcularIVA() {

  let precio =
      parseFloat(
          document.getElementById("precio").value
      );

  let total = precio * 1.21;

  document.getElementById("resultado").textContent =
      "Precio con IVA: " + total.toFixed(2) + " €";
}
