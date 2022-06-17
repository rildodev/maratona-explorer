const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");
const buttonPerguntar = document.querySelector("#buttonPerguntar");
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

/* clicar em fazer pergunta */
function fazerPergunta() {
  const pergunta = "<div>" + inputPergunta.value + "</div>";

  /* gerar número aleatório */
  const totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

  /* checa se foi feito pergunta  */
  if (inputPergunta.value == "") {
    alert("Faça uma pergunta!");
    return; /* encerra o if */
  }

  buttonPerguntar.setAttribute(
    "disabled",
    true
  ); /* desabilita o botão para não ficar gerando várias respostas para a pergunta */

  /* gerar resposta */
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];

  elementoResposta.style.opacity = 1;

  /* Sumir a resposta depois de 3 segundos */
  setTimeout(function () {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute(
      "disabled"
    ); /* habilita o botão perguntar após os 3 segundos */
  }, 3000);
}
