let cotacao = document.querySelector("#cotacao");
let bt1 = document.querySelector("#bt1");
let bt2 = document.querySelector("#bt2");
let bt5 = document.querySelector("#bt5");
let bt10 = document.querySelector("#bt10");
let resultado = document.querySelector("#resultado");

function calcularAumento(porcentagem) {
    let valorCotacao = Number(cotacao.value);
    let aumento = valorCotacao * (porcentagem / 100);
    let valorFinal = valorCotacao + aumento;
    resultado.innerText = `Cotação com aumento de ${porcentagem}%: R$ ${valorFinal.toFixed(2)}`;
}

bt1.onclick = function() {
    calcularAumento(1);
}

bt2.onclick = function() {
    calcularAumento(2);
}

bt5.onclick = function() {
    calcularAumento(5);
}

bt10.onclick = function() {
    calcularAumento(10);
}
