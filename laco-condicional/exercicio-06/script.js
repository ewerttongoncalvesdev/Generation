// Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.

const readline = require("readline-sync");

let nome = readline.question("Digite seu nome: ");
let codigoCargo = readline.questionInt("Escolha o codigo de 1 a 6: ");
let salario = readline.questionInt("Digite seu atual salario: ");
let cargo;
let reajuste;
let novoSalario;

// Codigo dos produtos
switch(codigoCargo){
    case 1:
        cargo = "Gerente";
        reajuste = 0.1;
        novoSalario = salario + (reajuste * salario);
        console.log(`${nome} seu cargo é ${cargo} seu novo salario é R$ ${novoSalario.toFixed(2)}`);
        break;

    case 2:
        cargo = "Vendedor";
        reajuste = 0.07;
        novoSalario = salario + (reajuste * salario);
        console.log(`${nome} seu cargo é ${cargo} seu novo salario é R$ ${novoSalario.toFixed(2)}`);
        break;

    case 3:
        cargo = "Supervisor";
        reajuste = 0.09;
        novoSalario = salario + (reajuste * salario);
        console.log(`${nome} seu cargo é ${cargo} seu novo salario é R$ ${novoSalario.toFixed(2)}`);
        break;

    case 4:
        cargo = "Motorista";
        reajuste = 0.06;
        novoSalario = salario + (reajuste * salario);
        console.log(`${nome} seu cargo é ${cargo} seu novo salario é R$ ${novoSalario.toFixed(2)}`);
        break;

    case 5:
        cargo = "Estoquista";
        reajuste = 0.05;
        novoSalario = salario + (reajuste * salario);
        console.log(`${nome} seu cargo é ${cargo} seu novo salario é R$ ${novoSalario.toFixed(2)}`);
        break;

    case 6:
        cargo = "Tecnico de TI";
        reajuste = 0.08;
        novoSalario = salario + (reajuste * salario);
        console.log(`${nome} seu cargo é ${cargo} seu novo salario é R$ ${novoSalario.toFixed(2)}`);
        break;

}