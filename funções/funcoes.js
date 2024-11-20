// Parâmetros / Argumentos
// Retorno


// Declaração de função: Funções declaradas tem hoisting.
function exibeInfosEstudante(nome, nota){
    return `O nome é ${nome} e a nota é ${nota}`;
}
console.log(exibeInfosEstudante('Fernando', 10));
console.log(exibeInfosEstudante('Dina', 10));

// Expressão de função: Funções anônimas. 
const estudanteReprovou = function (notaFinal, faltas){
    if (notaFinal < 7 && faltas > 4){
        return true;
    } else{
        return false;
    }
}
console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));

//Arrow Function: Funções anônimas.

const estudanteAprovou =  (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4){
        return false;
    } else{
        return true;
    }
}

const exibeNome = (nome) => nome;

console.log(estudanteAprovou(6, 5));
console.log(estudanteAprovou(10, 2));
console.log(exibeNome('Fernando'));