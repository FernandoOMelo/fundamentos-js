//**************************** DESAFIOS AULA 1 *******************************//

// //1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

// titulo (string): título do livro.
// autor (string): nome do autor do livro.
// anoPublicacao (number): ano de publicação do livro.
// genero (string): gênero do livro.
const anoAtual = new Date().getFullYear();

const createLivro = ([...propriedades],[...valores]) => {
    let obj = {};
    for(let i = 0; i < propriedades.length; i++ ){
        Object.defineProperty(obj, propriedades[i], {value: valores[i], writable: true, enumerable: true});
    }
    return obj;
}

const propriedadesLivro1 = ['titulo', 'autor', 'anoPublicacao', 'genero'];
const valoresLivro1 = ['Estudos', 'Professor', 2024, 'Educação'];
livro = createLivro(propriedadesLivro1, valoresLivro1);
console.log(livro);
console.log();

// 2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). 
// Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
// Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.
// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.


const anoPublicacaoLivro2 = 1996;
const propriedadesLivro2 = ['titulo', 'autor', 'anoPublicacao', 'genero', 'idadePublicacao'];
const valoresLivro2 = ['Receitas', 'Chef Cozinheira', anoPublicacaoLivro2, 'Culinária', (anoAtual - anoPublicacaoLivro2)];
livro2 = createLivro(propriedadesLivro2, valoresLivro2);
console.log(livro2);
const detalhesLivro2 = `O livro ${livro2.titulo} foi publicado no ano de ${livro2.anoPublicacao}, com isso podemos dizer que esse livro foi publicados à ${livro2.idadePublicao} anos!`
console.log();
console.log(detalhesLivro2);
console.log();

// 3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
// Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.
const anoPublicacaoLivro3 = 1985;
const valoresLivro3 = ['Programação', 'Programador', anoPublicacaoLivro3, 'Técnologia', (anoAtual - anoPublicacaoLivro3)];
const livro3 = createLivro(propriedadesLivro2, valoresLivro3);
const detalhesLivro3 = `O livro ${livro3['titulo']}, escrito pelo autor ${livro3['autor']}, e  
foi publicado no ano de ${livro3['anoPublicacao']}. Já fazem ${livro3['idadePublicacao']} anos 
que o livro foi publicado e ainda ensina muita gente!`;
console.log(livro3);
console.log();
console.log(detalhesLivro3);
console.log();