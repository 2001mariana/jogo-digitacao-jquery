var frase = $(".frase");

$(function() {
    $.get("http://localhost:3000/frases", armazenaData);
});

$("#botao-frase").click(trocaFraseAleatoria);

function armazenaData(data){
    return data
}

// function fraseAleatoria() {
//     $.get("http://localhost:3000/frases", trocaFraseAleatoria);
// }

function trocaFraseAleatoria() {
    var data = armazenaData()

    console.log(data)

    var tamanhoDoArray = data.length;
    var indiceAleatorio = Math.floor(Math.random() * tamanhoDoArray);

    frase.text(data[indiceAleatorio].texto);
    var tempoInicial = $("#tempo-digitacao").text(data[indiceAleatorio].tempo);

    console.log('cliquei')

    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
}