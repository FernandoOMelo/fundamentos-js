const anoAtual = new Date().getFullYear();
const pulaLinha = () => {
    console.log();
    console.log('***************************************************************************');
    console.log();
}

//**************************** DESAFIOS AULA 1 *******************************//

// //1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

// titulo (string): título do livro.
// autor (string): nome do autor do livro.
// anoPublicacao (number): ano de publicação do livro.
// genero (string): gênero do livro.


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
console.log('A resolução do primeiro desafio é: '); 
console.log(livro);
pulaLinha();

// 2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). 
// Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
// Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.
// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.


const anoPublicacaoLivro2 = 1996;
const propriedadesLivro2 = ['titulo', 'autor', 'anoPublicacao', 'genero', 'idadePublicacao'];
const valoresLivro2 = ['Receitas', 'Chef Cozinheira', anoPublicacaoLivro2, 'Culinária', (anoAtual - anoPublicacaoLivro2)];
livro2 = createLivro(propriedadesLivro2, valoresLivro2);
const detalhesLivro2 = `O livro ${livro2.titulo} foi publicado no ano de ${livro2.anoPublicacao}, com isso podemos dizer que esse livro foi publicados à ${livro2.idadePublicacao} anos!`
console.log('A resolução do segundo desafio é: ');
console.log(livro2);
console.log(detalhesLivro2);
pulaLinha();

// 3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
// Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.
const anoPublicacaoLivro3 = 1985;
const valoresLivro3 = ['Programação', 'Programador', anoPublicacaoLivro3, 'Técnologia', (anoAtual - anoPublicacaoLivro3)];
const livro3 = createLivro(propriedadesLivro2, valoresLivro3);
const detalhesLivro3 = `O livro ${livro3['titulo']}, escrito pelo autor ${livro3['autor']}, e foi publicado no ano de ${livro3['anoPublicacao']}. Já fazem ${livro3['idadePublicacao']} anos 
que o livro foi publicado e ainda ensina muita gente!`;
console.log('A resolução do terceiro desafio é: ');
console.log(livro3);
console.log(detalhesLivro3);
pulaLinha();

// 4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
// Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.
const propriedadesLivro4 = ['titulo', 'autor', 'anoPublicacao', 'genero', 'idadePublicacao', 'avaliacao'];
const valoresLivro4 = ['Fotografia', 'Fotógrafo', 2004, 'AudioVisual', (anoAtual - 2004), null];
const livro4 = createLivro(propriedadesLivro4, valoresLivro4);
console.log('Este é o objeto do quarto desafio sem a avaliação: ');
console.log(livro4);
pulaLinha();
const avaliacaoLivro4 = '5 Estrelas - Ótimo';
if (livro4.avaliacao === null){
    livro4.avaliacao = avaliacaoLivro4;
}
console.log('A resolução do quarto desafio é: ')
console.log(livro4);
pulaLinha();

//5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".
const propriedadesLivro5 = ['titulo', 'autor', 'anoPublicacao', 'genero', 'idadePublicacao'];
const valoresLivro5 = ['Uma grande aventura', 'Aventureiro', 2011, 'Romance', (anoAtual - 2011)];
const livro5 = createLivro(propriedadesLivro5, valoresLivro5); 
console.log('A resolução do quarto desafio é: ');
console.log(livro5);
livro5.genero = 'Aventura'; 
console.log(livro5);
