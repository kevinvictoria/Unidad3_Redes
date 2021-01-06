$(document).ready(main);

var contador = 1;

function main() {
    $('.menu').click(function(e) {
        e.preventDefault();
        //$('nav').toggle();
        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            e.preventDefault();
            $('nav').animate({
                left: '-100%'
            });
        }
    });
}