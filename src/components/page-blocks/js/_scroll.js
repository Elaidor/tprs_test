$('a[href$="anchor"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    },{
        duration: 370,   
        easing: "linear" 
    });
    return false;
});