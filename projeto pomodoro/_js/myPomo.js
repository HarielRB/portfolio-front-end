var mins = document.getElementById("min").innerHTML;
var segs = document.getElementById("seg").innerHTML;
var botaoInicio = document.getElementById("start");

mins = parseInt(mins);
segs = parseInt(segs);
var timerAlterado;
contAtividade = 0;

function iniciar() {
    timerAlterado = setInterval(alterarTempo, 1000);
    botaoInicio.disabled = true;
}

function alterarTempo() {

    if (segs == 00) {
        minutosDecrement();
        segs = 59;

    } else {
        segs -= 1;
    }


    if (mins === 0 && segs === 0) {
        clearInterval(timerAlterado);
        botaoInicio.disabled = false;
        if (contAtividade >= 0 && contAtividade % 2 == 0) {
            descanso();
            contAtividade += 1;
            atualizarRepet();
        } else {
            atividade();
            contAtividade += 1;
        }
    }
    if (mins < 10) {
        document.getElementById("min").innerHTML = "0" + mins;
    } else {
        document.getElementById("min").innerHTML = mins;
    }
    if (segs < 10) {
        document.getElementById("seg").innerHTML = "0" + segs;
    } else {
        document.getElementById("seg").innerHTML = segs;
    }

}

function atualizarRepet() {
    if (contAtividade > 1) {
        document.getElementById("cont").innerHTML = contAtividade - 1;
    } else {
        document.getElementById("cont").innerHTML = contAtividade;
    }

}


function minutosDecrement() {
    mins -= 1;
}

function atividade() {
    mins = '25';
    segs = '0';
    document.body.style.backgroundColor = "rgb(235, 112, 112)";

}

function descanso() {
    mins = '5';
    segs = '0';
    document.body.style.backgroundColor = "#99C2FF";

}

function pausar() {
    clearInterval(timerAlterado);
    botaoInicio.disabled = false;
}

function resetar() {
    clearInterval(timerAlterado);
    botaoInicio.disabled = false;
    mins = 25;
    segs = '00';
    document.getElementById("min").innerHTML = mins;
    document.getElementById("seg").innerHTML = segs;

}

function adicionar() {
    var newTarefa = prompt("Insira uma nova tarefa: ");
    document.getElementById("text").innerHTML = newTarefa;
}