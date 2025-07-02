// Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar sangue. Veja os exemplos abaixo:

const readline = require("readline-sync");

let nomeDoador = readline.question("Digite o nome do Doador: ");
let idadeDoador = readline.questionInt("Digite a idade do doador: ");
let doadorAtivo = readline.questionInt("Primeira doacao de sangue?   1 - Sim  |  2 - Nao:  ");


// Laço Condicional (Idade e doador ativo)
if (doadorAtivo ===1){
    doadorAtivo = true;
}else{
    doadorAtivo = false;
}

if (idadeDoador >= 18 && idadeDoador < 69){
    if (idadeDoador < 60 || (idadeDoador > 60 && !doadorAtivo)){
        console.log(`${nomeDoador} esta apto para doar sangue!`);
    }else {
        console.log(`${nomeDoador} nao esta apto para doar sangue!`);
    }
}else{
    console.log(`${nomeDoador} nao esta apto para doar sangue!`);
}