const notas = [10, 8.5, 5, 6.5, 8, 7.5, 8, 2, 3.7, 5, 10, 8, 9, 6.6];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media.toFixed(2)}`);