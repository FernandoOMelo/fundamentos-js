const estudante = {
    nome: 'Fernando Oliveira',
    idade: 28,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    media: 7.5,
    telefones: ['5511999999999', '5511999991234'],
    enderecos: [{
        rua: 'Avenida da Rua',
        numero: '1',
        complemento: 'Complemento 1'
    }],
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false;
    }
}

console.log(estudante.estaAprovado(7));
console.log(estudante.estaAprovado(8));
