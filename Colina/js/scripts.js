$(document).ready(function() {
        $('.preloading').addClass('preloader-site');
        /* ========== NAVIGATION ==========  */
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 50) {
                $('header').addClass('sticky');
            } else {
                $('header').removeClass('sticky');
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


        // if ($('.nav-block ul .menu-item').children('.sub-menu')) {
        //     if ($(document).width() < 992) {
        //         $('.nav-block ul .menu-item a').click(function(e) {
        //             e.preventDefault();
        //             var $this = $(this);
        //             var $li = $(this).parent();
        //             var $drop = $li.find('.sub-menu');

        //             $li.toggleClass('expanded');
        //             if ($li.hasClass('expanded')) {
        //                 $drop.slideDown();
        //             } else {
        //                 $drop.slideUp();
        //             }
        //         })
        //     }
        // }
        // $('.menu-item a').click(function(e) {
        //     if ($(this).parent().children('.sub-menu')) {
        //         e.preventDefault();
        //     }
        // })
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

        /* ========= SLIDE ========== */
        //Banner Slide
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

        //Rooms slide
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

        /* ========= DATEPICKER ========= */
        var checkin_date, checkin, checkin_dp,
            checkout_date, checkout, checkout_dp;
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        //Current date === Before Select Day
        var today = new Date();
        var arrivalDay = today.getDate();
        var arrivalMonth = monthNames[today.getMonth()];
        var nextDay = new Date(today);
        nextDay.setDate(today.getDate() + 1);
        var nextMonth = monthNames[nextDay.getMonth()];
        //Current date in booking
        $('#dateArrival .date-value .day').html(arrivalDay);
        $('#dateArrival .date-value .month').html(arrivalMonth);
        $('#dateDeparture .date-value .day').html(nextDay.getDate());
        $('#dateDeparture .date-value .month').html(nextMonth);
        //Default date on modal booking form
        $('.checkin-date').attr('value', today.toLocaleDateString());
        $('.checkout-date').attr('value', nextDay.toLocaleDateString());

        //Update date after select 
        function update() {
            if (checkin_date !== undefined) {
                let departureDay = new Date(checkin_date);
                departureDay.setDate(checkin_date.getDate() + 1);
                //arrival day - month
                $('#dateArrival .date-value .day').html(checkin_date.getDate());
                $('#dateArrival .date-value .month').html(monthNames[checkin_date.getMonth()]);
                //Departure day- month
                $('#dateDeparture .date-value .day').html(departureDay.getDate());
                $('#dateDeparture .date-value .month').html(monthNames[departureDay.getMonth()]);
                //Change date on modal booking form
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
        //Create checkin datepicker
        checkin = $(".checkin-date").datepicker({
            autoclose: true,
            todayHighlight: true,
            beforeShowDay: function(date) {
                //disabled date selection for day after checkout date
                if (checkout_date !== undefined) {
                    if (date > checkout_date) {
                        return false;
                    }
                }
                // if (checkin_date !== undefined) {
                //     if (date.getDate() === checkin_date.getDate() &&
                //         date.getMonth() === checkin_date.getMonth() &&
                //         date.getFullYear() === checkin_date.getFullYear()) {
                //         return {
                //             classes: 'active'
                //         };
                //     }
                // }
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
            //Create checkout datepicker
        checkout = $(".checkout-date").datepicker({
            autoclose: true,
            todayHighlight: true,
            beforeShowDay: function(date) {
                if (checkin_date !== undefined) {
                    // disabled date selection for day before checkin date
                    if (date < checkin_date) {
                        return false;
                    }
                }
                // display checkout date
                // if (checkout_date !== undefined) {
                //     if (date.getDate() === checkout_date.getDate() &&
                //         date.getMonth() === checkout_date.getMonth() &&
                //         date.getFullYear() === checkout_date.getFullYear()) {
                //         return {
                //             classes: 'active'
                //         };
                //     }
                // }
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

        /* ========= GUESTS ========= */
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
            //Adult
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
            //Children
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

        //Infant
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

        //Bind guest to modal
        $('.adults-input').attr('value', $('.adult .amount').val());
        $('.amount').change(function() {
            $('.adults-input').attr('value', $('.adult .amount').val());
            $('.children-input').attr('value', $('.children .amount').val());
            $('.infant-input').attr('value', $('.infant .amount').val());
        })


        //Figure Hover
        $('.figure').hover(function() {
            $(this).toggleClass('active');
        })

        //Stretcher Hover
        $('.stretcher-item').hover(function() {
            $(this).toggleClass('active').css('transition', 'all .5s ease-in-out');
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
    //Preloading Page
$(window).load(function() {
    window.setTimeout(function() {
        $('.loading').fadeOut();
        $('.preloading').removeClass('preloader-site').addClass('loaded');
    }, 1000)
})