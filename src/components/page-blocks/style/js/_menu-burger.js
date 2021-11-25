$(document).ready(function() {
    $('.menu-burger').click(function() {
        $('.menu-burger').toggleClass('open-menu');
        $('.main-nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});