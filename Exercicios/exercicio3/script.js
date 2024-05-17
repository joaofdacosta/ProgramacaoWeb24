     let saldo = document.querySelector("#saldo");
     let btCalcula = document.querySelector("#btCalcula");
     let resultado = document.querySelector("#resultado");

     function calcularReajuste() {
          let saldoAtual = Number(saldo.value);
          let calcula = saldoAtual * 0.01;
          let saldoReajustado = saldoAtual + calcula;
          resultado.innerText = "Saldo com reajuste de 1% :" + saldoReajustado;
          }

          btCalcula.onclick = function() {
           calcularReajuste()
          }