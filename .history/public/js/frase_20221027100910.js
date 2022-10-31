var frase = $(".frase");

$(function() {
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
    
    $("#botao-frase").click(fraseAleatoria);
    $("#botao-frase").click(reiniciaJogo);
});


function fraseAleatoria() {
    $("#spinner").toggle
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },3500);
    });
}

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}
