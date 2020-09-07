$(function(){
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/left-arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/right-arrow.svg" alt=""></button>',
        dots: true,
        initialSlide:1,
        autoplay:true,
        autoplaySpeed:2000
    });
    $('.menu__btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('menu__btn--active');
        $('.nav').toggleClass('nav__active');
      });
});