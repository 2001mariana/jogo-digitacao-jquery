var frase = $(".frase");

$(function() {
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
    
    $("#botao-frase").click(fraseAleatoria);
    $("#botao-frase").click(reiniciaJogo);
});

function fraseAleatoria() {
    $.get("http://localhost:3000/frases2222", trocaFraseAleatoria) //URL errada para simular um problema
    .fail(function(){
        $("#erro").show(); //ao falhar mostra a mensagem de erro
    });
}


// function fraseAleatoria() {
//     $.get("http://localhost:3000/frases", trocaFraseAleatoria);
// }

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
    // limpaCampo();
}
