// Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede: Mostre na tela todas as cores adicionadas.  Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.

import ler = require("readline-sync");
let cores: Array<string> = new Array<string>();
    for (let i = 0; i < 5; i++){
        cores.push(ler.question("Digite uma cor: "));
}
    cores.forEach( num =>
        console.log(num)
    )
    cores.sort();
        console.table(cores)