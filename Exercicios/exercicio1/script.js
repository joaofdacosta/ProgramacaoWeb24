let campoValorProduto = document.querySelector("#valorProduto");
let campoValorPago = document.querySelector("#valorPago");
let btCalcularTroco = document.querySelector("#btResultado");
let resultado = document.querySelector("#resultado");

function calcularTroco() {
    let valorProduto = parseFloat(campoValorProduto.value);
    let valorPago = parseFloat(campoValorPago.value);

    if (isNaN(valorProduto) || isNaN(valorPago)) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    let troco = valorPago - valorProduto;

    if (troco < 0) {
        resultado.textContent = "O valor pago é insuficiente.";
    } else {
        resultado.textContent = "Troco: R$ " + troco.toFixed(2);
    }
}

btCalcularTroco.onclick = function() {
    calcularTroco();
};