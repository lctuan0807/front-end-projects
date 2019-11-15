$(document).ready(function() {
    //Navigation
    $('.nav-main .nav-block .menu-item a').hover(function() {
        $(this).parent().toggleClass('menu-active');
    })

    //Slide
    var bannerSlide = new Swiper('.slide .swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
        },
    });

    var roomSlide = new Swiper('.rooms .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            468: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    })

    //DatePicker
    $(function() {
        $('.datepicker').datepicker();

    });

    //Figure Hover
    $('.figure').hover(function() {
        $(this).toggleClass('active');
        // /$(this).children('.figcaption').toggleClass('animated').toggleClass('zoomIn');
    })

    //Stretcher Hover
    $('.stretcher-item').hover(function() {
            $(this).toggleClass('active').css('transition', 'all .5s ease-in-out');
        })
        //Quotes Slide
    var quotesSlide = new Swiper('.quotes .swiper-container', {
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            468: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    })

    //Scroll to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $(window).scrollTop(0);
    })

})