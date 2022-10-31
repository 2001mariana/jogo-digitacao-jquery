var frase = $(".frase");

$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

function trocaFraseAleatoria(data) {
    var tamanhoDoArray = data.length;
    var indiceAleatorio = Math.floor(Math.random() * data.tamanhoDoArray);

    console.log(indiceAleatorio);
    frase.text(data[indiceAleatorio].texto)
}