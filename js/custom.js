(function($) {

    "use strict";

    // Config
    //-------------------------------------------------------------------------------
    var companyName = 'Spa and Wellness Center';
    var address = '3861 Sepulveda Blvd., Culver City, CA 90230'; // Enter your Address


    // Preloader
    //-------------------------------------------------------------------------------
    window.onscroll = function () {
        window.scrollTo(0, 0);
    };

    $(window).load(function () {
        setTimeout(function () {
            window.onscroll = function () {};
            $('#page-preloader').addClass('slideOutUp');

            // Fix for IE 9
            setTimeout(function () {
                $('#page-preloader').addClass('hidden');
            }, 700);

        }, 100);

    });


    // Scroll To Animation
    //-------------------------------------------------------------------------------
    $('body').scrollspy({target: '#navigation-top-1', offset: 88});

    var scrollTo = $(".scroll-to");

    scrollTo.click(function (event) {
        $('.modal').modal('hide');
        var position = $(document).scrollTop();
        var scrollOffset = 87;

        var marker = $(this).attr('href');
        $('html, body').animate({scrollTop: $(marker).offset().top - scrollOffset}, 'slow');
        return false;
    });


    // Scroll Up Btn
    //-------------------------------------------------------------------------------
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scroll-up-btn').removeClass("animated fadeOutRight");
            $('.scroll-up-btn').fadeIn().addClass("animated fadeInRight");
        } else {
            $('.scroll-up-btn').removeClass("animated fadeInRight");
            $('.scroll-up-btn').fadeOut().addClass("animated fadeOutRight");
        }
    });



    // Navigation Top
    //-------------------------------------------------------------
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 300) {
            $('.navbar-hidden').fadeIn();
        } else {
            $('.navbar-hidden').fadeOut();
        }
    });

    /* fix vertical when not overflow
     call fullscreenFix() if .fullscreen content changes */
    function fullscreenFix() {
        var h = $('body').height();
        // set .fullscreen height
        $(".content-b").each(function (i) {
            if ($(this).innerHeight() <= h) {
                $(this).closest(".fullscreen").addClass("not-overflow");
            }
        });
    }

    $(window).resize(fullscreenFix);
    fullscreenFix();


    /* resize background images */
    function backgroundResize() {
        var windowH = $(window).height();
        $(".header-full-screen-img").each(function (i) {
            var path = $(this);
            // variables
            var contW = path.width();
            var contH = path.height();
            var imgW = path.attr("data-img-width");
            var imgH = path.attr("data-img-height");
            var ratio = imgW / imgH;
            // overflowing difference
            var diff = parseFloat(path.attr("data-diff"));
            diff = diff ? diff : 0;
            // remaining height to have fullscreen image only on parallax
            var remainingH = 0;
            if (path.hasClass("parallax")) {
                var maxH = contH > windowH ? contH : windowH;
                remainingH = windowH - contH;
            }
            // set img values depending on cont
            imgH = contH + remainingH + diff;
            imgW = imgH * ratio;
            // fix when too large
            if (contW > imgW) {
                imgW = contW;
                imgH = imgW / ratio;
            }
            //
            path.data("resized-imgW", imgW);
            path.data("resized-imgH", imgH);
            path.css("background-size", imgW + "px " + imgH + "px");
        });
    }

    $(window).resize(backgroundResize);
    $(window).focus(backgroundResize);
    backgroundResize();


// end document ready
})(jQuery);