$(function(e){
    var alturaDaTela = $(window).height();
    $("header").css("height", alturaDaTela);
    var alturaFoto, alturaTexto;
    alturaFoto = $("section aside").height();
    alturaTexto = $("section p").height()
    console.log(alturaFoto, alturaTexto)


    if(alturaFoto >= alturaTexto){
        $("#sectionApresentacao").css("height", alturaFoto + 40);
        
    }else{
        $("#sectionApresentacao").css("height", alturaTexto + 40);
    }

    var elementoPargrafo = document.getElementById('apresentacao');
    var texto1 = 'Olá, meu nome é Igor Rafael de Sousa !';

    function escrever(str, el) {
        var char = str.split('').reverse();
        var typer = setInterval(function() {
        if (!char.length) return clearInterval(typer);
            var next = char.pop();
            el.innerHTML += next;
                
        return true;
        }, 100);
    }

    $("header p").hover(function(e){$("header p img").attr("src", "imagens/SetaHover.png")},
                        function(e){$("header p img").attr("src", "imagens/Seta.png")});

    $("header p").click(function(e){
        $("html,body").animate({scrollTop:$("main").offset().top}, 1300)
    });

    escrever(texto1, elementoPargrafo)
});


        

