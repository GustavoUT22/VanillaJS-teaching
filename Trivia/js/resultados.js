function pintarResultado() {
  let puntaje = localStorage.getItem("SCORE");
  let puntajeContenedor = document.getElementById("score");

  if (!puntaje) {
    puntajeContenedor.innerHTML = 0 + " puntos";
  } else {
    puntajeContenedor.innerHTML = localStorage.getItem("SCORE") + " puntos";
  }
}
pintarResultado();
