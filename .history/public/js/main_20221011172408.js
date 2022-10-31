var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;
var car = $(".informacoes--palavras").text().value(numeroPalavras + "palavras");

console.log(numeroPalavras);