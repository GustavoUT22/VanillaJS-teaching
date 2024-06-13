const inputName = document.querySelector("#input-name");
const buttonCategories = document.querySelector("#button-categories");

inputName.addEventListener("input", function () {
  localStorage.setItem("nombre", inputName.value);
  console.log(inputName.value);

  if (inputName.value.length > 4) {
    buttonCategories.disabled = false;
  }
});

buttonCategories.addEventListener("click", function () {
  window.location.href = "http://localhost:5500/Trivia/html/categorias.html";
});
