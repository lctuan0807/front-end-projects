$(document).ready(function() {
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

    //Figure Hover
    $('.figure').hover(function() {
        $(this).toggleClass('active');
        // /$(this).children('.figcaption').toggleClass('animated').toggleClass('zoomIn');
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
})