// Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
// 2: Listar todos os Clientes na fila
// 3: Chamar (retirar) uma pessoa da fila 
// 0: O programa deve ser finalizado. 
// Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.
// * Para resolver este exercício, não se esqueça de criar a Classe Queue
// 1 - Adicionar Cliente na Fila / 2 - Lista todos os clientes / 3 - Retirar cliente da fila / 0 - Sair   ---- Entre com a opção desejada:

import ler = require("readline-sync");
import {Queue} from "../queuMetodos";
import  {Stack} from "../stackMetodos";
import { Readline } from "readline/promises";

const fila = new Queue<string>();
let continua: string = "s";

do{
    console.log("# # # #            M E N U            # # # #");
    console.log("# # # # 1 - Adicionar Cliente na Fila # # # #");
    console.log("# # # # 2 -  Litar todos os Clientes  # # # #");
    console.log("# # # # 3 - Retirar clientes da  Fila # # # #");
    console.log("# # # # 4 -           Sair            # # # #");
    let opcao =ler.questionInt("\nEntre com a opcao desejada: \n");
    switch (opcao) {
        case 1:
           fila.enqueue(ler.question("Nome: "));
                console.log("Cliente adicionado na fila com sucesso!");
            break;
        case 2:
            console.log("Clientes na fila!");
            fila.printQueue();
            break;
        case 3:
            let cliente = fila.dequeue();
                if (cliente){
                console.log(`\nCliente chamado (a): ${cliente}\n`);
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