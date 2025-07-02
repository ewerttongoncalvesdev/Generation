// Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos. Veja o exemplo abaixo:

const readline = require("readline-sync");


let somaPositivos = 0;
let numero;
let parar = true;

    do {
        console.log("Digite um numero inteiro para continuar:");
        numero = readline.questionInt("Digite um numero: ");
    
        if(numero > 0){
            somaPositivos += numero;
        }
            if(numero == 0){
                parar = false;
            }

        } while(parar == true);
    
console.log(`A soma dos numeros positivos e: ${somaPositivos}`);