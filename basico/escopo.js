const nome = 'Camila'; // variável global

function cumprimentar() {
  console.log(`Olá, ${nome}!`); // Acessa a var global
}

cumprimentar(); // ‘Olá, Camila!”

if (1 > 0) {
    let nomeIf = 'Ana';
    console.log(nomeIf); // ‘Ana’
  }
  
  // variável `nome` não está acessível
  console.log(nomeIf); // Error: nome is not defined

  if (1 > 0) {
    var nomeVar = 'Ana';
    console.log(nomeVar); // ‘Ana’
  }
  
  console.log(nomeVar); // ‘Ana’