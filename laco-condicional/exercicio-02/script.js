// Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo. Veja os exemplos abaixo:

const readline = require("readline-sync");

let numero = readline.questionInt("Digite um numero: ");
let positivo = numero >= 0;
let negativo = numero < 0;
let numeroDigitado = numero;


// Laço condicional (Verificação de "Positivo / Negativo" e "Impar / Par")
if (numero = positivo){
    if((numeroDigitado % 2) === 0){
        console.log(`O numero ${numeroDigitado} é par e positivo`);
    } else if((numeroDigitado % 2) != 0){
        console.log (`O numero ${numeroDigitado} é impar e positivo`);
    }

}else if(numero = negativo){
    if ((numeroDigitado % 2) === 0){
        console.log(`O numero ${numeroDigitado} é par e negativo`);
    } else if((numeroDigitado % 2) != 0){
        console.log (`O numero ${numeroDigitado} é impar e negativo`);
    }
}
