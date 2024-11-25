/*1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:

nome (string): Nome da pessoa.
idade (number): Idade da pessoa.
solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
hobbies (array): Lista de hobbies da pessoa.
Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.
*/
const createObj = ([...propriedades],[...valores]) => {
    let obj = {};
    for(let i = 0; i < propriedades.length; i++ ){
        Object.defineProperty(obj, propriedades[i], {value: valores[i], writable: true, enumerable: true});
    }
    return obj;
}

const pessoa = createObj(
    ['nome', 'idade', 'solteiro', 'hobbies', 'mostraInfoPessoa'],
    ['José', 32, false, ['Ler ', 'Nadar ', 'Estudar'], 
        function (){
            let texto = `
            Detalhes da pessoa: 
            Nome: ${this.nome}, tipo: ${typeof(this.nome)}
            Idade: ${this.idade}, tipo: ${typeof(this.idade)}
            Solteiro: ${this.solteiro ? "A pessoa é solteira" : "A pessoa não é solteira."}, tipo: ${typeof(this.solteiro)}
            Hobbies: ${this.hobbies} tipo: ${typeof(this.hobbies)}`;
            return texto;
        }
    ]
);

console.log(pessoa.mostraInfoPessoa());

/* 2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

rua (string): nome da rua.
cidade (string): nome da cidade.
estado (string): nome do estado.
Preencha as subpropriedades do objeto endereco com valores fictícios.

Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.
*/

pessoa.endereco = {
    rua: 'Rua Sem Nome',
    cidade: 'São Paulo',
    estado: 'SP'
}

pessoa.mostraInfoPessoa = function (){
    let texto = `
    Detalhes da pessoa: 
    Nome: ${this.nome}, tipo: ${typeof(this.nome)}
    Idade: ${this.idade}, tipo: ${typeof(this.idade)}
    Solteiro: ${this.solteiro ? "A pessoa é solteira" : "A pessoa não é solteira."}, tipo: ${typeof(this.solteiro)}
    Hobbies: ${this.hobbies} tipo: ${typeof(this.hobbies)}`;
    texto += ` \n Endereço: Rua ${pessoa.endereco.rua}, Cidade: ${pessoa.endereco.cidade}, Estado: ${pessoa.endereco.estado}, tipo: ${typeof(pessoa.endereco)}`;
    return texto + '\n';
}

console.log(pessoa.mostraInfoPessoa());

/* 3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

nome (string): nome da pessoa.
idade (number): idade da pessoa.
cidade (string): cidade de residência da pessoa.
Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.

b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.

c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.

d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.
*/
const propriedadesListaPessoas = ['nome', 'idade', 'cidade'];
const pessoa1 = createObj(propriedadesListaPessoas, ['Neto', 28, 'São Paulo']);
const pessoa2 = createObj(propriedadesListaPessoas, ['Carla', 25, 'Diadema']);
const pessoa3 = createObj(propriedadesListaPessoas, ['José', 32, 'São Paulo']);
const pessoas = [pessoa1, pessoa2, pessoa3];

const mostraListaPessoas = (listaPessoas) => {
    for (const pessoa of listaPessoas) {
        let texto = `${pessoa.nome}, tem ${pessoa.idade} anos e mora na cidade de ${pessoa.cidade}`
        console.log(texto);
    }
    console.log();
}

mostraListaPessoas(pessoas);

const pessoa4 = createObj(propriedadesListaPessoas, ['Carlos', 28, 'São Paulo']);
if (pessoas.some(p => p.nome === pessoa4.nome)){
    console.log(`A pessoa ${pessoa4.nome} já está incluida na lista`);
} else{
    pessoas.push(pessoa4);
}
mostraListaPessoas(pessoas);

const filtraPorCidade = (listaPessoas) => {

}