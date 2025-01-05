// Objetivo: operadores aritméticos
// Descrição: Esse programa calcula a média de uma lista de números.

const nota1 = 10;
const nota2 = 8;

const somaDasNotas = nota1 + nota2;
let mediaDasNotas = somaDasNotas / 2;

mediaDasNotas = (nota1 + nota2) / 2;

console.log("Soma das notas =", somaDasNotas);
console.log("Média das notas =", mediaDasNotas);

// Objetivo: operadores de atribuição
// Descrição: Esse programa demonstra como usar operadores de atribuição para atribuir
// valores a variáveis.

const valor1 = 10;
let valor2 = 20;
valor2 += 10; // valor2 = valor2 + 10
valor2 -= 10; // valor2 = valor2 - 10
valor2 *= 2; // valor2 = valor2 * 2
valor2 /= 2; // valor2 = valor2 / 2
valor2 %= 2; // valor2 = valor2 % 2
console.log("Valor 2 =", valor2);

// Objetivo: operadores de comparação
// Descrição: Esse programa demonstra como usar operadores de comparação para comparar  valores.

const numero1 = 10;
const numero2 = 20;
console.log("numero1 =", numero1);
console.log("numero2 =", numero2);
console.log("numero1 == numero2", numero1 == numero2);
console.log("numero1 != numero2", numero1 != numero2);
console.log("numero1 > numero2", numero1 > numero2);
console.log("numero1 < numero2", numero1 < numero2);
console.log("numero1 >= numero2", numero1 >= numero2);
console.log("numero1 <= numero2", numero1 <= numero2);

// Objetivo: operadores lógicos
// Descrição: Esse programa demonstra como usar operadores lógicos para combinar valores booleanos.

const valor3 = true;
const valor4 = false;
console.log("valor3 =", valor3);
console.log("valor4 =", valor4);

// Objetivo: operadores de igualdade
// Descrição: Esse programa demonstra como usar operadores de igualdade para comparar valores.

const valor5 = 10;
const valor6 = "10";
console.log("valor5 =", valor5);
console.log("valor6 =", valor6);
console.log("valor5 == valor6", valor5 == valor6);
console.log("valor5 === valor6", valor5 === valor6);

// Objetivo: operadores de incremento e decremento
// Descrição: Esse programa demonstra como usar operadores de incremento e decremento para
// aumentar ou diminuir o valor de uma variável.

let contador = 0;
console.log("contador =", contador);
contador++; // contador = contador + 1
console.log("contador =", contador);
contador--; // contador = contador - 1
console.log("contador =", contador);

// Objetivo: operadores ternários
// Descrição: Esse programa demonstra como usar operadores ternários para atribuir valores
// a variáveis com base em condições.

const idade = 18;
const podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(podeDirigir);

// Objetivo: operadores de concatenação
// Descrição: Esse programa demonstra como usar operadores de concatenação para combinar
// strings.

const nome = "João";
const sobrenome = "Silva";
const nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

// Objetivo: operadores de resto
// Descrição: Esse programa demonstra como usar operadores de resto para calcular o resto da divisão de dois números.

const numero3 = 10;
const numero4 = 3;
const restoDaDivisao = numero3 % numero4;
console.log("Resto Da Divisao =", restoDaDivisao);

//-----------------------------------------//
// Objetivo: operadores de exponenciação
// Biblioteca Math
// O JavaScript possui uma biblioteca chamada Math que contém funções matemáticas úteis.
// Aqui estão algumas das principais funções da biblioteca Math:
// Math.abs(): Retorna o valor absoluto de um número.
// Math.ceil(): Retorna o valor mais próximo para cima de um número.
// Math.floor(): Retorna o valor mais próximo para baixo de um número.
// Math.max(): Retorna o maior valor entre dois ou mais números.
// Math.min(): Retorna o menor valor entre dois ou mais números.
// Math.pow(): Retorna a base elevada à potência de um expoente.
// Math.round(): Retorna o valor mais próximo de um número.
// Math.sqrt(): Retorna a raiz quadrada de um número.
//-----------------------------------------//

