var frase = $(".frase").text();
var numero = frase.split(" ").length;
var car = $(".informacoes--palavras").text().value(numero + "palavras");

console.log(numero);