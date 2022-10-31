var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;
var car = $(".informacoes--palavras").text(numeroPalavras + "palavras");

console.log(numeroPalavras);