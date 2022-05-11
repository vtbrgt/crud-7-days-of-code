const formulario = document.querySelector(".js-form");
const nome = formulario.querySelector(".js-field__name");
const dataDeNascimento = formulario.querySelector(".js-field__birth-date");

const enviarFormulario = (event) => {
  event.preventDefault();
  console.log(nome.value);
  console.log(dataDeNascimento.value);
  formulario.reset();
};

formulario.addEventListener("submit", enviarFormulario);
