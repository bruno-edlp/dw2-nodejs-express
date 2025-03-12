"use strict";
// ARRAY (VETOR OU LISTA)
let produtos = [];
console.log(typeof (produtos));

let Produtos = ["Computador", "Mouse", "Teclado", "Monitor"];
console.log(Produtos);

console.log("Exibindo a lista pelos indices");
console.log(Produtos[0]);   // Computador
console.log(Produtos[1]);   // Mouse    
console.log(Produtos[2]);   // Teclado 
console.log(Produtos[3]);   // Monitor 

console.log("Exibindo a lista atraves do for");
for (let c in Produtos) {
    console.log(`${Number(c) + 1} - ${Produtos[c]}`);
}

console.log("Exibindo a lista atraves do forEach");
Produtos.forEach(function (produto){
    console.log(produto);
})

console.log("Exibindo a lista atraves do forEach com os indices");
Produtos.forEach((produto, i) => {
    console.log(`${i + 1} - ${produto}`);
})

// MÉTODOS DE MANIPULAÇÃO DE VETORES

let vetor = ['Laranja', 'Maçã', 'Banana'];
console.log(`Nosso vetor é o: ${vetor}`);
vetor[3] = 'Morango';
console.log(`Nosso vetor agora é o: ${vetor}`);

//MÉTODO PUSH - INSERE ELEMENTO NO FINAL DO VETOR

vetor.push('Abacaxi');
console.log(`Nosso vetor agora é o: ${vetor}`);

//MÉTODO UNSHIFT - INSERE ELEMENTO NO INICIO DO VETOR

vetor[0] = 'Pera';
console.log(`Nosso vetor agora é o: ${vetor}`);
vetor.unshift('Laranja');
console.log(`Nosso vetor agora é o: ${vetor}`);

//MÉTODO LENGTH - QTD ELEMENTOS DO VETOR

let numeros = [6, 8, 2, 9, 3, 800, 200, 69];
console.log(`Nossa lista de numeros é: ${numeros}`);
console.log(`O numero de elementos do vetor é: ${numeros.length}`);

// MÉTODO SORT - ORDENAR O VETOR

console.log(`O primeiro elemento da lista de frutas é: ${vetor[0]}`);
vetor.sort();
console.log(`Agora o primeiro item da lista é: ${vetor[0]}`);
console.log(`Nossa lista de frutas é ${vetor.sort()}`);

//Numeros ordenados com SORT
console.log(`Nossa lista de números é: ${numeros}`);
numeros.sort();
console.log(`Agora nossa lista de numeros ordenada é: ${numeros}`);

//Ordenando corretamente crescente
console.log(numeros.sort((a, b) => a - b));

//Ordenando corretamente decrescente
console.log(numeros.sort((a, b) => b - a));