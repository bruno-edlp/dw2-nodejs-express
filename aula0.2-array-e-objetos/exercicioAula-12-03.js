"use strict";


// EXERCICIO 1
const states = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
    "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul",
    "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí",
    "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",
    "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
];

states.forEach((states, i) => {
    console.log(`${i + 1}. ${states}`);
});

//EXERCICIO 2
const eu = {
    nome: "Bruno",
    idade: "24",
    cidade: "Registro",
    hobby: "Basquete",
    raca: "Branca"
};
console.table(eu);

//EXERCICIO 3
const listFilm = [
    {
        titulo: "A Rede Social",
        genero: "Drama/Biografia",
        ano: 2010,
        classificacao: "12 anos"
    },
    {
        titulo: "O Jogo da Imitação",
        genero: "Drama/Suspense",
        ano: 2014,
        classificacao: "14 anos"
    },
    {
        titulo: "Piratas do Vale do Silício",
        genero: "Drama/História",
        ano: 1999,
        classificacao: "Livre"
    },
    {
        titulo: "Steve Jobs",
        genero: "Biografia/Drama",
        ano: 2015,
        classificacao: "14 anos"
    },
    {
        titulo: "Matrix",
        genero: "Ficção científica/Ação",
        ano: 1999,
        classificacao: "14 anos"
    }
];

listFilm.forEach(film => {
    console.log(`Titulo: ${film.titulo}`)
    console.log(`Genero: ${film.genero}`)
    console.log(`Ano: ${film.ano}`)
    console.log(`classificacao: ${film.classificacao}`)
    console.log()
});