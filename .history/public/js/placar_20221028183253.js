$("#botao-placar").click(mostraPlacar);
$("#botao-sync").click(sincronizaPlacar);

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");

    var usuario = $("#usuarios").val();
    var numPalavras = $("#contador-palavras").text();
    var fraseEscrita = $(".campo-digitacao").val();

    var linha = novaLinha(usuario, numPalavras, fraseEscrita);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);

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

function removeLinha(event, id){
    event.preventDefault();

    var linha = $(this).parent().parent()
    
    linha.fadeOut(1000);

    setTimeout(function(){
        linha.remove();

        console.log(id)

    //     $.delete("http://localhost:3000/placar?id=Jx6oG08Id89hWKFw",  function() {
    //     console.log("Placar sincronizado com sucesso");
    // });
    }, 2000);
}

function mostraPlacar() {
    $(".placar").stop().slideToggle(600);
}


function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();
        var frase = $(this).find("td:nth-child(3)").text();

        var score = {
            usuario: usuario,
            pontos: palavras,
            frase: frase            
        };

        placar.push(score);
    });

    var dados = {
        placar: placar
    };


    $.post("http://localhost:3000/placar", dados , function() {
        console.log("Placar sincronizado com sucesso");
        $(".tooltip").tooltipster("open"); 
    }).always(function(){ //novo
        setTimeout(function() {
        $(".tooltip").tooltipster("close"); 
    }, 1200);


function atualizaPlacar(){
    $.get("http://localhost:3000/placar",function(data) {
        $(data).each(function(){
            var linha = novaLinha(this.usuario, this.pontos, this.frase);

            linha.find(".botao-remover").click(removeLinha);

            $("tbody").append(linha);
        });
    });
}