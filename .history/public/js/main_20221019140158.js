var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;
var concatenaNumeroPalavras = $(".informacoes--palavras").text(numeroPalavras + " palavras");

console.log(numeroPalavras);