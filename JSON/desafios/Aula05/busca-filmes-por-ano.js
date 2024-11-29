/* 2 - Crie um array de objetos JavaScript representando informações de filmes. 
       Cada objeto deve conter pelo menos as seguintes propriedades:

        id (number): identificador do filme.
        titulo (string): título do filme.
        diretor (string): nome do diretor.
        anoLancamento (number): ano de lançamento do filme.

    Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um 
    novo array contendo apenas os filmes lançados nesse ano.

    Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o 
    array resultante. Em seguida, refaça a operação com outro ano. */

const listaFilmes = require('./filmes.json');
    
const filtrarFilmesPorAno = (lista, ano) => {
    return lista.filter((filme) => filme.anoLancamento === ano);
}
console.log('FILMES ANO DE 1999');
console.log(filtrarFilmesPorAno(listaFilmes, 1999));

console.log('FILMES ANO DE 1994');
console.log(filtrarFilmesPorAno(listaFilmes, 1994));
