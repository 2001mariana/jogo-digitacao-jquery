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
    .fail(exibeErro)
    .always(toogleSpinner)
}

function trocaFraseAleatoria(data) {
    // var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}


function trocaFrase(data) {
    // var frase = $(".frase");
    frase.text(data.texto); 
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}

function toogleSpinner() {
    $("#spinner").toggle();
}

function exibeErro() {
    $("#erro").toggle();

    setTimeout(function(){
        $("#erro").toggle();
    },3500);
}
