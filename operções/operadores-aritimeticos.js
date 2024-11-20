const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7; 
const notaQuartoBi = 9.3


let media = ((notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4);

if (media >= 7){
    media += media * 0.1;
}

console.log(`A média é: ${media.toFixed(2)}`);


const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const sobra = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;
console.log();
console.log(sobra);

let resultado;
resultado = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log("O resultado da expressão é:", resultado.toFixed(3));