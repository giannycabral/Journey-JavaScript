// ENTRADA DE DADOS DO USUÁRIO; NAVEGADOR E NODE.JS//

// A entrada de dados do usuário é uma parte importante da programação, pois permite que o programa seja mais interativo.
// Tanto no navegador quanto no Node.js, o JavaScript possui funções para interagir com o usuário.
// Função prompt() do JavaScript
// A função prompt() do JavaScript é utilizada para exibir uma caixa de diálogo
// que solicita ao usuário a entrada de um dado. O dado inserido pelo usuário é retornado como uma string.
// A função prompt() é utilizada no navegador.
// Exemplo:
// let nome = prompt("Qual é o seu nome?");
// console.log("Olá, " + nome + "!");
//--------------------------------------------------//
// Função readline-sync do Node.js
// A função readline-sync do Node.js é utilizada para solicitar ao usuário a entrada de um dado.
// O dado inserido pelo usuário é retornado como uma string.
// A função readline-sync é utilizada no Node.js.
// Exemplo:
// const prompt = require("readline-sync");
// let nome = prompt.question("Qual é o seu nome?");
// console.log("Olá, " + nome + "!");
// console.log("Olá, " + prompt.question("Qual é o seu nome?") +
// "!");

const prompt = require("readline-sync");

const nome = prompt.question("Qual eh o seu nome?");
const sobrenome = prompt.question("Qual eh o seu sobrenome?");

const nomeCompleto = nome + " " + sobrenome;
console.log("O nome completo do usuário é: " + nomeCompleto);
