// Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
// 2: Listar todos os livros da Pilha
// 3: Retirar um livro da pilha 
// 0: O programa deve ser finalizado. 
// Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.

// * Para resolver este exercício, não se esqueça de criar a Classe Stack

// Menu:

import ler = require("readline-sync");
import {Queue} from "../queuMetodos";
import  {Stack} from "../stackMetodos";
import { Readline } from "readline/promises";

const pilha = new Stack<string>();
let continua: string = "s";

do{
    console.log("# # # #            M E N U            # # # #");
    console.log("# # # # 1 - Adicionar livro na Pilha  # # # #");
    console.log("# # # # 2 -  Listar todos os livros   # # # #");
    console.log("# # # # 3 - Retirar livro da pilha    # # # #");
    console.log("# # # # 4 -           Sair            # # # #");

        let opcao =ler.questionInt("\nEntre com a opcao desejada: \n");
            switch (opcao) {
                
                case 1:
                   pilha.push(ler.question("Nome: "));
                        console.log("Livro adicionado com sucesso!");
                    break;

                case 2:
                    console.log("Lista de livros na Pilha!");
                        pilha.printStack();
                break;

                case 3:
                    let livro = pilha.pop();
                        if (livro){
                            console.log(`\nCliente chamado (a): ${livro}\n`);
                    }
                break;

                case 0:
                    continua = "a";
                        console.log("Programa finalizado!");
                break;
                default:
                console.log("Opção invalida, tente novamente!");

            }

} while (continua === "s");
