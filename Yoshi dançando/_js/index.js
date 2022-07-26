// centralizar o yoshi
var yoshi = document.getElementById('yoshiDancante');
var larguraYoshi = yoshi.offsetWidth; // variável que armazena a largura da div do yoshi
var larguraJanela = window.innerWidth; // variável que armazena a largura da janela
var distanciaEsquerda = parseInt((larguraJanela - larguraYoshi) / 2); // variável que realiza a conta da distância
// da esquerda 

// calculando agora o top
var alturaYoshi = yoshi.offsetHeight; // variável que armazena a altura do div do yoshi
var alturaJanela = window.innerHeight; // variável que armazena a altura da janela
var distanciaTop = parseInt((alturaJanela - alturaYoshi) / 2);

// adicionar os valores agora em top e left
yoshi.style.left = `${distanciaEsquerda}px`;
yoshi.style.top = `${distanciaTop}px`;

var botao = document.getElementById("interruptor");

function alterarFundo() {
    var corFundo = setTimeout(function() {
        document.body.style.backgroundColor = "red";
        voltarVerde();
    }, 100);


}

function voltarVerde() {
    corFundo = setTimeout(
        function() {
            document.body.style.backgroundColor = "#478c49";
            fundoAzul();
        }, 100
    )

}

function fundoAzul() {
    corFundo = setTimeout(
        function() {
            document.body.style.backgroundColor = "blue";
            fundoAzulClaro()
        }, 100
    )
}

function fundoAzulClaro() {
    corFundo = setTimeout(
        function() {
            document.body.style.backgroundColor = "#00ffff";
            fundoMagenta()
        }, 100
    )
}

function fundoMagenta() {
    corFundo = setTimeout(
        function() {
            document.body.style.backgroundColor = "#ff00ff";
            alterarFundo()
        }, 100
    )
}


function desligarLuzes() {
    clearTimeout(corFundo);
    document.body.style.backgroundColor = "#478c49";
}

// rodando o yoshi em 360 graus
const tempo = 30;
const incrementoGraus = 10;
var contador = 0;
var animacao;
var yoshiGira = document.getElementById("yoshiDancante");
var parar = document.getElementById('parar');
var ligar = document.getElementById("rodar");

function rodarYoshi() {
    animacao = setInterval(function() {
        yoshiGira.style.transform = `rotate(${contador * incrementoGraus}deg)`;
        contador++;
    }, tempo);
    parar.disabled = false;
    ligar.disabled = true;
}

function pararYoshi() {
    clearInterval(animacao);
    yoshiGira.style.transform = `rotate(0deg)`;
    parar.disabled = true;
    ligar.disabled = false;
}