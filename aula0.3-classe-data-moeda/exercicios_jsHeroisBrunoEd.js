//EXERCICIO 1

// Classe Heroi
class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }

  correr() {
    return `${this.nome} está correndo.`;
  }

  andar() {
    return `${this.nome} está andando.`;
  }

  atacar() {
    return `${this.nome} está atacando.`;
  }

  defender() {
    return `${this.nome} está se defendendo.`;
  }
}

// Classe Homem-Aranha
class HomemAranha extends Heroi {
  constructor(nome, vida, velocidade, forca, teia) {
    super(nome, vida, velocidade, forca);
    this.teia = teia; // 0 ou 1
  }

  sentidoAranha() {
    return `${this.nome} detectou perigo!`;
  }
}

// Classe Superman
class Superman extends Heroi {
  constructor(nome, vida, velocidade, forca, podeVoar) {
    super(nome, vida, velocidade, forca);
    this.podeVoar = podeVoar; // 0 ou 1
  }

  visaoCalor() {
    return `${this.nome} está usando sua visão de calor!`;
  }
}

// Classe Batman
class Batman extends Heroi {
  constructor(nome, vida, velocidade, forca, esconder) {
    super(nome, vida, velocidade, forca);
    this.esconder = esconder; // 0 ou 1
  }

  investigar() {
    return `${this.nome} está investigando um crime!`;
  }
}

// Instanciando os heróis
const homemAranha = new HomemAranha("Homem-Aranha", 100, 80, 70, 1);
const superman = new Superman("Superman", 150, 90, 100, 1);
const batman = new Batman("Batman", 120, 70, 60, 1);

// Exibindo informações e ações dos heróis
console.log(homemAranha.correr());
console.log(homemAranha.andar());
console.log(homemAranha.atacar());
console.log(homemAranha.defender());
console.log(homemAranha.sentidoAranha());

console.log(superman.correr());
console.log(superman.andar());
console.log(superman.atacar());
console.log(superman.defender());
console.log(superman.visaoCalor());

console.log(batman.correr());
console.log(batman.andar());
console.log(batman.atacar());
console.log(batman.defender());
console.log(batman.investigar());

///EXERCICIO 2

const exibirDataFutura = () => {
  // Obtém a data atual
  const dataAtual = new Date();

  // Adiciona 3 dias, 2 meses e 1 ano
  dataAtual.setDate(dataAtual.getDate() + 3); // Adiciona 3 dias
  dataAtual.setMonth(dataAtual.getMonth() + 2); // Adiciona 2 meses
  dataAtual.setFullYear(dataAtual.getFullYear() + 1); // Adiciona 1 ano

  // Formata a data no padrão dia/mês/ano
  const dia = String(dataAtual.getDate()).padStart(2, "0"); // Obtém o dia e garante que tenha 2 dígitos
  const mes = String(dataAtual.getMonth() + 1).padStart(2, "0"); // Obtém o mês (0-11) e garante que tenha 2 dígitos
  const ano = dataAtual.getFullYear(); // Obtém o ano

  // Exibe a data formatada no console
  console.log(`${dia}/${mes}/${ano}`);
};

// Chama a função
exibirDataFutura();

/// EXERCICIO 3

function converterSalario(salarioEmReais) {
  // Taxas de conversão
  const taxaDolar = 0.176;
  const taxaEuro = 0.16;

  // Conversão
  const salarioEmDolares = salarioEmReais * taxaDolar;
  const salarioEmEuros = salarioEmReais * taxaEuro;

  // Formatação das moedas
  const formatarMoeda = (valor, moeda) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: moeda,
    }).format(valor);
  };

  // Exibindo os resultados formatados
  console.log(`Salário em Reais: ${formatarMoeda(salarioEmReais, "BRL")}`);
  console.log(`Salário em Dólares: ${formatarMoeda(salarioEmDolares, "USD")}`);
  console.log(`Salário em Euros: ${formatarMoeda(salarioEmEuros, "EUR")}`);
}

// Exemplo de uso da função
converterSalario(1000); // Altere o valor conforme necessário

/// EXERCICIO 4

function formatarNome(nome) {
  // Formata o nome em letras maiúsculas
  const nomeMaiusculo = nome.toUpperCase();
  // Formata o nome em letras minúsculas
  const nomeMinusculo = nome.toLowerCase();
  // Conta o número de letras no nome (excluindo espaços)
  const numeroDeLetras = nome.replace(/\s+/g, "").length;

  // Exibe os resultados no console
  console.log(`Nome em maiúsculas: ${nomeMaiusculo}`);
  console.log(`Nome em minúsculas: ${nomeMinusculo}`);
  console.log(`Número de letras: ${numeroDeLetras}`);
}

// Exemplo de uso da função
formatarNome("Bruno Eduardo");
