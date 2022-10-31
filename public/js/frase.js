var frase = $(".frase");

$(function() {
    
    toogleSpinner()

    $.get("http://localhost:3000/frases", trocaFraseAleatoria).always(toogleSpinner);
    $.get("http://localhost:3000/frases", exibeFrases);

    $("#botao-frase").click(fraseAleatoria);
    $("#botao-frase").click(reiniciaJogo);
    $("#botao-frase-id").click(buscaFrase);
});

// function novaLinhaFrases() {
//     var linha = $("<tr>");

//     var colunaIDfrase = $("<td>").text('49')
//     var colunaFrase = $("<td>").text('teste frase')

//     linha.append(colunaIDfrase);
//     linha.append(colunaFrase);

//     return linha
// }

function novaLinhaFrase(id, fraseEscrita){
    var linha = $("<tr>");
    var colunaIDfrase = $("<td>").text(id);
    var colunaFrase = $("<td>").text(fraseEscrita);

    linha.append(colunaIDfrase);
    linha.append(colunaFrase);

    return linha
}


function exibeFrases(data) {

    $(data).each(function(){
        var linha = novaLinhaFrase(this._id, this.texto);

        console.log(this._id, this.texto);

        $("tbody.tbody-frases").append(linha);
    });
    
}

function fraseAleatoria() {
    toogleSpinner()

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(exibeErro)
    .always(toogleSpinner)
}

function trocaFraseAleatoria(data) {
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    $("#frase-id").attr("max", data.length - 1)
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function trocaFrase(data) {
    frase.text(data.texto); 
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}

function buscaFrase() {
    toogleSpinner()
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
