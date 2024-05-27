document.querySelector("#btVerificar").addEventListener("click", function() {
  const nome1 = document.querySelector("#nome1").value;
  const ano1 = Number(document.querySelector("#ano1").value);
  const nome2 = document.querySelector("#nome2").value;
  const ano2 = Number(document.querySelector("#ano2").value);
  const nome3 = document.querySelector("#nome3").value;
  const ano3 = Number(document.querySelector("#ano3").value);

  const anoAtual = new Date().getFullYear();
  
  const pessoas = [
      { nome: nome1, idade: anoAtual - ano1 },
      { nome: nome2, idade: anoAtual - ano2 },
      { nome: nome3, idade: anoAtual - ano3 }
  ];

  pessoas.sort((a, b) => b.idade - a.idade);

  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = `
      Pessoa mais velha: ${pessoas[0].nome} - ${pessoas[0].idade} anos<br>
      Segunda pessoa mais velha: ${pessoas[1].nome} - ${pessoas[1].idade} anos<br>
      Terceira pessoa mais velha: ${pessoas[2].nome} - ${pessoas[2].idade} anos
  `;
});
