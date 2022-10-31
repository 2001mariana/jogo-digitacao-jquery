var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;
var mostraNumeroPalavras = $(".informacoes--palavras").text(numeroPalavras + " palavras");

var campo = $(".campo--digitacao");
campo.on("input", function() {
    var conteudo = campo.val();

    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador--palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador--caracteres").text(qtdCaracteres);
});

var tempoRestante = $("#tempo--digitacao").text(60);
campo.on("focus", function() {
    set
})