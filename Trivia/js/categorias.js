function showName() {
  const nombre = localStorage.getItem("nombre");
  const nombreBienvenida = (document.querySelector("#welcome-name").innerHTML +=
    " " + nombre);
}
showName();
