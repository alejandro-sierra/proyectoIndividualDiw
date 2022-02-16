$(document).ready(function () {

    /* Flecha Lateral Derecha */
    $(".flechaArriba").css("display", "none");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".flechaArriba").fadeIn("slow");
        }
        else {
            $(".flechaArriba").fadeOut("slow");
        }
    });

    $('.flechaArriba').click(function () {
        $('html , body').animate({ scrollTop: 0 }, 'slow')
    });

    /* Redirección a Enlaces */
    $('#btn1').click(function () {
        let posicion = $('.tabla').offset();
        $('html , body').animate({ scrollTop: posicion.top - 70 }, 'slow')
    });

    $('#btn2').click(function () {
        let posicion = $('.mapa').offset();
        $('html , body').animate({ scrollTop: posicion.top - 70 }, 'slow')
    });

    $('#btn3').click(function () {
        let posicion = $('.youtube').offset();
        $('html , body').animate({ scrollTop: posicion.top - 70 }, 'slow')
    });

    $('#btn4').click(function () {
        let posicion = $('.codepen').offset();
        $('html , body').animate({ scrollTop: posicion.top - 70 }, 'slow')
    });

    $('#btn5').click(function () {
        let posicion = $('.gradiente').offset();
        $('html , body').animate({ scrollTop: posicion.top - 70 }, 'slow')
    });


    /* Menu Hamburgesa */
    var x = true;
    $('.icon__hamburger').on("click", function (e) {
        e.preventDefault();
        if (x) {
            $('.navegacion__enlaces').stop().slideToggle('fast');
            x = false;
        } else {
            $('.navegacion__enlaces').stop().slideToggle('fast', function () {
                $('.navegacion__enlaces').css('display', 'block');
                x = true;
            })
        }
    });

});