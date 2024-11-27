/* 1 -  Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. 
        O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.
        Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo do arquivo dados.json.
        Imprima no console o conteúdo importado utilizando a função console.log().
        Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.*/

const dados = require('./dados.json');

console.log(dados);
console.log(typeof dados);

console.log(dados.produtos[0].nome);
console.log(dados.produtos[1].nome);



