const estudante = {
    nome: 'Fernando',
    idade: 28,
    cpf: '12345678912',
    turma: 'JavaScript'
};

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];
}

console.log(`O nome do estudante é: ${estudante.nome}`);
console.log(`O nome do estudante é: ${exibeInfoEstudante(estudante, 'nome')}`);
console.log(`O CPF do estudante é: ${estudante['cpf']}`);