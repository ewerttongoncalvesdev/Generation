// Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

const readline = require("readline-sync");

let produto = readline.questionInt("Escolha seu produto de 1 a 6: ");
let quantidadeProduto = readline.questionInt("Escolha quantos voce quer? ");
let valorUnitario;
let valorTotal;

// Codigo dos produtos
switch(produto){
    case 1:
        valorUnitario = 10;
        valorTotal = valorUnitario * quantidadeProduto;
        console.log("Cachorro quente");
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
        break;

    case 2:
        valorUnitario = 15;
        valorTotal = valorUnitario * quantidadeProduto;
        console.log("X - Salada");
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
        break;

    case 3:
        valorUnitario = 18;
        valorTotal = valorUnitario * quantidadeProduto;
        console.log("X - bacon");
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
        break;

    case 4:
        valorUnitario = 12;
        valorTotal = valorUnitario * quantidadeProduto;
        console.log("Bauru");
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
        break;

    case 5:
        valorUnitario = 8;
        valorTotal = valorUnitario * quantidadeProduto;
        console.log("Refrigerante");
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
        break;

    case 6:
        valorUnitario = 13;
        valorTotal = valorUnitario * quantidadeProduto;
        console.log("Suco de laranja");
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
        break;

}
