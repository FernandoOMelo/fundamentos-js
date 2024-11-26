/* 4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

soma: uma função que aceita dois parâmetros e retorna a soma deles.
subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido. */


const calculadora = {
    soma: (n1, n2) => console.log(`Operação soma número ${n1} + ${n2} = ${n1 + n2}`), 
    subtracao: (n1, n2) => console.log(`Operação subtração número ${n1} - ${n2} = ${n1 - n2}`),
    multiplicacao: (n1, n2) => console.log(`Operação multiplicação número ${n1} x ${n2} = ${n1 * n2}`),
    divisao: (n1, n2) => console.log(`Operação divisão número ${n1} / ${n2} = ${n1 / n2}`),
    calculaMedia: ([...nums]) => console.log(`A média da sequencia de números: ${nums} é: ${nums.reduce((acumulador, nota) => (acumulador + nota), 0) / nums.length}`)
}

calculadora.soma(2, 5); // Resultado = 7;
calculadora.subtracao(255, 200); // Resultado = 200;
calculadora.divisao(100, 4); // Resultado = 25;
calculadora.multiplicacao(2.8, 10); // Resultado = 28;
calculadora.calculaMedia([9,5,3,7.5,8,9.3,7,8]); // Resultado = 7.1;
