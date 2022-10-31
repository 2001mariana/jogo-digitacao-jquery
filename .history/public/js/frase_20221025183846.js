var frase = $(".frase");

$(function() {
    $.get("http://localhost:3000/frases", armazenaData);
});

$("#botao-frase").click(fraseAleatoria);

function armazenaData(data){
    return data
}

// function fraseAleatoria() {
//     $.get("http://localhost:3000/frases", trocaFraseAleatoria);
// }

function trocaFraseAleatoria() {
    var data = armazenaData()

    var tamanhoDoArray = data.length;
    var indiceAleatorio = Math.floor(Math.random() * tamanhoDoArray);

    frase.text(data[indiceAleatorio].texto);
    var tempoInicial = $("#tempo-digitacao").text(data[indiceAleatorio].tempo);

    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
}