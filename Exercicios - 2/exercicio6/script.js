document.querySelector("#btVerificar").addEventListener("click", function() {
  let nota = Number(document.querySelector("#nota").value);
  let resultado = document.querySelector("#resultado");

  if (nota > 6) {
      resultado.innerText = "Aprovado";
  } else if (nota >= 4 && nota <= 6) {
      resultado.innerText = "Precisa fazer prova substitutiva";
  } else {
      resultado.innerText = "Reprovado";
  }
});
