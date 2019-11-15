$(document).ready(function() {
        $('body').addClass('preloader-site');
        //Slider 
        var swiper1 = new Swiper('.slider .swiper-container', {
            loop: true,
            autoHeight: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        var swiper2 = new Swiper('.testimonial-content .swiper-container', {
            loop: true,
            spaceBetween: 30,
            autoplay: {
                delay: 5000,
            },
            speed: 800,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        });

        var swiper3 = new Swiper('.news-content .swiper-container', {
            loop: true,
            spaceBetween: 30,
            autoplay: {
                delay: 5000,
            },
            speed: 800,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        });

        //Add class active navbar
        $('.header .navbar-nav li a').click(function() {
            $('.header .navbar-nav').find('li.active').removeClass('active');
            $(this).parent('li').addClass('active');
        })

        //Lightbox
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'alwaysShowNavOnTouchDevices': true,
            'disableScrolling': true,
            'fadeDuration': 300,
            'imageFadeDuration': 300,
            'resizeDuration': 300
        })

        //Scroll to top
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        $('#toTop').click(function() {
            $(window).scrollTop(0);
        })

        //Open - close menu
        $('.menu-btn').click(function(e) {
            $('.navbar-collapse .navbar-nav').addClass('navbar-active');
            $('.overlay-menu').css('display', 'block');

        })
        $('.overlay-menu').click(function() {
            $('.navbar-collapse .navbar-nav').removeClass('navbar-active');
            $(this).css('display', 'none');
        })

        $('.navbar-nav .close-btn').click(function() {
            $('.navbar-collapse .navbar-nav').removeClass('navbar-active');
            $('.overlay-menu').css('display', 'none');
        })
        new window.JustValidate('.form-contact', {
            rules: {
                email: {
                    required: true,
                    email: true
                },
                name: {
                    required: true,
                }
            },
            messages: {
                required: 'The field is required',
                email: 'The e-mail address entered is invalid',
            },
            colorWrong: "red",
        })
    })
    //Preloading Page
$(window).load(function() {
    window.setTimeout(function() {
        $('.loading').fadeOut();
        $('body').removeClass('preloader-site').addClass('loaded');
    }, 1000)
})

new WOW().init();