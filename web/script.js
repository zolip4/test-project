$(document).ready(function(){
    $('.responsive').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 6,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

});

$(document).ready(function(){
    $('.hamburger-list').click(function () {
        $('.hamburger-menu-items').slideToggle();
    });
});

$(document).ready(function(){
    $('.color-button-text-minus').click(function () {
        var $input = $('.color-input-quantity-count');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.color-button-text-plus').click(function () {
        var $input = $('.color-input-quantity-count');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});