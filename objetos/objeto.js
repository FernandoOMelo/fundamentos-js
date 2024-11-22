const estudante = {
    nome: 'Fernando',
    idade: 28,
    cpf: '12345678912',
    turma: 'JavaScript'
};

console.log(estudante.nome);
console.log(`O nome do estudante é ${estudante.nome}`);
console.log(`Os três primeiros dígitos do CPF do estudante são: ${estudante.cpf.substring(0, 3)}`);