/* 1 -  Crie um array de objetos JavaScript representando informações de livros. 
        Cada objeto deve conter pelo menos as seguintes propriedades:

            id (number): identificador do livro.
            titulo (string): título do livro.
            autor (string): nome do autor.
            anoPublicacao (number): ano de publicação do livro.

        Crie uma função chamada encontrarLivroPorId que receba o id de um livro como parâmetro e 
        retorne o objeto do livro correspondente. Se nenhum livro for encontrado, 
        a função deve retornar null.

        Utilize a função para encontrar um livro com um id existente e 
        imprima no console as informações do livro encontrado. 
        Em seguida, utilize a função para encontrar um livro com um id inexistente e 
        imprima no console uma mensagem indicando que o livro não foi encontrado. */

const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

const buscaLivrosPorID = (lista, id) => {
    let livro = lista.find((livro) => livro.id === id);
    if (livro === undefined){
        return 'Livro não encontrado!';
    } else {
        return livro;
    }
}

console.log(buscaLivrosPorID(biblioteca, 1));

console.log(buscaLivrosPorID(biblioteca, 4));

console.log(buscaLivrosPorID(biblioteca, 3));