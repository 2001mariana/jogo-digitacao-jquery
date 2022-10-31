var frase = $(".frase");

$(function() {
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
});

$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

function trocaFraseAleatoria(data) {
    var tamanhoDoArray = data.length;
    var indiceAleatorio = Math.floor(Math.random() * tamanhoDoArray);

    frase.text(data[indiceAleatorio].texto);
    var tempoInicial = $("#tempo-digitacao").text(data[indiceAleatorio].tempo);

    atualizaTamanhoFrase();
    // atualizaTempoInicial(data[indiceAleatorio].tempo)
    // inicializaContadores();
    // inicializaCronometro();
    inicializaMarcadores();
}