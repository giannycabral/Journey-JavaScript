// Operador Ternário
// 1. Se a condição for verdadeira, o operador ternário retorna o valor de x.
// 2. Se a condição for falsa, o operador ternário retorna o valor de y.

const idade = 30;

//idade >= 18 ? console.log("Você é maior de idade.") : console.log("Você é menor de idade.");

const mensagem =
  idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
console.log(mensagem);
// O operador ternário é uma forma concisa de escrever uma condição se-então-senão. Ele é muito útil para atribuir valores a variáveis com
// base em uma condição.

//--------------------------------------//

//Truly e Falsy Values  - Valores que são considerados verdadeiros ou falsos em JavaScript.[

// 1. Falsy: false, 0, "", [], {}, null, undefined, NaN
// 2. Truthy: qualquer valor que não seja falsy.
// 3. O operador "in" é usado para verificar se uma propriedade existe em um objeto.
// 4. O operador "for...in" é usado para iterar sobre as propriedades de um objeto.
// 5. O operador "of" é usado para iterar sobre os elementos de um array.

if (undefined) {
  console.log("Truthy");
}
