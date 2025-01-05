// Utilize sempre o camelCase no JavaScript
// JavaScript possui tipagem dinâmica, ou seja, não é necessário declarar o tipo da variável
// JavaScript é case sensitive, ou seja, diferencia letras maiúsculas de minúsculas
// JavaScript é uma linguagem fracamente tipada, ou seja, não é necessário declarar o tipo da variável

var nomeDaProfessora = "Regiane Cabral"; // string (texto): utiliza aspas simples ou duplas
var idade = 30; // number (número): não utiliza aspas
var altura = 1.7; // number (número): não utiliza aspas
var estudando = true; // boolean (booleano): true ou false

console.log(nomeDaProfessora, typeof nomeDaProfessora);

console.log(idade, typeof idade);

console.log(altura, typeof altura);

console.log(estudando, typeof estudando);

var semConteudo; // undefined: não foi atribuído valor à variável
console.log(semConteudo, typeof semConteudo);

var nulo = null; // null: valor nulo
console.log(nulo, typeof nulo);

var curso = "Front-end em React"; // string (texto): utiliza aspas simples ou duplas
topico = "JavaScript Básico ";

console.log(curso, topico);

// ! Não utilize o var no JavaScript, utilize o let e const

let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9; // let: permite a reatribuição de valor
// ! mediaDoAluno = 7; // const: não permite a reatribuição de valor

console.log(notaDoAluno);
console.log(mediaDoAluno);

// o que é hoisting e Escopo?
// Hoisting é o comportamento do JavaScript em relação às declarações de variáveis e funções.
// Escopo é o alcance que uma variável ou função tem dentro do código.
// O JavaScript tem escopo de bloco, ou seja, as variáveis e funções declaradas dentro de um bloco de código só podem ser acessadas dentro desse bloco.
