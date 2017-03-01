$(window).on('beforeunload', function() {
    $(window).scrollTop(0); 
});



$(document).ready(function() { 
    blocksresize();

    $('.content').css({'opacity': '0'});
    $('.menu--item').hide();

    if ($(window).width() > 685) {
        $('[data-js-comeoutfrom="right"]').css({'left': '25%'});
        $('[data-js-comeoutfrom="left"]').css({'right': '25%'});
        $('[data-js-comeoutfrom="right"][data-js-comeoutdistance="100"]').css({'left': '100%'});
        $('[data-js-comeoutfrom="left"][data-js-comeoutdistance="100"]').css({'right': '100%'});
    }
    
    if ($(window).width() > 685) comeout();
    $('.content').fadeTo(1400, 1);

    $('.menu--item').delay(1000).each(function(i) {
        $(this).delay(350*i).show(600);
    });



    $('[data-js-mobileopener] .sidemenu--mobile-opener, [data-js-mobileopener] .sidemenu--item.__close').click(function() {
        if ($(this).closest('.sidemenu').attr('data-js-mobileopener') == 'closed')
            $(this).closest('.sidemenu').attr('data-js-mobileopener', 'opened');
        else
           $(this).closest('.sidemenu').attr('data-js-mobileopener', 'closed');
    });



});




$(window).scroll(function(){
    if ($(window).width() > 685) comeout();
});




$(window).resize(function() {
    blocksresize();
});





function blocksresize() {
    var w = $('.block').first().width();
    

    if ($(window).width() > 1500) {
        $('.block').each(function() {
            $(this).outerHeight(w*1.017);
        });
    } else if ($(window).width() > 685) {
        $('.block').each(function() {
            $(this).outerHeight(w*1.018);
        });
    } else {
        $('.block').each(function() {
            $(this).outerHeight(w*1);
        });
    }



    $('.menu--itemback').each(function() {
        $(this).outerHeight($(this).width());
    });

    if ($(window).width() > 685)
        $('.header').height(w*0.925);
    else {
        $('.header').height(w*2); //1.729
        $('[data-js-switchblocks]').height(w*2);
    }
    
}



function comeout() {
    var scrollBottom = $(window).scrollTop() + $(window).height();

    $('[data-js-comeoutfrom]').each(function() {
        if (scrollBottom > $(this).offset().top) {
            if ($(this).attr('data-js-comeoutfrom') == 'right')
                $(this).animate({'left': '0%'}, 700).removeAttr('data-js-comeoutfrom');
            if ($(this).attr('data-js-comeoutfrom') == 'left')
                $(this).animate({'right': '0%'}, 700).removeAttr('data-js-comeoutfrom');
        }
    });
    
}