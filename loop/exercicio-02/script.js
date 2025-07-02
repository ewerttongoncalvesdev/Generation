// Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares. Veja o exemplo abaixo:

const readline = require("readline-sync");

let totalPares = 0
let totalImpares = 0

for(let i = 1; i <11; i++){
    let numero = readline.questionInt(`Digite o ${i} numero: `);

// Para numeros pares
    if((numero % 2) === 0){
        totalPares++;

            //  // Para numros impares
            } else if((numero % 2) != 0){
                totalImpares++;
            }
}
console.log(`Total de numeros pares: ${totalPares}`);
console.log(`Total de numeros impares: ${totalImpares}`);