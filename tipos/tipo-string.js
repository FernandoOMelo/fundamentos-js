const estudante = "Fernando";
const docente = 'Dina';
const cumprimento = "Nosso lema é 'estudar bastante!'";
const citacao = `Ju diz: "nosso lema é estudar bastante"`;

console.log(cumprimento);
console.log(citacao);

console.log('O estudante chama ' + estudante);

// template string
console.log(`O estudante chama ${estudante}`);

const senha = 'SenhaSegura123' + estudante.toUpperCase();

console.log(senha);

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)