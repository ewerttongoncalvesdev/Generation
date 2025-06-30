// Impotamos o pacote
const readline = require ("readline-sync");

let primeiraNota = readline.questionFloat("Digite a primeira nota: ");
let segundaNota = readline.questionFloat("Digite a segunda nota: ");
let terceiraNota = readline.questionFloat("Digite a terceira nota: ");
let quartaNota = readline.questionFloat("Digite a quarta nota: ");

let media = (primeiraNota+segundaNota+terceiraNota+quartaNota)/4


// Saida
console.log(media.toFixed(1));