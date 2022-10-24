function valida_envia() {
  //valido el nombre
  if (document.fvalida.nombre.value.length == 0) {
    alert("Tiene que escribir su nombre");
    document.fvalida.nombre.focus();
    return 0;
  }

  if (document.fvalida.email.value.length == 0) {
    alert("Tiene que escribir su email");
    document.fvalida.email.focus();
    return 0;
  }

  if (document.fvalida.telefono.value.length == 0) {
    alert("Tiene que escribir su numero de contacto");
    document.fvalida.telefono.focus();
    return 0;
  }

  //el formulario se envia
  alert("Muchas gracias por enviar el formulario");
  document.fvalida.submit();
}
