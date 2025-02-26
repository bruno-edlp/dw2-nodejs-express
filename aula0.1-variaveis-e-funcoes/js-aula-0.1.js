"use strict";
//Comentario
/* Comentario em bloco
CTRL + ; = atalho pq comentar
 */

const nome = "Bruno"; //Atribuir valor 
let Nome; // Pode começar vazia

const message = "Hello World nesse caraio!";
console.log(message);

//Typeof (esse comando exibe o tipo de variavel)

const estado = "SP";
const idade = 18;
let endereco;

console.log(typeof(endereco));
//Tipagem dinamica e fraca


/*----------------------------------------------------------------------------------------------------------------*/

// Tipos de funções 

//Função simples
function minhaFuncao(){
};
console.log(typeof(minhaFuncao));
function saudacao(){
    console.log("Olá, bem vindo!");
};
saudacao();

//Função com parametro / argumento
//Parametro é um dado que a func rebece
//Argumento é o dado que é envidado para a func

function Saudacao(nome){
    console.log("Olá, bem vindo " + nome);
    //Template string
    console.log(`Olá, bem vindo ${nome}`);
    // ${} -> placeholder
};
Saudacao('Abaporu');

//Func + de 1 param
function soma(n1, n2){
    let resultado = n1 + n2;
    console.log(`A soma dos dois números foi ${resultado}.`)
};
soma(1, 1);

//Func com retorno 
function Soma(n1, n2){
    return n1 + n2;
};
console.log(`A soma é ${Soma(2, 6)}`);

//Func com + de 1 retorno
function parImpar(n){
    if(n % 2 == 0){
        return "Par";
    } else {
        return "Impar";
    };
}
let num = 3;
console.log(parImpar(num));

//Func anonima
let dobro = function(x){
    return x*2;
};
console.log(dobro(15));

//Arrow func
//Param unico num precisa de parenteses
const Dobro = x => {
    return x*2;
};
console.log(`Func dobro com arrow func ${Dobro(40)}`);

//arrow com + de 1 param 
const calc = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`);
};
console.log(`restultado ${calc(6, '*', 6)}`);

//Simplificando arrow func
const Calc = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`);
console.log(`resultado ${Calc(7, '*', 7)}`);

// IIFE - func imediata
const iife = (function(){
    console.log("Ta executando")
})();