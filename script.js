var secretNumber = parseInt(Math.random() * 1000 + 1); //Randomizar a escolha dos Números
var currentAttempt = 10; //Número máximo de tentativas

//Função do botão Chutar-----------------------------------
function Chutar() {
  var resultado = document.getElementById("resultado"); // Correção: passar o ID correto
  var chute = parseInt(document.getElementById("valor").value); //Pegar o valor do input como number
  var list = document.getElementById("list"); //criar a lista com os números já digitados

  if (currentAttempt > 0) {
    list.innerHTML += `<li>${chute}</li>`;
  }
  //Acabou as tentativas
  if (currentAttempt === 1) {
    resultado.innerHTML =
      "Que pena! Mais sorte da próxima vez. \nO número secreto era: " +
      secretNumber;
    //Resetar();
    return;
  }

  if (chute == secretNumber) {
    resultado.innerHTML = "Parabéns você acertou!";
  } else if (chute > 1000 || chute < 1) {
    resultado.innerHTML = "Ops! Escolha um número entre 1 e 1000";
  } else if (chute > secretNumber) {
    currentAttempt--;
    resultado.innerHTML =
      "Você errou! O número secreto é menor, que " +
      chute +
      ", agora você tem " +
      currentAttempt +
      " tentativas.";
  } else if (chute < secretNumber) {
    currentAttempt--;
    resultado.innerHTML =
      "Você errou! O número secreto é maior que " +
      chute +
      ", agora você tem " +
      currentAttempt +
      " tentativas.";
  }
  document.getElementById("valor").value = "";
}

document.getElementById("valor").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if (currentAttempt == 1) {
      setTimeout(() => {
        Resetar();
      }, 5000);
    }
    Chutar();
  }
});

function Resetar() {
  document.location.reload(false);
}
