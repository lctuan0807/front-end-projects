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
    $('footer .item-head').click(function() {
        var $this = $(this);
        var $li = $(this).parent();
        $li.toggleClass('footer-sub-active');
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
})