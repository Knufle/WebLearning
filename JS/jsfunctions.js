function helloyou(name){
  console.log("hello "+name);
}

function addNum(num1,num2) {
  console.log(num1+num2);
}

function helloalguem(name="Roberto") {
  console.log("Hello "+name);
}

function formal(name="Marcel",title="Sir") {
  // console.log(title + " "+name);
  return title + " "+name;
}

function vezescinco(numInput) {
  //Escopo local para a funcao, nao tem como chamar "result" fora da funcao.
  var result = numInput * 5;
  return result;
}

var v = "V Global";
var coisa = "Coisa Global";

function fun(v,coisa) {
  v = "nao vai dar n";
  console.log(v);
  coisa = "Reatribuindo coisa dentro da func";
  console.log(coisa);
}

// fun();
// console.log(coisa);

var a = 20;

function main() {

  /* local variable declaration in main function */
  var a = 10;
  var b = 20;
  var c = 0;

  console.log("value of a in main() = "+a);
  c = sum(a,b);
  console.log("value of c in main() = "+c);

  return 0;
}

/* function to add two integers */
function sum(a,b) {

   console.log("value of a in sum() = "+a);
   console.log("value of b in sum() = "+b);

   return a + b;
}

// PROBLEM 1

function dormir(diautil, ferias) {
    if (diautil === true || ferias === true){
      return true;
    } else {
      return false;
    }
}

// PROBLEM 2

function problemacaco(sorrisoa,sorrisob){
  if ((sorrisoa === false && sorrisob === false)||(sorrisoa === true && sorrisob === true)){
    return true;
  } else {
    return false;
  }
}

// var frasevezes = "ola";
// var vez = 5;
// console.log(frasevezes);

// function frasevezes(frase,vezes) {
//     // frase = prompt("Por favor insira a frase");
//     // vezes = prompt("Por favor a quantidade de vezes");
//     var length = frase.length;
//     while(frase.length < (length * vezes)){
//       frase + frase;
//     }
//     var frasecompleta;
//     frasecompleta = frase;
//     return frasecompleta;
// }

function rcb(frase,qtd){
  var length = frase.length;
  for(var i = 0; i < qtd; i++){
    if(frase.length < length*qtd){
      frase + frase;
    }
  }
  return frase;
}