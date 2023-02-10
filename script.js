$(function(e){
    var alturaDaTela = $(window).height();
    $("#telaInicial").css("height", alturaDaTela+30);

    var div = document.getElementById('apresentacao');
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

    $("header p").click(function(e){
        $("html,body").animate({scrollTop:$("main").offset().top}, 1300)
    })

    escrever(texto1, div)
});


        

