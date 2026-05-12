let soma = 0;
let resposta;

do {
    let numero = parseInt(prompt("Digite um número inteiro:"));

    soma += numero;

    resposta = prompt("Deseja inserir outro número? (s/n)").toLowerCase();

} while (resposta === "s");

alert("A soma total é: " + soma);