     let numero1 = document.querySelector("#numero1");
     let numero2 = document.querySelector("#numero2");
     let btSoma = document.querySelector("#btSoma");
     let btSubtrai = document.querySelector("#btSubtrai");
     let btDivide = document.querySelector("#btDivide");
     let btMultiplica = document.querySelector("#btMultiplica");
     let resultado = document.querySelector("#resultado");

     function calcularSoma() {
          let num1 = Number(numero1.value);
          let num2 = Number(numero2.value);
          let soma = num1 + num2;
          resultado.textContent =  Number(soma);
          }

     function calcularSubtracao() {
          let num1 = Number(numero1.value);
          let num2 = Number(numero2.value);
          let subtrai = num1 - num2;
          resultado.textContent =  Number(subtrai);
          }
     
     function calcularDivisao() {
          let num1 = Number(numero1.value);
          let num2 = Number(numero2.value);
          let divide = num1 / num2;
          resultado.textContent =  Number(divide);
          }

     function calculaMultiplica() {
          let num1 = Number(numero1.value);
          let num2 = Number(numero2.value);
          let multiplica = num1 * num2;
          resultado.textContent =  Number(multiplica);
          }

          btSoma.onclick = function() {
           calcularSoma()
          }
     
          btSubtrai.onclick = function() {
           calcularSubtracao()
          } 
          
          btDivide.onclick = function() {
           calcularDivisao()
          }
         
          btMultiplica.onclick = function() {
           calculaMultiplica()
          } 
              