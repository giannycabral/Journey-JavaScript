// Condicionais

const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual eh o sua idade?"));

//const ehMaiorDeIdade = idade >= 18;

// Estrutura condicional if/else

if (ehMaiorDeIdade) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

//--------------------------------//

const mediaDoAluno = 8.99999;

//Media para aprovação é 7
//mediaDoAluno >= 7

//media < 7 e media >= 5 =>Prova final
//media < 5 => Reprovado

if (mediaDoAluno >= 7) {
  console.log("Aprovado!");
  console.log("Parabéns! 🤩");
} else if (mediaDoAluno < 7 && mediaDoAluno >= 5) {
  console.log("Prova final");
} else {
  console.log("Reprovado");
}
//--------------------------------//

// 1. Preciso ser maior de idade para dirigir.
// 2. Preciso ter carteira de habilitação para dirigir.

const idadeDaPessoa = 15;
const temCarteiraDeHabilitacao = true;

if (idadeDaPessoa >= 18 && temCarteiraDeHabilitacao) {
  console.log("Você pode dirigir.");
} else {
  console.log("Você não pode dirigir.");
}
//--------------------------------//
