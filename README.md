# 📚 Minha Jornada JavaScript - Conceitos Fundamentais

## 🎯 O que aprendi?

### 🔤 Variáveis e Tipos
- Uso de `let` e `const` (evitando `var`)
- Tipos primitivos: `string`, `number`, `boolean`, `undefined`, `null`
- Convenção camelCase para nomeação
- Tipagem dinâmica e fraca

### ➕ Operadores
- Aritméticos (`+`, `-`, `*`, `/`, `%`)
- Atribuição (`=`, `+=`, `-=`, `*=`, `/=`)
- Comparação (`==`, `===`, `!=`, `>`, `<`, `>=`, `<=`)
- Lógicos (`&&`, `||`, `!`)
- Incremento/Decremento (`++`, `--`)
- Operador ternário (`?:`)

### 🧮 Biblioteca Math
```javascript
Math.abs()    // Valor absoluto
Math.ceil()   // Arredonda para cima
Math.floor()  // Arredonda para baixo
Math.random() // Número aleatório
Math.pow()    // Potência
Math.sqrt()   // Raiz quadrada
Math.PI       // Valor de PI
```

### 🔄 Coerção de Tipos
- Explícita: usando 

Number()

, 

String()

, 

Boolean()


- Implícita: `"123" + 1` → `"1231"`

### 📥 Entrada de Dados
```javascript
// No navegador
prompt("Digite algo")

// No Node.js
const readline = require("readline-sync")
readline.question("Digite algo")
```

## 🚀 Como executar os exemplos

1. Clone este repositório
2. Instale as dependências:
```sh
npm install
```
3. Execute os arquivos `.js` usando Node:
```sh
node aula-06/nomeDoArquivo.js
```

## 📝 Notas Importantes
- Sempre use `let` ou `const` em vez de `var`
- JavaScript é case sensitive
- Strings podem usar aspas simples ou duplas
- Cuidado com coerção implícita em operações

## 🎯 Próximos Passos
- [ ] Estruturas de controle (if/else, switch)
- [ ] Loops (for, while)
- [ ] Arrays e Objetos
- [ ] Funções
- [ ] Manipulação do DOM

> "JavaScript é a linguagem da web. Quanto mais você aprende, mais poderoso se torna!" 🚀
