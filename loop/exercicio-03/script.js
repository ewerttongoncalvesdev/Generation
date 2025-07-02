// Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa. Veja o exemplo abaixo:

const readline = require("readline-sync");

let menoresDe21 = 0;
let maioresDe50 = 0;
let parar = 0;

while (parar == 0){
    let numero = readline.questionInt(`Digite uma idade: `);

// Para menores de 21 anos
    if(numero < 21 && numero > 0){
        menoresDe21++;

            // Para maiores de 50 anos
            } else if(numero > 50){
                maioresDe50++;

            }else if( numero < 0){
                parar++;

            }
}

console.log(`Total de pessoas menores de 21 anos: ${menoresDe21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maioresDe50}`);