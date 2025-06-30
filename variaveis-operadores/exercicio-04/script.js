// Importamos o pacote
const readline = require("readline-sync");

let primeiroNumero = readline.questionInt("Digite primeiro numero: ");
let segundoNumero = readline.questionInt("Digite segund numero: ");
let terceiroNumero = readline.questionInt("Digite terceiro numero: ");
let quartoNumero = readline.questionInt("Digite quarto numero: ");
let resultado = (primeiroNumero * segundoNumero) - (terceiroNumero * quartoNumero);

// Saida
console.log(resultado.toFixed(1));