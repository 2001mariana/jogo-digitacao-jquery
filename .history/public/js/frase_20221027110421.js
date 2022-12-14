var frase = $(".frase");

$(function() {
    
    toogleSpinner()
    $.get("http://localhost:3000/frases", trocaFraseAleatoria).always(toogleSpinner)
    
    $("#botao-frase").click(fraseAleatoria);
    $("#botao-frase").click(reiniciaJogo);
    $("#botao-frase-id").click(buscaFrase);
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

$("#frase-id").


function trocaFrase(data) {
    // var frase = $(".frase");
    frase.text(data.texto); 
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}

function buscaFrase() {

    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();

    var dados = {id : fraseId}; 

    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(exibeErro)
    .always(toogleSpinner);
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
