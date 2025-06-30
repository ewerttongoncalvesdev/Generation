// Importamos pacote
const readline = require ("readline-sync");

let salario = readline.questionInt("Digite o Salario: ");
let abono = readline.questionInt ("Digite o Abono: ");
let novoSalario = salario + abono;


// Saida
console.log(novoSalario.toFixed(2));