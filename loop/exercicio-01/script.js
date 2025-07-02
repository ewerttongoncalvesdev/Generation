// Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5. Veja os exemplos abaixo:

const readline = require("readline-sync");

let primeiroNumero = readline.questionInt("Digite o primeiro numero: ");
let segundoNumero = readline.questionInt("Digite o segundo numero: ");


if (primeiroNumero < segundoNumero){
    
    for(let i = primeiroNumero; i < segundoNumero; i++){

        if ((i % 3  ) === 0 && (i % 5) === 0){
            console.log(`${i} e ${segundoNumero} é multiplo de 3 e 5`);
        } 
    }
} 

