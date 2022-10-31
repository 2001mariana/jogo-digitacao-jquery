var frase = $(".frase");

$(function() {
    
    toogleSpinner()
    $.get("http://localhost:3000/frases", trocaFraseAleatoria).always(toogleSpinner)
    
    $("#botao-frase").click(fraseAleatoria);
    $("#botao-frase").click(reiniciaJogo);
});


function fraseAleatoria() {
    toogleSpinner()

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },3500);
    })
    .always(toogleSpinner)
}

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function toogleSpinner() {
    $("#spinner").toggle();
}
