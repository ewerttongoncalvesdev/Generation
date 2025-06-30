// Importamos o pacote
const readline = require ("readline-sync");

let salarioBruto = readline.questionInt("Digite seu salario bruto: ");
let adicionalNoturno = readline.questionInt("Digite o adicional noturno: ");
let horasExtras = readline.questionInt("Digite as Horas Extras: ");
let desconto = readline.questionInt("Digite o desconto: ");

let salarioLiquido = (horasExtras * 5)+(salarioBruto + adicionalNoturno - desconto);

// Saida
console.log(salarioLiquido.toFixed(2));