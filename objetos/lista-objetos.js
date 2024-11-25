const estudante = {
    nome: 'Fernando Oliveira',
    idade: 28,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999999', '5511999991234'],
    enderecos: [{
        rua: 'Avenida da Rua',
        numero: '1',
        complemento: 'Complemento 1'
    }]
}

console.log(estudante.enderecos);
console.log();
console.log(estudante.enderecos[0]);

estudante.enderecos.push({
    rua: 'Rua da Praia',
    numero: '10',
    complemento: ''
});

console.log(estudante.enderecos[1]);

const listaEnderecosComComplemento = estudante.enderecos.filter((endereco) => endereco.complemento);

console.log(listaEnderecosComComplemento);


