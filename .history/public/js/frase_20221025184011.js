var frase = $(".frase");


$("#botao-frase").click(trocaFraseAleatoria);


function fraseAleatoria() {
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

function trocaFraseAleatoria() {

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