"use strict";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Primeiro site em Node.js</h1><br><p>Iniciando estudos com node.js</p>")
});

app.set('view engine', 'ejs');

app.get("/perfil/:nome?", (req, res) => {
    const nome = req.params.nome
    // res.send("<h1>Perfil do usuário</h1>")
    if(nome){
        res.send(`<h2>Olá, ${nome}! Seja bem vindo ao seu perfil!</h2>`)
    } else {
        res.send(`<h2>Faça login para acessar perfil!</h2>`)
    }
});

app.get('/produtos', function(req, res){
    res.render('produtos')
});

//Inicialização do server
app.listen(8081, function(error){
     if(error){
        console.log("Internal server error!" + error);
     } else {
        console.log("Server starded!");
     }
});