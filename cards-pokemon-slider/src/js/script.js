// armazenar o botão de avancar em uma constante para ser utilizada
const btnAvancar = document.getElementById("btn-avancar");
//armazenar o botão de retornar em uma constate para ser utilizada
const btnRetornar = document.getElementById("btn-retornar");
// armazenar os cards em uma constante para serem utilizados
const cartoes = document.querySelectorAll(".cartao");
// variavel contador para alterar o cartão selecionado
var cartaoAtual = 0;

console.log(btnAvancar);
console.log(btnRetornar);

// criando função para esconder os cartoes
function esconderCartao() {
    const selecionado = document.querySelector(".selecionado")
    selecionado.classList.remove("selecionado");
}

//criando função para exibir cartão
function exibirCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

// adicionando o evento de click no botão avancar
btnAvancar.addEventListener(
  "click",
  //função para selecionar os cartões atual e next
  function () {
    if (cartaoAtual === cartoes.length - 1) {
      return;
    }
    // removendo a classe do cartão que está aparecendo
    esconderCartao();
    // incrementando o valor do cartão atual para "ir para o próximo"
    cartaoAtual++;
    // adicionando a classe no cartão novo
    exibirCartao(cartaoAtual)
  }
);

// adicionando o evento de click no botao retornar
btnRetornar.addEventListener(
  "click",
  //criando função que irá retornar o valor
  function () {
    // a classe só pode retornar caso o valor do cartão atual seja maior ou igual a zero
    if (cartaoAtual > 0) {
      cartoes[cartaoAtual].classList.remove("selecionado");
      cartaoAtual--;
      exibirCartao(cartaoAtual)
    }
  }
);
