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
    };
};

//CRIANDO UMA INSTANCIA (OBJETO) DE CLASSE CARRO
const carroPopular = new Carro("Fiat", "Uno", "2012");
console.log(`O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e faz ${carroPopular.buzinar()}`);

//INSTANCIA CARRO ESPORTIVO
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";
console.log(`O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e faz ${carroEsportivo.buzinar()}`);

//ADD NOVO ATRIBUTO
carroEsportivo.corNeon =  "Azul";

//ADD NOVO METODO
carroEsportivo.turbo = function() {
    return "Suuttutututututu";
}

console.log(`${carroEsportivo.marca} ${carroEsportivo.modelo} tem o neon da cor ${carroEsportivo.corNeon} ${carroEsportivo.turbo()}`);