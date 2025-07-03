// Escreva um programa para criar uma Collection Set do tipo number, inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado na Coction Set, exiba na tela a mensagem: O Número NN foi encontrado! Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!

import ler = require("readline-sync");
let list: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

console.log("Digite um numero: ")
let numero = ler.questionInt();

let posicao = -1;
let index = 0;

    list.forEach((encontrado) =>{
        if(encontrado === numero){
            posicao = index;
        }
        index++;
    })

    if(posicao !== -1){
        console.log(`O número ${numero} foi entrado!`);
    } else{
        console.log(`O número ${numero} não foi entrado`);
    }