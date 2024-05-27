let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let btComparar = document.querySelector("#btComparar");
let resultado = document.querySelector("#resultado");

btComparar.addEventListener("click", function() {
    let num1 = parseInt(numero1.value);
    let num2 = parseInt(numero2.value);

    if (num1 > num2) {
        resultado.textContent = "O primeiro número é maior que o segundo.";
    } else if (num1 < num2) {
        resultado.textContent = "O primeiro número é menor que o segundo.";
    } else {
        resultado.textContent = "Os números são iguais.";
    }
});
