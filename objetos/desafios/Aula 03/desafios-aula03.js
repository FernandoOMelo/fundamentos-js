/*  1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. 
        O objeto deve ter as seguintes propriedades: 
            nome e notas. 
        Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.
        Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. 
        Utilize as seguintes categorias:
            Desempenho excelente: média >= 9
            Bom desempenho: 7.5 <= média entre 7.6 e 8.9
            Desempenho regular: 6 <= média entre 6 e 7.5
            Desempenho insuficiente: média < 6
        Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.
        Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa. */

pessoa = {
    nome: 'Fernando',
    notas: [3, 5, 9, 4, 10, 3, 9, 4, 2, 10],
    calculaMediaNotas: function() {
        return this.notas.reduce((acumulador, nota) => acumulador += nota) / this.notas.length;
    },
    classificaDesempenho: function (){
        let media = this.calculaMediaNotas()
        if( media >= 9){
            return `Parabéns seu desempenho foi excelente! Sua média foi ${media}`
        }
        else if (media >= 7.5 && media <= 8.9){
            return `Parabéns você teve um bom desempenho! Sua média foi ${media}`
        }
        else if(media >= 6 && media <= 7.4){
            return `Atenção seu desempenho foi regular! Sua média foi ${media}`
        }
        else {
            return `Você teve o desempenho insuficiente! Por isso está reprovado! Sua média foi ${media}`
        }
    }
}

console.log(`A médias das notas do aluno ${pessoa.nome} é: ${pessoa.calculaMediaNotas()}`);
console.log(pessoa.classificaDesempenho());
console.log();



/* 2 -  Crie um objeto chamado carro que represente as informações de um veículo. 
        O objeto deve ter as seguintes propriedades:
            marca (string): marca do carro.
            modelo (string): modelo do carro.
            ano (number): ano de fabricação do carro.
            cor (string): cor do carro.
    
    Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.
    Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.
    Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.
*/
const carro = {
    marca: 'Honda',
    modelo: 'CRV',
    ano: 2008,
    cor: 'Preto',
    mostraValoresCarro: function (){
        for (const key in carro) {
            const tipo = typeof carro[key];
            if(tipo !== 'object' && tipo !== 'function'){
                console.log(`A chave "${key}" tem o valor "${carro[key]}"`);
            }
        }
    }
}

carro.mostraValoresCarro();
console.log();
carro.cilindradas = '2.0';
carro.potencia = '150cv';
carro.mostraValoresCarro();
console.log();

