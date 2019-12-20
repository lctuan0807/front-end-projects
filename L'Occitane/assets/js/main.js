$(document).ready(function() {
    $('#openMenu').click(function() {
        $('#sideNavSection').toggleClass('sidenav-active');
        $('.header__wrapper').toggleClass('header-active');
        $('#searchArea').removeClass('search-box-active')
    })
    $('.nav-item .menu-link').click(function(e) {
        if ($(document).width() < 992) {
            e.preventDefault();
        }
        var $this = $(this);
        var $li = $(this).closest('li');
        $li.toggleClass('nav-active');
    })
    $('.sub-menu-item .icon-plus').click(function() {
        var $this = $(this);
        var $li = $(this).closest('li');
        $li.toggleClass('sub-active');
    })
    $('.item .item-head').click(function() {
        var $this = $(this);
        var $li = $(this).parent();
        $li.toggleClass('item-active');
    })
    $('#searchIcon').click(function() {
        $('#searchArea').toggleClass('search-box-active');
        $('.overlay').toggleClass('overlay-active');
    })
    $('.btn-search').click(function() {
        $('.search-area').toggleClass('search-area-active');
    })
    $('.nav-item').hover(function() {
        $(this).toggleClass('menu-active');
    })

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
            $('.header__wrapper').addClass('header-sticky');
            $('.side__navigation').addClass('nav-sticky');
            $('#searchArea').addClass('search-box-desktop-hide');
            $('.search-btn-close .icon-search').click(function() {
                $('#searchArea').removeClass('search-box-desktop-hide');
            })
        } else {
            $('.header__wrapper').removeClass('header-sticky');
            $('.side__navigation').removeClass('nav-sticky');
            $('#searchArea').removeClass('search-box-desktop-hide');
        }
    })

    function background() {
        var img = $('.bg-image');
        img.css('background-image', function() {
            var bg = ('url(' + $(this).data('image-src') + ')');
            return bg;
        })
    }
    background();
    if (('.wrap__box').length) {
        $('.filter-item').click(function() {
            $(this).toggleClass('filter-item-active');
            if ($('.item-checkbox').length) {
                $('.item-checkbox').click(function(e) {
                    e.preventDefault();
                    $(this).toggleClass('item-checkbox-active')
                })
            }
        })
        $('.open-wrap').click(function() {
            var sib = $(this).siblings('.wrap__box');
            sib.css('display', 'block');
            var close = sib.children().find('.close-box');
            close.click(function() {
                sib.css('display', 'none');
            })
        })
    }

    if ($('.sort-radio').length) {
        $('.sort-radio').click(function() {
            $(this).toggleClass('sort-radio-active')
        })
    }
    if ($('.product__tab--title').length) {
        $('.product__tab--title').click(function() {
            $(this).toggleClass('product__tab--title-active')
            $(this).next().toggleClass('product__tab--description-active');
        })
    }
    if ($('.product__routine--item').length) {
        $('.product__routine--item').click(function() {
            if ($(this).hasClass('item-disable')) {
                $(this).off();
            } else {
                $(this).toggleClass('product__routine--item-inactive');
                if ($(this).children().children('.product__item--bottom').children('.price').attr('data-price')) {
                    $(this).children().children('.product__item--bottom').children('.price').removeAttr('data-price');
                } else {
                    var price = $(this).children().children('.product__item--bottom').children('.price').attr('data-content');
                    $(this).children().children('.product__item--bottom').children('.price').attr('data-price', price);
                }
                totalPrice();
            }
        })
    }
    totalPrice();

    function totalPrice() {
        var sum = 0;
        $('.product__routine--item').each(function() {
            if (!$(this).hasClass('product__routine--item-inactive')) {
                item = $(this).children().children('.product__item--bottom').children('.price').attr('data-price');
                sum += parseInt(item);
            }
        })
        sum = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(sum);
        $('#routinePriceTotal').html('<strong>' + sum + '</strong>');
    }
    if ($(window).width() > 992) {
        $('.zoom-img').magnify();
    } else {
        return;
    }
    if ($('.product__info--slide').length) {
        if ($('.main-slide').children().length > 1) {
            $('.main-slide').slick({
                dots: true,
                arrows: true,
                asNavFor: '.sub-slide',
                mobileFirst: true,
                focusOnSelect: false,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                }]
            })
            $('.sub-slide').slick({
                asNavFor: '.main-slide',
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                arrows: true,
                focusOnSelect: true
            })
            $('.zoom-img').magnify();
        } else {
            $('.zoom-img').magnify();
        }
    }

    function formatCurrency() {
        var value = $('.format-price').attr('data-price');
        var newPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(value);
        $('.format-price').html(newPrice);
    }
    formatCurrency();
    if ($('.range-price').length) {
        $('.range-price').rangeSlider({
            direction: 'horizontal',
            type: 'interval',
            skin: 'red',
            //settings: false,
            bar: true,
            tip: false,
        }, {
            min: 250000,
            max: 2500000,
            step: 50000,
            values: [250000, 2500000]
        })
    }
})