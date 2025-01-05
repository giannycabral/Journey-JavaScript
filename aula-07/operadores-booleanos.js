// Operadores Booleanos : Comparações

// Operadores de comparação
// Os operadores de comparação são utilizados para comparar dois valores. Eles retornam um valor booleano (true ou false) que indica se a comparação é verdadeira ou falsa. Os operadores de comparação são:
// == (igual a): verifica se dois valores são iguais.
// != (diferente de): verifica se dois valores são diferentes.
// > (maior que): verifica se um valor é maior que outro.
// < (menor que): verifica se um valor é menor que outro.
// >= (maior ou igual a): verifica se um valor é maior ou igual a outro.
// <= (menor ou igual a): verifica se um valor é menor ou igual a outro.
// === (igual a): verifica se dois valores são iguais e do mesmo tipo.
// !== (diferente de): verifica se dois valores são diferentes e do tipo diferente.

// Exemplos de operadores de comparação
const num1 = 5;
const num2 = 5;

console.log(num1 == num2); // true
console.log(num1 != num2); // false
console.log(num1 > num2); // false
console.log(num1 < num2); // false
console.log(num1 >= num2); // true
console.log(num1 <= num2); // true
console.log(num1 === num2); // true
console.log(num1 !== num2); // false

// Operadores Lógicos : Conjunção, Disjunção e Negação
// Os operadores lógicos são utilizados para combinar expressões booleanas. Eles
// retornam um valor booleano (true ou false) que indica se a expressão é verdadeira ou falsa.
// Os operadores lógicos são:
// && (conjunção): verifica se ambas as expressões são verdadeiras.
// || (disjunção): verifica se pelo menos uma das expressões é verdadeira.
// ! (negação): inverte o valor da expressão.
// Exemplos de operadores lógicos

const expressao1 = true;
const expressao2 = false;
console.log(expressao1 && expressao2); // false
console.log(expressao1 || expressao2); // true
console.log(!expressao1); // false
console.log(!expressao2); // true

// Operadores de comparação e lógicos
// Os operadores de comparação e lógicos podem ser combinados para criar expressões mais complexas. A ordem de avaliação das expressões é a seguinte:
// 1. Operadores de comparação
// 2. Operador de negação (!)
// 3. Operadores lógicos (&& e ||)
// Exemplos de expressões complexas
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y < z); // true
console.log(x < y && y > z); // false
console.log(x > y && y < z); // false
console.log(x > y && y > z); // false
console.log(x < y || y < z); // true
console.log(x < y || y > z); // true

// Operadores de atribuição
// Os operadores de atribuição são utilizados para atribuir um valor a uma variável. Eles são utilizados para modificar o valor de uma variável de acordo com uma expressão.
// Os operadores de atribuição são:
// = (atribuição): atribui um valor a uma variável.
// += (adição): adiciona um valor a uma variável.
// -= (subtração): subtrai um valor de uma variável.
// *= (multiplicação): multiplica um valor por uma variável.
// /= (divisão): divide um valor por uma variável.
// %= (módulo): atribui o resto da divisão de um valor por uma variável.

// Exemplos de operadores de atribuição

let a = 5;
a += 10; // a = a + 10
console.log(a); // 15

// Operadores de atribuição com expressões
// Os operadores de atribuição podem ser utilizados com expressões para atribuir um valor calculado a uma variável.
// Exemplos de operadores de atribuição com expressões
let b = 5;
b *= 2; // b = b * 2
console.log(b); // 10

// Operadores de atribuição com expressões
let c = 5;
c /= 2; // c = c / 2
console.log(c); // 2.5

// Operadores de atribuição com expressões
let d = 5;
d %= 2; // d = d % 2w
console.log(d); // 1
