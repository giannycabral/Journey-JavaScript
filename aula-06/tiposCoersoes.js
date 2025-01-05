// Coersão de tipos de dados em JavaScript

/** A função `parseInt()` converte um valor em um número inteiro.
Example: `parseInt("123")` retorna `123`.

// A função `parseFloat()` converte um valor em um número decimal.
Example: `parseFloat("123.45")` retorna `123.45`.

// A função `String()` converte um valor em uma string.
Example: `String(123)` retorna `"123"`.

// A função `Number()` converte um valor em um número.
Example: `Number("123")` retorna `123`.

// A função `Boolean()` converte um valor em um booleano.
Example: `Boolean(0)` retorna `false`.

// A função `Array()` converte um valor em um array.
Example: `Array(1, 2, 3)` retorna `[1, 2, 3]`.

// A função `Object()` converte um valor em um objeto.
Example: `Object({a: 1, b: 2})` retorna `{a: 1, b: 2}`.

// A função `JSON.parse()` converte um valor em um objeto JSON.
Example: `JSON.parse('{"a": 1, "b": 2}')` retorna `{a: 1, b: 2}`.

// A função `JSON.stringify()` converte um objeto JSON em uma string.
Example: `JSON.stringify({a: 1, b: 2})` retorna `"{"a": 1, "b": 2}"`.

// A função `Date()` converte um valor em uma data.
Example: `Date('2022-01-01')` retorna `Wed Jan 01 2022 00:00:00 GMT-0300 (Brasilia Standard Time)`.

// A função `RegExp()` converte um valor em um padrão de expressão regular.
Example: `RegExp('a*b')` retorna `/a*b/`.

// A função `Function()` converte um valor em uma função.
Example: `Function('a', 'b', 'return a + b')` retorna `function anonymous(a, b) { return a + b }`.

// A função `Symbol()` converte um valor em um símbolo.
Example: `Symbol('a')` retorna `Symbol(a)`.

// A função `BigInt()` converte um valor em um BigInt.
Example: `BigInt(123)` retorna `123n`.

// A função `undefined` converte um valor em undefined.
Example: `undefined` retorna `undefined`.

// A função `null` converte um valor em null.
Example: `null` retorna `null`.

// A função `NaN` converte um valor em NaN.
Example: `NaN` retorna `NaN`.

// A função `Infinity` converte um valor em Infinity.
Example: `Infinity` retorna `Infinity`.  */

//Coersçao Explicita //

console.log(Number("123")); // 123
console.log(Boolean(0)); // false
console.log(String(123)); // "123"
console.log(undefined); // undefined
console.log(null); // null
console.log(NaN); // NaN
console.log(Infinity); // Infinity
console.log(Symbol("a")); // Symbol(a)
console.log(Object("123")); // { "0": "1", "1": "2", "2": "3" }
console.log(Array("123")); // ["123"]
console.log(JSON.parse('{"a": 1, "b": 2}')); // { a: 1, b: 2 }
console.log(JSON.stringify({ a: 1, b: 2 })); // "{"a": 1, "b": 2}"
console.log(Date("2022-01-01")); // Wed Jan 01 202200:00:00 GMT-0300 (Brasilia Standard Time)
console.log(RegExp("a*b")); // /a*b/
console.log(Function("a", "b", "return a + b")); // function anonymous(a, b) { return a + b }

//Coersão Implícita

console.log(123 + ""); // "123"
console.log(123 * "a"); // NaN
console.log(123 + true); // 124
console.log(123 + false); // 123
console.log(123 + null); // 123
console.log(123 + undefined); // NaN
console.log(123 + NaN); // NaN
console.log(123 + Infinity); // Infinity
console.log(123 + -Infinity); // -Infinity

// Questão 1

// Qual é o resultado da expressão `123 + ""`?
// a) 123
// b) "123"
// c) NaN
// d) 123[object Object]
// e) 123.0

// Questão 2
// Qual é o resultado da expressão `123 + true`?
// a) 124
// b) 123
// c) NaN
// d) 123.0
// e) 123[object Object]

// Questão 3
// Qual é o resultado da expressão `123 + false`?
// a) 123
// b) 124
// c) NaN
// d) 123.0
// e) 123[object Object]

// Questão 4
// Qual é o resultado da expressão `123 + null`?
// a) 123
// b) 124
// c) NaN
// d) 123.0
// e) 123[object Object]

//**Qual será a saida desse cóigo:  */
let n = 1 + "1"; // 11    // 1 + '1' = '11'
n = n - 1; // 10        // '11' - 1 = 10
console.log(n); // 10

//**Qual será a saida desse cóigo:  */
console.log(2 + 3 + "5"); // 55

//**Qual será a saida desse cóigo:  */
console.log("5" + 2 + 3); // 523

//**Qual será a saida desse cóigo:  */
console.log(2 + 3 + 5); // 10

//**Qual será a saida desse cóigo:  */
console.log(5 - 2 - "3"); // 0

//**Qual será a saida desse cóigo:  */
console.log("50" - "2" - "3" - 1 + "3"); // 443  // 50 - 2 - 3 - 1 + '3' = 443
