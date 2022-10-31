$("#botao-placar").click(mostraPlacar);
$("#botao-sync").click(sincronizaPlacar);

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");

    var usuario = "Messias";
    var numPalavras = $("#contador-palavras").text();
    var fraseEscrita = $(".campo-digitacao").val();

    var linha = novaLinha(usuario, numPalavras, fraseEscrita);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);

    //mostra placar
    $(".placar").slideDown(500);
    scrollPlacar();
}

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;

    $("html, body").animate(
    {
        scrollTop: posicaoPlacar
        
    }, 1000);
}

function novaLinha(usuario, numPalavras, fraseEscrita){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numPalavras);
    var colunaFrase = $("<td>").text(fraseEscrita)
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href","#").addClass("botao-remover").addClass("btn-floating").addClass("btn-small").addClass("red");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaFrase);
    linha.append(colunaRemover);

    return linha
}

function removeLinha(event){
    event.preventDefault();

    var linha = $(this).parent().parent()
    
    linha.fadeOut(1000);

    setTimeout(function(){
        linha.remove();
    }, 2000);
}

function mostraPlacar() {
    $(".placar").stop().slideToggle(600);
}


function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)");
        var palavras = $(this).find("td:nth-child(2)");
        var frase = $(this).find("td:nth-child(3)");

        consoçle.log(usuario, palavras, )
    });
}