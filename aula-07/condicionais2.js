/*Switch case é uma estrutura de controle que permite a execução de diferentes blocos de código,
 do valor de uma variável.
   Muito útil quando temos muitas condições para serem verificadas. */

const permissoes = "aluno";

switch (permissoes) {
  case "aluno":
    console.log("Voce só pode visualizar as aulas.");
    break;
  case "professor":
    console.log("Você pode alterar as aulas e adicionar exercícios.");
    break;
  case "admin":
    console.log("Você pode fazer tudo.");
    break;
  default:
    console.log("Você não tem permissão para acessar o sistema.");
}
