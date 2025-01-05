const fs = require("fs");

// Assincronismo - JavaScript - 13/09/2021

// 1. Callback  (Hell)
// 2. Promises  (Then/Catch)
// 3. Async/Await   (Try/Catch)

//--------------------------------------------------------//
// Função assincrona  (Callback)  - Levar um tempo para executar a função.

// console.log("Antes da leitura do arquivo");

// fs.readFile("aula-13/arquivo.txt", (erro, conteudoDoArquivo) => {
//   if (erro) {
//     console.log("Erro ao ler o arquivo: ", erro);
//   } else {
//     console.log(conteudoDoArquivo.toString());
//   }
// });

//console.log("Depois da leitura do arquivo");
//console.log(2);
//console.log(3);
//console.log(4;
// console.log(5;

//--------------------------------------------------------//
// Exemplo  02 :setTimeout (função, tempo, parâmetros)

// console.log("Antes do setTimeout...");

// setTimeout(() => {
//   console.log("Será executado daqui a 2 segundos");
// }, 2000);

// console.log("Depois do setTimeout...");

//--------------------------------------------------------//
// Exemplo 03: Promises

console.log("Antes da criação da promessa");

function lerArquivo() {
  return new Promise((resolve, reject) => {
    fs.readFile("aula-13/arquivo.txt", (erro, conteudoDoArquivo) => {
      if (erro) {
        reject("Ocorreu um erro ao ler o arquivo:", erro);
      } else {
        resolve(String(conteudoDoArquivo));
      }
    });
  });
}

// criando uma promessa

// resolve:  quando a promessa é resolvida com sucesso
// reject: quando a promessa é rejeitada com erro
// promessa:  é um objeto que representa a conclusão ou falha de uma operação assíncrona.
// Finally:  é executado após o resolve ou reject.
// then:  é executado quando a promessa é resolvida com sucesso.
// catch:  é executado quando a promessa é rejeitada com erro.

// lerArquivo()
// promessa
//   .then((retornoDoResolveDaPromise) => {
//     console.log("Deu certo: ", retornoDoResolveDaPromise);
// })
//   .catch((retornoDoRejectDaPromise) => {
//     console.log("Deu errado: ", retornoDoRejectDaPromise);
// })
//   .finally(() => {
//     console.log(
//       "Isso será executado , independente do sucesso ou fracasso da promessa..."
//     );
// });

// * 3 async/await  -  é uma forma  de escrever código assíncrono de forma mais síncrona.

async function leituraDeDados() {
  console.log("Isso é executado antes da promise ser resolvida!");

  try {
    const conteudoDoArquivo = await lerArquivo();

    console.log(conteudoDoArquivo);
    console.log("Isso é executado depois da promise ser resolvida!");
  } catch (err) {
    console.log("Isso aqui é executado depois da promise (com erro)!");
  } finally {
    console.log("Isso aqui é executado independente do sucesso ou erro!");
  }
}

leituraDeDados();
