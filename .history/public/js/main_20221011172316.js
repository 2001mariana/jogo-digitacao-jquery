var frase = $(".frase").text();
var tamanhoFrase = frase.split(" ").length;
var car = $(".informacoes--palavras").text().value(tamanhoFrase );

console.log(tamanhoFrase);