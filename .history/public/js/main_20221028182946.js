
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");
var frase = $(".frase").text();

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    atualizaPlacar();

    $("#usuarios").selectize({
        create: true,
        sortField: 'text'
    });

    $(".tooltip").tooltipster({
        trigger: "custom"
    });
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras  = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");

    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    campo.on("input",function() {
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(" ").length;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro() {
    campo.one("focus", function() {        
        var tempoRestante = $("#tempo-digitacao").text();
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometroID);
                finalizaJogo();
            }
        }, 1000);
    });
} 

function finalizaJogo() {
    campo.attr("disabled", true);
    $(campo).addClass("campo-desabilitado")
    inserePlacar();
}

function inicializaMarcadores() {
    campo.on("input", function() {
        var frase = $(".frase").text();
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);

        if(digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

function reiniciaJogo() {
    // campo.attr("disabled",false);
    // campo.val("");
    // $("#contador-palavras").text("0");
    // $("#contador-caracteres").text("0");
    // $("#tempo-digitacao").text(tempoInicial);
    // $(campo).removeClass("campo-desabilitado");
    // campo.removeClass("borda-vermelha"); 
    // campo.removeClass("borda-verde");
    limpaCampo();
    inicializaCronometro();
}

function limpaCampo() {
    campo.attr("disabled",false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    $(campo).removeClass("campo-desabilitado");
    campo.removeClass("borda-vermelha"); 
    campo.removeClass("borda-verde");
}

function atualizaTempoInicial(tempo) {
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}

/*-----STYLE-----*/
$(".frase").css("font-size", "20px")
$(".campo-digitacao").css({"font-size": "18px", "min-height": "120px", "border-radius": "8px", "margin-bottom": "2%"})