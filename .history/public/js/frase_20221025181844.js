var frase = $(".frase");

$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

function trocaFraseAleatoria(data) {
    var tamanhoDoArray = data.lenght;
    var indiceAleatorio = Math.floor(Math.random() * data.length);

    console.log(indiceAleatorio);
    frase.text(data[3].texto)
}