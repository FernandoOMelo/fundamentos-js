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

for (let chave in estudante){
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function'){
        const texto = `A chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);
    }
}