/* 4 -  Crie um array de objetos JavaScript representando informações de animais. 
        Cada objeto deve conter pelo menos as seguintes propriedades:

    id (number): identificador do animal.
    nome (string): nome do animal.
    especie (string): espécie do animal.
    idade (number): idade do animal.

Crie uma função chamada ordenarAnimais que receba como parâmetro uma 
função de comparação para realizar a ordenação do array. */

const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

function compararIdadeCrescente(a, b) {
    return a.idade - b.idade;
}

function compararIdadeDecrescente(a, b) {
    return b.idade - a.idade;
}

console.log("Ordenado por idade crescente:");
console.log(ordenarAnimais(compararIdadeCrescente));

console.log("Ordenado por idade decrescente:");
console.log(ordenarAnimais(compararIdadeDecrescente));