// Demonstração de uso da biblioteca Math em JavaScript:

// Objetivo: Math.abs()
// Descrição: Esse programa demonstra como usar a função Math.abs() para obter o valor absoluto de um número.
const numero6 = -10;
const valorAbsoluto = Math.abs(numero6);
console.log("Valor Absoluto =", valorAbsoluto);

// Objetivo: Math.ceil()
// Descrição: Esse programa demonstra como usar a função Math.ceil() para obter o valor mais próximo para cima de um número.
const numero7 = 10.5;
const valorParaCima = Math.ceil(numero7);
console.log("Valor Para Cima =", valorParaCima);

// Objetivo: Math.floor()
// Descrição: Esse programa demonstra como usar a função Math.floor() para obter o valor mais próximo para baixo de um número.
const numero8 = 10.5;
const valorParaBaixo = Math.floor(numero8);
console.log("Valor Para Baixo =", valorParaBaixo);

// Objetivo: Math.max()
// Descrição: Esse programa demonstra como usar a função Math.max() para obter o maior valor entre dois ou mais números.
const numero9 = 10;
const numero10 = 20;
const maiorValor = Math.max(numero9, numero10);
console.log("Maior Valor =", maiorValor);

// Objetivo: Math.min()
// Descrição: Esse programa demonstra como usar a função Math.min() para obter
// o menor valor entre dois ou mais números.
const numero11 = 10;
const numero12 = 20;
const menorValor = Math.min(numero11, numero12);
console.log("Menor Valor =", menorValor);

// Objetivo: Math.pow()
// Descrição: Esse programa demonstra como usar a função Math.pow() para elevar a base à potência de um expoente.
const base = 2;
const expoente = 3;
const resultado = Math.pow(base, expoente);
console.log("Resultado =", resultado);

// Objetivo: Math.round()
// Descrição: Esse programa demonstra como usar a função Math.round() para obter o valor mais próximo de um número.
const numero13 = 10.5;
const valorMaisProximo = Math.round(numero13);
console.log("Valor Mais Próximo =", valorMaisProximo);

// Objetivo: Math.random()
// Descrição: Esse programa demonstra como usar a função Math.random() para gerar um número aleatório entre 0 e 1.
const numeroAleatorio = Math.random();
console.log("Número Aleatório =", numeroAleatorio);

// Objetivo: Math.sin()
// Descrição: Esse programa demonstra como usar a função Math.sin() para calcular o
// seno de um ângulo em radianos.
const angulo = Math.PI / 2;
const seno = Math.sin(angulo);
console.log("Seno =", seno);

// Objetivo: Math.cos()
// Descrição: Esse programa demonstra como usar a função Math.cos() para calcular o cosseno de um ângulo em radianos.
const coseno = Math.cos(angulo);
console.log("Cosseno =", coseno);

// Objetivo: Math.tan()
// Descrição: Esse programa demonstra como usar a função Math.tan() para calcular
// a tangente de um ângulo em radianos.
const tangente = Math.tan(angulo);
console.log("Tangente =", tangente);

// Objetivo: Math.PI
// Descrição: Esse programa demonstra como usar a constante Math.PI para acessar
// o valor de pi.
console.log("Valor de Pi =", Math.PI);

// Objetivo: Math.E
// Descrição: Esse programa demonstra como usar a constante Math.E para acessar o valor de e.
console.log("Valor de E =", Math.E);

// Objetivo:  Raiz quadrada
// Descrição: Esse programa demonstra como usar a função Math.sqrt() para calcular a raiz quadrada de um número.
const numero5 = 16;
const raizQuadrada = Math.sqrt(numero5);

console.log("Raiz Quadrada =", raizQuadrada);
