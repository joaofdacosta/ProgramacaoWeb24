    let numero = document.querySelector("#numero");
    let btVerificar = document.querySelector("#btVerificar");
    let resultado = document.querySelector("#resultado");

    function retornarResposta() {
    let valor = Number(numero.value);
      if (valor % 2 !== 0) {
        resultado.innerText = "O número " + valor + " é ímpar.";
       } else {
        resultado.innerText = "O número " + valor + " não é ímpar.";
    }
  }

  btVerificar.onclick = function(){
    retornarResposta();
}