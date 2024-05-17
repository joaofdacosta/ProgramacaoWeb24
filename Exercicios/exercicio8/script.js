let codigo = document.querySelector("#codigo");
let btVerificar = document.querySelector("#btVerificar");
let resultado = document.querySelector("#resultado");

function verificarProduto() {
    let codigoProduto = codigo.value;
    let mensagem;

    if (codigoProduto === "001") {
        mensagem = "Parafuso";
    } else if (codigoProduto === "002") {
        mensagem = "Porca";
    } else if (codigoProduto === "003") {
        mensagem = "Prego";
    } else {
        mensagem = "Diversos";
    }

    resultado.innerText = "Produto: " + mensagem;
}

btVerificar.onclick = function() {
    verificarProduto();
}