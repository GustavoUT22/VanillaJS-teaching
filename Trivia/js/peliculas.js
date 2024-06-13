//preguntas de pelicula
const preguntas = [
  {
    pregunta: "¿En qué película aparece Jack Nicholson?",
    respuestas: [
      "50 sombras de gray",
      "El resplandor",
      "Intensamente",
      "Silen Hill",
    ],
    correcta: 1,
  },
  {
    pregunta: "¿En qué genero de cine se encuentra la película V de vendetta?",
    respuestas: ["Thriller psicológico", "Drama", "Ciencia Ficción", "Romance"],
    correcta: 2,
  },
  {
    pregunta: "¿Cuáles eran los personajes principales del TITANIC?",
    respuestas: [
      "Jack Dawson y Rose DeWitt Bukater",
      "Noah Caulhon y Allie Halminton",
      "Ryan Reynolds y Blake Lively",
      "Romeo Montesco y Julieta Capuleto",
    ],
    correcta: 0,
  },
];

//variables globales que usaremos mas adelante
let indice_aleatorio = 0;
let pregunta_txt = "";
let puntos = 0;

//cuando se cargue la pagina quiero que se ejecute la función iniciar
window.onload = iniciar;

function iniciar() {
  console.log("iniciando");
  loadQuestions();
  if (localStorage.getItem("SCORE") != null) {
    localStorage.removeItem("SCORE");
  }
}

//cuando se carga la aplicación quiero que se carguen las preguntas

function loadQuestions() {
  if (preguntas.length > 0) {
    //generamos un indice aleatorio para saber con cual pregunta empezamos
    indice_aleatorio = Math.floor(Math.random() * preguntas.length);

    //innecesario
    pregunta_txt = "";

    //este string concateanra todas las preguntas

    //primera pregunta
    pregunta_txt = `
    <p class="pregunta">${preguntas[indice_aleatorio].pregunta}</p>
    <button id="opcion0" class="botonTrivias" onclick="verificarRespuestaCorrecta(0, ${preguntas[indice_aleatorio].correcta})">${preguntas[indice_aleatorio].respuestas[0]}</button>
    <button id="opcion1" class="botonTrivias" onclick="verificarRespuestaCorrecta(1, ${preguntas[indice_aleatorio].correcta})">${preguntas[indice_aleatorio].respuestas[1]}</button>
    <button id="opcion2" class="botonTrivias" onclick="verificarRespuestaCorrecta(2, ${preguntas[indice_aleatorio].correcta})">${preguntas[indice_aleatorio].respuestas[2]}</button>
    <button id="opcion3" class="botonTrivias" onclick="verificarRespuestaCorrecta(3, ${preguntas[indice_aleatorio].correcta})">${preguntas[indice_aleatorio].respuestas[3]}</button>
`;

    //en el elemento seleccionado se agregará el string concatenado
    document.getElementById("pregunta").innerHTML = pregunta_txt;

    //elimina la pregunta actual del array
    preguntas.splice(indice_aleatorio, 1);
  } else {
    window.location.href = "../html/resultados.html";
  }
}

//la función verificar recibirá la respuesta correcta y el indice seleccionado
function verificarRespuestaCorrecta(indice, correcta) {
  //si en caso es correcta que summe 5
  if (correcta === indice) {
    puntos = puntos + 5;
  }

  //setea los puntos en el localStorage
  localStorage.setItem("SCORE", puntos);

  //una vez seleccionada una opción te llev
  document.getElementById("opcion0").disabled = true;
  document.getElementById("opcion1").disabled = true;
  document.getElementById("opcion2").disabled = true;
  document.getElementById("opcion3").disabled = true;
}

document.getElementById("siguienteTrivia").addEventListener("click", () => {
  loadQuestions();
});
