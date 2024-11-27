/* 4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.
Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:
a) Leia o conteúdo do arquivo animais.json.

b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

d) Modifique o habitat de um animal existente no array de animais.

e) Remova um animal do array de animais.

f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

g) Imprima no console o objeto JavaScript resultante das operações. */

let animais = require('./animais.json');

console.log(animais);

const novoAnimal = {
    id: 4,
    nome: 'Gato',
    tipo: 'Mamífero',
    habitat: 'Doméstico'
}

animais.animais.push(novoAnimal)
animais.animais[0].habitat = 'Cerrado';
console.log(animais);

animais.animais.pop();

JSON.stringify(animais);

console.log(animais);


/* 5 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:

id (number): identificador da pessoa.
nome (string): nome da pessoa.
idade (number): idade da pessoa

Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.

Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.

Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original. */

const pessoa = {
    id: 1,
    nome: 'Ana',
    idade: 20
};

const copiaObj = (obj) => objeto = {...obj};
const pessoa2 = copiaObj(pessoa);

pessoa2.nome = 'Dina';
console.log(pessoa);
console.log(pessoa2);