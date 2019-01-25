$(document).ready(function() {
    /*------- Swiper Slider -------*/
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 3500,
        speed: 1500,
        loop: true,
        autoplayDisableOnInteraction: false
    });
    
 
});
/*
var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.jumb-header').css('background-size', (jumboHeight-scrolled*0.2) + '%');
}

$(window).scroll(function(e){
    parallax();
});
*/