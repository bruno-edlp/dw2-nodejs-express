"use strict";

//CLASSES NO JS
class Carro {
  //Nome de classes começam com maiúsculo
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  //MÉTODOS
  buzinar() {
    return "Beep! Beep!";
  }
}

//CRIANDO UMA INSTANCIA (OBJETO) DE CLASSE CARRO
const carroPopular = new Carro("Fiat", "Uno", "2012");
console.log(
  `O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${
    carroPopular.ano
  } e faz ${carroPopular.buzinar()}`
);

//INSTANCIA CARRO ESPORTIVO
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";
console.log(
  `O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${
    carroEsportivo.ano
  } e faz ${carroEsportivo.buzinar()}`
);

//ADD NOVO ATRIBUTO
carroEsportivo.corNeon = "Azul";

//ADD NOVO METODO
carroEsportivo.turbo = function () {
  return "Suuttutututututu";
};

console.log(
  `${carroEsportivo.marca} ${carroEsportivo.modelo} tem o neon da cor ${
    carroEsportivo.corNeon
  } ${carroEsportivo.turbo()}`
);

/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */

//Manipulando datas no js

const currentDate = new Date();
console.log(typeof currentDate);

const day = currentDate.getDate();
console.log(`Hoje é dia ${day}`);

const month = currentDate.getMonth() + 1;
console.log(`Estamos no mês ${month}`);

const year = currentDate.getFullYear();
console.log(`Estamos no ano de ${year}`);

currentDate.setDate(currentDate.getDate() + 10);
console.log(`Daqui a 10 dias será dia ${currentDate.getDate()}`);

currentDate.setMonth(currentDate.getMonth() + 3);
console.log(`Daqui a 3 meses sera mes ${currentDate.getMonth() + 1}`);

currentDate.setFullYear(currentDate.getFullYear() + 2);
console.log(`Daqui a 2 anos sera ano ${currentDate.getFullYear()}`);

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/

//Trabalhando moedas com js

let salario = 2500.3;
console.log(salario);
console.log(salario.toFixed(2));
console.log(salario.toFixed(0));
console.log(salario.toFixed(2).replace(".", ","));

//Formatação de moeda em real (R$)
console.log(
    salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);


//Convertendo real para dolar
const salarioDolar = salario * 0.176
console.log(
    salarioDolar.toLocaleString("en", { style: "currency", currency: "USD" })
);

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/

//Formatação de string

const nome = "Bruno Eduardo";

//Letras maiusculas
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
