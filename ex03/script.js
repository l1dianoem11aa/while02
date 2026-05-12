let numeroSecreto = 7;
let tentativa;
let contador = 0;

do {
    tentativa = parseInt(prompt("Tente adivinhar o número entre 1 e 10:"));

    contador++;

    if (tentativa !== numeroSecreto) {
        alert("Número incorreto. Tente novamente.");
    }

} while (tentativa !== numeroSecreto);

alert("Parabéns! Você acertou em " + contador + " tentativas.");