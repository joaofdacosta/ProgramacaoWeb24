let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
let refrigerantes = document.querySelector("#refrigerantes");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularTotal() {
    let saborPizza1 = sabor1.value;
    let saborPizza2 = sabor2.value;
    let saborPizza3 = sabor3.value;
    let saborPizza4 = sabor4.value;
    let quantidadeRefrigerantes = Number(refrigerantes.value);

    let totalPizzas = 4 * 12; // Cada sabor custa R$ 12,00
    let totalRefrigerantes = quantidadeRefrigerantes * 7; // Cada refrigerante custa R$ 7,00
    let total = totalPizzas + totalRefrigerantes;

    resultado.innerHTML = `
        <p>Sabores escolhidos:</p>
        <p>Sabor 1: ${saborPizza1}</p>
        <p>Sabor 2: ${saborPizza2}</p>
        <p>Sabor 3: ${saborPizza3}</p>
        <p>Sabor 4: ${saborPizza4}</p>
        <p>Quantidade de Refrigerantes: ${quantidadeRefrigerantes}</p>
        <p>Total das Pizzas: R$ ${totalPizzas.toFixed(2)}</p>
        <p>Total dos Refrigerantes: R$ ${totalRefrigerantes.toFixed(2)}</p>
        <p>Total a pagar: R$ ${total.toFixed(2)}</p>
    `;
}

btCalcular.onclick = calcularTotal;
