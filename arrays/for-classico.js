const notas = [10, 8.5, 5, 6.5, 8, 7.5];

//Primeira expressão: executada apenas uma vez.
//Segunda expressão: condição de execução.
//Terceira expressão: executada sempre ao final do bloco.
for (let i = 0; i < notas.length; i++){
    console.log(i, notas[i]);
}