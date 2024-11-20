const notas = [10, 8.5, 5, 6.5, 8];

let somaDasNotas = 0;

for (let nota of notas){
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);