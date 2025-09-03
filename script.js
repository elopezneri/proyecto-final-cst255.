function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    alert("Todos los campos son obligatorios.");
    return false;
  }

  if (!email.includes("@")) {
    alert("Por favor, ingrese un correo válido.");
    return false;
  }

  alert("¡Formulario enviado con éxito!");
  return true;
}
