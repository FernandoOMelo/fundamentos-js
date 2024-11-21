/*1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).*/
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const arraysJuntos = juntaArray(arr1, arr2, arr3);
console.log(`A resolução do primeiro desafio é: ${arraysJuntos}`);
function juntaArray(...array){
    return [].concat(...array);
}

/* 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce. */

const valores = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9 ,10];
let valoresSomados = valores.reduce((acumulador, valores) => acumulador + valores, 0);
console.log(`A resolução do segundo desafio é: ${valoresSomados}`);

/* 3 - Considere duas listas de cores: Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final. */

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];
const coresJuntas = [... new Set(coresLista1.concat(coresLista2))];
console.log(`A resolução do terceiro desafio é: ${coresJuntas}`);

/* 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = [];
separaPares(numeros);
function separaPares (arrayNumeros) {
    for (const numero of arrayNumeros) {
        if(numero % 2 == 0){
            numerosPares.push(numero);
        }
    }
    console.log(`A resolução do quarto desafio é: ${numerosPares}`);
}

/* 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5. */
const numerosQuintoDesafio = [2, 3, 5, 7, 8, 9, 11, 13, 15, 18, 19, 22, 24, 27, 29, 31, 33, 35, 37, 40];

const selecionaNumeros = (numeros) => {
    let arr = [];
    for (const numero of numeros) {
        if (numero > 5 && numero % 3 == 0){
            arr.push(numero);
        }
    }
    return arr;
}

console.log(`A resolução do quinto desafio é: ${selecionaNumeros(numerosQuintoDesafio)}`)
