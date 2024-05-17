    let valor1 = document.querySelector("#valor1");
    let valor2 = document.querySelector("#valor2");
    let btCalcular = document.querySelector("#btCalcular");
    let resultado = document.querySelector("#resultado");

    function retornarMaior() {
      let vlr1 = Number(valor1.value)
      let vlr2 = Number(valor2.value)
      let maior = vlr1 > vlr2 ? vlr1 : vlr2;
      
  resultado.innerText = "O maior valor é: " + maior;
  }

  btCalcular.onclick = function(){
    retornarMaior();
}