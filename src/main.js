const formulario = document.querySelector(".js-form");
const nome = formulario.querySelector(".js-field__name");
const dataDeNascimento = formulario.querySelector(".js-field__birth-date");

/* função para imprimir nome e data de nascimento no console */
const enviarFormulario = (event) => {
  event.preventDefault();
  console.log(nome.value);
  console.log(dataDeNascimento.value);
  formulario.reset();
  erro.innerHTML = "";
};

/* chamada da função ao dar submit no botão */
formulario.addEventListener("submit", enviarFormulario);
nome.addEventListener("input", validaNome);
/* formulario.addEventListener("submit", redefineMensagem); */

/* função para verificar o uso de apenas letras no input de nome */
let erro = document.querySelector(".span__nome");
function validaNome() {
  const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;
  const nomeTeste = regex.test(nome.value);

  if (!nomeTeste) {
    erro.innerHTML = "Você deve usar apenas letras. Números não são permitidos";
  } else {
    erro.innerHTML = "";
  }
}
