$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
            $('header').addClass('sticky').css('transition', 'display .3s ease');
        } else {
            $('header').removeClass('sticky').css('transition', 'display .3s ease');
        }
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('.scroll-top').addClass('active-toTop');
        } else {
            $('.scroll-top').removeClass('active-toTop');
        }
    })
    $('.nav-block ul .menu-item').hover(function(e) {
        if ($(document).width() < 992) {
            return false;
        }
        $(this).toggleClass('menu-active');
    })
    $('.toggle-menu').click(function() {
        $(this).toggleClass('open-toggle-menu');
        $(this).parent().find('.nav-block').toggleClass('open-sub-menu');
    })
    $('.open-dropdown').click(function(e) {
        e.preventDefault();
        if ($(document).width() >= 992) {
            return false;
        }
        var $this = $(this);
        var $li = $(this).closest('li');
        var $drop = $li.find('ul');

        $li.toggleClass('expanded');
        if ($li.hasClass('expanded')) {
            $drop.slideDown();
        } else {
            $drop.slideUp();
        }
    })

    if ($('.slide').length) {
        $('.main-slide').slick({
            pauseOnHover: true,
            pauseOnFocus: true,
            autoplay: true,
            arrows: false,
            asNavFor: '.slideCtrl',
            dots: true
        });
        $('.slideCtrl').slick({
            arrows: false,
            autoplay: true,
            focusOnSelect: true,
            pauseOnHover: true,
            pauseOnFocus: true,
            asNavFor: '.main-slide',
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToScroll: 1,
                }
            }]
        })
    }
    if ($('.room-slide').length) {
        $(".room-slide").slick({
            dots: true,
            arrows: true,
            infinite: true,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }
    if ($('.quotes').length) {
        $('.quotes-slide').slick({
            dots: true,
            autoplay: true,
            slidesToShow: 4,
            responsive: [{
                    breakpoint: 468,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
    }
    var checkin_date, checkin, checkin_dp,
        checkout_date, checkout, checkout_dp;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    var today = new Date();
    var arrivalDay = today.getDate();
    var arrivalMonth = monthNames[today.getMonth()];
    var nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
    var nextMonth = monthNames[nextDay.getMonth()];
    $('#dateArrival .date-value .day').html(arrivalDay);
    $('#dateArrival .date-value .month').html(arrivalMonth);
    $('#dateDeparture .date-value .day').html(nextDay.getDate());
    $('#dateDeparture .date-value .month').html(nextMonth);
    $('.checkin-date').attr('value', today.toLocaleDateString());
    $('.checkout-date').attr('value', nextDay.toLocaleDateString());

    function update() {
        if (checkin_date !== undefined) {
            let departureDay = new Date(checkin_date);
            departureDay.setDate(checkin_date.getDate() + 1);
            $('#dateArrival .date-value .day').html(checkin_date.getDate());
            $('#dateArrival .date-value .month').html(monthNames[checkin_date.getMonth()]);
            $('#dateDeparture .date-value .day').html(departureDay.getDate());
            $('#dateDeparture .date-value .month').html(monthNames[departureDay.getMonth()]);
            $('.checkin-date').attr('value', "");
            $('.checkin-date').attr('value', checkin_date.toLocaleDateString());
            $('.checkout-date').attr('value', departureDay.toLocaleDateString());
        }
        if (checkout_date !== undefined) {
            $('#dateDeparture .date-value .day').html(checkout_date.getDate());
            $('#dateDeparture .date-value .month').html(monthNames[checkout_date.getMonth()]);
            $('.checkout-date').attr('value', checkout_date.toLocaleDateString());
        }
    }
    if ($(".checkin-date").length) {
        checkin = $(".checkin-date").datepicker({
            autoclose: true,
            todayHighlight: true,
            beforeShowDay: function(date) {
                if (checkout_date !== undefined) {
                    if (date > checkout_date) {
                        return false;
                    }
                }
                return true;
            }
        })
        checkin_dp = checkin.data('datepicker');
        checkin.on('changeDate', function(e) {
            checkin_date = e.date;
            checkout_dp.update();
            checkin_dp.update();
            update();
        })
    }
    if ($('.checkout-date').length) {
        checkout = $(".checkout-date").datepicker({
            autoclose: true,
            todayHighlight: true,
            beforeShowDay: function(date) {
                if (checkin_date !== undefined) {
                    if (date < checkin_date) {
                        return false;
                    }
                }
                return true;
            }
        })
        checkout_dp = checkout.data('datepicker');
        checkout.on('changeDate', function(e) {
            checkout_date = e.date;
            checkin_dp.update();
            checkout_dp.update();
            update();
        })
    }
    $('.result').click(function() {
        $('.guest-list').toggleClass('open-guest-list');
        $('.overlay').css('display', 'block');
    })
    $('.overlay').click(function() {
        $(this).css('display', 'none');
        $('.guest-list').removeClass('open-guest-list');
    })
    $('.apply').click(function() {
        $('.guest-list').removeClass('open-guest-list');
    })
    var x = parseInt($('.adult .amount').val(), 10);
    $('.adult .plus').click(function(e) {
        e.preventDefault();
        if (!isNaN(x)) {
            x++;
            $('.adult .amount').attr('value', x).trigger("change");
        } else {
            $('.adult .amount').attr('value', 0).trigger("change");
        }
    })
    $('.adult .minus').click(function(e) {
        e.preventDefault();
        if (!isNaN(x) && x > 0) {
            x--;
            $('.adult .amount').attr('value', x).trigger("change");
        } else {
            $('.adult .amount').attr('value', 0).trigger("change");
        }
    })
    var y = parseInt($('.children .amount').val(), 10);
    $('.children .plus').click(function(e) {
        e.preventDefault();
        if (!isNaN(y)) {
            y++;
            $('.children .amount').attr('value', y).trigger("change");
        } else {
            $('.children .amount').attr('value', 0).trigger("change");
        }
    })
    $('.children .minus').click(function(e) {
        e.preventDefault();
        if (!isNaN(y) && y > 0) {
            y--;
            $('.children .amount').attr('value', y).trigger("change");
        } else {
            $('.children .amount').attr('value', 0).trigger("change");
        }
    })
    var z = parseInt($('.infant .amount').val(), 10);
    $('.infant .plus').click(function(e) {
        e.preventDefault();
        if (!isNaN(z)) {
            z++;
            $('.infant .amount').attr('value', z).trigger("change");
        } else {
            $('.infant .amount').attr('value', 0).trigger("change");
        }
    })
    $('.infant .minus').click(function(e) {
        e.preventDefault();
        if (!isNaN(z) && z > 0) {
            z--;
            $('.infant .amount').attr('value', z).trigger("change");
        } else {
            $('.infant .amount').attr('value', 0).trigger("change");
        }
    })
    $('.amount').each(function() {
        $(this).change(function() {
            calculateSum();
        })
    })

    function calculateSum() {
        var sum = 0;
        $('.amount').each(function() {
            sum += parseInt(this.value);
        });
        $('.qty-result-text').html(sum);
    }
    $('.adults-input').attr('value', $('.adult .amount').val());
    $('.amount').change(function() {
        $('.adults-input').attr('value', $('.adult .amount').val());
        $('.children-input').attr('value', $('.children .amount').val());
        $('.infant-input').attr('value', $('.infant .amount').val());
    })
    $('.figure').hover(function() {
        $(this).toggleClass('active');
    })
    $('.stretcher-item').hover(function() {
        $(this).toggleClass('active').css('transition', 'all .5s ease-in-out');
    })
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

    if ($('.gallery-detail__image').length) {
        $('.gallery-detail__image').lightGallery();
    }

    //Fix object-fit 
    function isIE() {
        ua = navigator.userAgent;
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
        return is_ie;
    }
    if (isIE()) {
        $('.slide-image').css('opacity', '0');
        $('.slide-item').css('background', function() {
            var bg = ('url(' + $(this).data("image-src") + ') no-repeat center center');
            return bg;
        })
    }
    if ($('#contact-form').length) {
        new JustValidate('#contact-form', {
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                text: {
                    required: true
                },
                phone: {
                    required: true
                }
            }
        })
    }
    if ($('#comment-form').length) {
        new JustValidate('#comment-form', {
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                comment: {
                    required: true
                }
            }
        })
    }
    if ($('iframe').length) {
        var ifWidth = $('iframe').width();
        var height = ifWidth * 9 / 16;
        $('iframe').css('height', height + 'px');
        $(window).resize(function() {
            var ifWidth = $('iframe').width();
            var height = ifWidth * 9 / 16;
            $('iframe').css('height', height + 'px');
        })
    }
    if ($('video').length) {
        var ifWidth = $('iframe').width();
        var height = ifWidth * 9 / 16;
        $('video').css('height', height + 'px');
        $(window).resize(function() {
            var ifWidth = $('video').width();
            var height = ifWidth * 9 / 16;
            $('video').css('height', height + 'px');
        })
    }
})