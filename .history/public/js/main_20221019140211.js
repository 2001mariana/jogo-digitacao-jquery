var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;
var mostraNumeroPalavras = $(".informacoes--palavras").text(numeroPalavras + " palavras");

console.log(numeroPalavras);