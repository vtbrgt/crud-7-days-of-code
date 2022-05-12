const formulario = document.querySelector(".js-form");
const nome = formulario.querySelector(".js-field__name");
const dataDeNascimento = formulario.querySelector(".js-field__birth-date");
const btn = formulario.querySelector(".botao");
const tBody = document.getElementById("corpoTabela");

/* função para imprimir nome e data de nascimento no console */
const enviarFormulario = (event) => {
  event.preventDefault();
  console.log(nome.value);
  console.log(dataDeNascimento.value);
  formulario.reset();
  erro.innerHTML = "";
};

/* chamada de funções */
formulario.addEventListener("submit", enviarFormulario);
nome.addEventListener("input", validaNome);
btn.addEventListener("click", guardaDados);

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

/* função para coletar os dados do formulário e inserir em objeto "pessoa" */
function guardaDados() {
  let pessoa = new Object();
  pessoa.nome = nome.value;
  pessoa.dataDeNascimento = dataDeNascimento.value;

  console.log(pessoa.valueOf());

  /* salvando objeto no LocalStorage */
  localStorage.setItem("dadosPessoas", JSON.stringify(pessoa));

  /* recuperar e mostrar no console o objeto salvo */
  let pessoas = localStorage.getItem("dadosPessoas") || [];
  /* console.log(objetoRecuperado); */

  /*  buscarConteudo(); */
}

/* function buscarConteudo() {
  const verificador = JSON.parse(localStorage.getItem("dadosPessoas"));

  if (verificador != null) {
    let tr = "";
    verificador.map((conteudo) => {
      tr += `<tr>
                <td>${conteudo.nome}</td>
                <td>${conteudo.dataDeNascimento}</td>
              </tr>`;
    });
    tBody.innerHTML = tr;
    tr.classList.add("flex justify-between");
  }
}
 */
