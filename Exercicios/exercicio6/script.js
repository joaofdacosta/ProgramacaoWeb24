    let valor1 = document.querySelector("#valor1");
    let valor2 = document.querySelector("#valor2");
    let valor3 = document.querySelector("#valor3");
    let valor4 = document.querySelector("#valor4");
    let btCalcular = document.querySelector("#btCalcular");
    let resultado = document.querySelector("#resultado");

    function retornarMenor() {
      let vlr1 = Number(valor1.value)
      let vlr2 = Number(valor2.value)
      let vlr3 = Number(valor3.value)
      let vlr4 = Number(valor4.value)
      let menor = Math.min(vlr1, vlr2, vlr3, vlr4);
      
  resultado.innerText = "O menor valor é: " + menor;
  }

  btCalcular.onclick = function(){
    retornarMenor();
}