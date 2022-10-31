var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;
var concatenaNumero = $(".informacoes--palavras").text(numeroPalavras + " palavras");

console.log(numeroPalavras);