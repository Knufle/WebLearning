var nome = prompt("Por favor informe seu nome:");

var sobrenome = prompt("Por favor informe seu sobrenome:");

var idade = prompt("Por favor informe sua idade:");

var altura = prompt("Por favor informe sua altura:");

var animal = prompt("Por favor informe o nome de seu animal de estimacao:");

alert("Muito obrigado pelas informacoes");

if (nome[0] === "M" && sobrenome[0] === "M" && (idade >20 && idade <30) && altura >= 170 && animal[animal.length - 1] === "y") {
  console.log("Seja bem vindo espiao ultra secreto, esperamos que tenha cumprido a missao");
} else {
  console.log("Esta procurando alguma coisa?");
}
