const text = document.getElementById("demo")
const text2 = document.getElementById("tip-member")

function billPercentGroup() {
    const percent = document.getElementsByName("percent")
    return percent
}
var percent = billPercentGroup();

function calcular() {
    const billValue = document.getElementById('bill-value').value
    const groupLentgh = document.getElementById("group-lentgh").value
    if (!verficar(billValue) || !verficar(groupLentgh)) { return "" }
    var porcentagem = identifyPercent(percent);
    var individualtip = tipTotal(billValue, porcentagem, groupLentgh);
    var totalPerson = totalInd(billValue, individualtip, groupLentgh)
    text2.innerHTML = `$ ${individualtip.toFixed(2)}`
    text.innerHTML = `$ ${totalPerson.toFixed(2)}`
}

function verficar(input) {
    if (!input) { return window.alert("Insira um valor válido") }
    return input
}

function tipTotal(bill, percent, party) {
    const individualTip = (parseFloat(bill) * percent) / parseFloat(party)
    return individualTip
}

function totalInd(bill, value, party) {
    const totalIndividual = (parseFloat(bill) / parseFloat(party)) + value
    return totalIndividual
}

function identifyPercent(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked === true) {
            var valor = parseFloat(arr[i].value)
            return valor;
        }

    }
}

function reset() {
    text2.innerHTML = `$ 0.00`
    text.innerHTML = `$ 0.00`
    for (let i = 0; i < percent.length; i++) {
        percent[i].checked = false;
    }
    document.getElementById('bill-value').value = 0;
    document.getElementById("group-lentgh").value = 0
}