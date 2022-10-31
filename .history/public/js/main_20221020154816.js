var tempoInicial = 10

$(document).ready(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro(); 
    $("#botao-reiniciar").click(reiniciaJogo);
});


function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numeroPalavras = frase.split(" ").length;
    var tamanhoFrase = $(".informacoes--palavras");
    tamanhoFrase.text(numeroPalavras + " palavras");
}


function inicializaContadores() {
    var campo = $(".campo--digitacao");
    campo.on("input", function() {
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador--palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador--caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro() {
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
}


function reiniciaJogo() {
    $("#tempo--digitacao").text(tempoInicial);
    campo.attr("disabled", false);
    campo.val("");
    $("#contador--caracteres").text(0);
    $("#contador--palavras").text(0);

    inicializaCronometro();
}

var botaoReiniciar = $("#botao--reiniciar");

botaoReiniciar.click(function() {
    reiniciaJogo()
})

console.log(botaoReiniciar);

