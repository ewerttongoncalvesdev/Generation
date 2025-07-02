// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

const readline = require ("readline-sync");

let numeroA = readline.questionInt("Digite o numero A: ");
let numeroB = readline.questionInt("Digite o numero B: ");
let numeroC = readline.questionInt("Digite o numero C: ");
let soma = numeroA + numeroB;

// Laço de condição
if(soma > numeroC){
    console.log(`${numeroA}+${numeroB} = ${soma} > ${numeroC}`);
    console.log("A Soma de A + B é maior que C");

} else if(soma < numeroC){
    console.log(`${numeroA}+${numeroB} = ${soma} < ${numeroC}`);
    console.log("A Soma de A + B é Menor do que C");

}else if(soma = numeroC){
    console.log(`${numeroA}+${numeroB} = ${soma} = ${numeroC}`);
    console.log("A soma de A + B é Igual a C");
}

