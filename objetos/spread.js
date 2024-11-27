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
        },
        { 
        rua: 'Avenida sem calçada',
        numero: '10',
        complemento: 'Complemento 10'
        }
    ]
}

function exibirTelefones(telefone1, telefone2){
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);