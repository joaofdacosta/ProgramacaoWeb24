let pessoas = document.querySelector("#pessoas");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularIngredientes() {
    let numPessoas = Number(pessoas.value);
    let ovos = numPessoas * 2;
    let queijo = numPessoas * 50;
    resultado.innerHTML = `Para ${numPessoas} pessoa(s), você precisará de:<br>
                           ${ovos} ovos<br>
                           ${queijo} gramas de queijo`;
}

btCalcular.onclick = function() {
    calcularIngredientes();
}