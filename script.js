var scroll;
var lastPost = 0;
var navigatie = $('nav');
var height = navigatie.outerHeight();

function move() {
    scroll = $(this).scrollTop();
    if(scroll>lastPost){
        //we scrollen naar beneden
        console.log('we scrollen naar beneden');
        lastPost = scroll;
        navigatie.css('top', -height + 'px');
        $('nav').slideUp(1000);
    } 
    else{
        //we scrollen naar boven
        console.log('we scrollen naar boven');
        lastPost = scroll;
        navigatie.css('top', '0');
         $('nav').slideDown(1000);
    }
    //console.log(scroll);
}

$(window).on('scroll', move);