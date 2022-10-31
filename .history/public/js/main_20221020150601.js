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

var tempoRestante = $("#tempo--digitacao").text();
campo.one("focus", function() {
    var cronometroID = setInterval(function() {
        tempoRestante--;

        $("#tempo--digitacao").text(tempoRestante);
        if (tempoRestante < 1) {
            campo.attr("disabled", true);
            clearInterval(cronometroID);
        }
    }, 1000);
});

function reiniciaJogo() {
    $("#tempo--digitacao").text(10);
    campo.attr("disabled", false);
    campo.val("");
    $("#contador--caracteres").text(0);
    $("#contador--palavras").text(0);
}

var botaoReiniciar = $("#botao--reiniciar");
botaoReiniciar.on("click", function() {
    reiniciaJogo()
})

console.log(botaoReiniciar);

