$("#botao-placar").click(mostraPlacar);

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");

    var usuario = "Messias";
    var numPalavras = $("#contador-palavras").text();
    var fraseEscrita = $(".campo-digitacao").val();

    var linha = novaLinha(usuario, numPalavras, fraseEscrita);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);
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
    $(this).parent().parent().remove();
}

function mostraPlacar() {
    $(".placar").slideToggle(1000);
}