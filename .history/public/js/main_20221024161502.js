
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");
var frase = $(".frase").text();

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    var quantidadePalavras  = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(quantidadePalavras);
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
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function() {
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {clearInterval(cronometroID);
                campo.attr("disabled", true);
                $(campo).addClass("campo-desabilitado")
                
            }
        }, 1000);
    });
}   

function inicializaMarcadores() {
    var frase = $(".frase").text();
    campo.on("input", function() {
        var digitado = campo.val();

        if(frase.startsWith(digitado)) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

function reiniciaJogo() {
    campo.attr("disabled",false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    $(campo).removeClass("campo-desabilitado");
    campo.removeClass("borda-vermelha"); 
    campo.removeClass("borda-verde");
    inicializaCronometro();
}

/*-----STYLE-----*/
$(".frase").css("font-size", "20px")
$(".campo-digitacao").css({"font-size": "18px", "min-height": "120px", "border-radius": "8px", "margin-bottom": "2%"})
