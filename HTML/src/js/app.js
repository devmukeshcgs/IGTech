var ISH = ISH || {};

;
ISH.windowObj = ISH.windowObj || {};

ISH = (function(ISH, $) {
    //Cashe html tag 
    var $html = $('html');
    var $widgetBox = $('.widget-box');
    var $panelBody = $('.widget-box .panel-body');
    var $panelHeading = $('.widget-box .panel-heading');

    var WW = $(window).width();
    var WH = $(window).height();

    //Mobile navigation Height 

    function mobileMaxHeight() {
        if (WW < 767) {
            $(document).find('#bs-example-navbar-collapse-1').css('max-height', '800px');
            $(document).find('#bs-example-navbar-collapse-1').attr('style', 'max-height: 800px');
            //console.log(WH);
        }
    } 

    //Functions
    function initAccordion() {
        if (WW < 767) {
            $('#homeslider').sliderPro({
                width: WW,
                height: 300,
                arrows: false,
                buttons: true,
                waitForLayers: true,
                autoplay: true,
                autoScaleLayers: false,
                imageScaleMode: 'cover',
                slideDistance: 0,
                touchSwipe: false,
                sliderResize: function() {
                    console.log('slider is resized');
                },
                update: function() {
                    //alert('slider is update');
                },
            })
        } else {
            $('#homeslider').sliderPro({
                width: WW,
                height: WH/1.5,
                arrows: false,
                buttons: true,
                autoplay: true,
                autoScaleLayers: false,
                imageScaleMode: 'cover',
                slideDistance: 0,
                touchSwipe: false,
                breakpoints: {
                    1920: {
                        width: WW,
                        height: WH/1.5,
                        touchSwipe: false

                    },
                    1204: {
                        width: WW,
                        height: WH/1.5,
                        touchSwipe: false

                    },
                    768: {
                        height: WW / 2,
                        touchSwipe: false

                    },
                    767: {
                        height: 400,

                    },
                    640: {
                        height: 150,
                    },
                    480: {
                        height: 350,
                    },
                    320: {
                        height: 250,
                    }
                }
            });
        }
        //NEWS SLIDER
        setTimeout(function() {
            $(".owl-carousel").owlCarousel({
                loop: true,
                margin: 10,
                items: 4,
                nav: false,
                dots: true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1, 
                        dots: true,
                        nav: false
                    },
                    480: {
                        items: 2, 
                        dots: true,
                        nav: false
                    },

                    768: {
                        items: 3,
                        nav: false,
                        margin: 10,
                        dots: true,
                    },
                    1000: {
                        items: 4,
                        margin: 10,
                        nav: false,
                        loop: false
                    }
                }
            });
        }, 1000);
        //SPONSORS
        $('#sponsorsslider').sliderPro({
            width: 150,
            height: 150,
            visibleSize: '100%',

            autoSlideSize: true
        });

    }
    // THUMB HEight
    function thumbHeight() {
        if (WW > 768) {
            //var thumbH = $('.related-links').find('.details').width();
            //$('.related-links .details').height(thumbH);
        }
    }
    // SCROLL PAGE
    function scrollPage() {
        //jQuery for page scrolling feature - requires jQuery Easing plugin
        // $(function() {
        //   $(document).on('click', 'a.page-scroll', function(event) {
        //     var $anchor = $(this);
        //     $('html, body').stop().animate({
        //       scrollTop: $($anchor.attr('href')).offset().top
        //     }, 1500, 'easeInOutExpo');
        //     $('a.page-scroll').removeClass('active');
        //     $(this).addClass('active');
        //     event.preventDefault();
        //   });
        // });


    }
    //Scroll Top
    function scrollTop() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    }
    //Parallax
    function ishParallax() {}

    function tweenMaxAnmation() {
        $('.ish-dropdown').hover(function() {
                $(this).addClass("active");
            },
            function() {
                $(this).removeClass("active");
            });

        if ($(window).width() > 768) {
            // init controller
            var controller = new ScrollMagic.Controller({
                globalSceneOptions: {
                    triggerHook: "onEnter",
                    duration: "200%"
                }
            });
            // build scenes
            setTimeout(function() {
                new ScrollMagic.Scene({ triggerElement: "#parallax1" })
                    .setTween("#parallax1 > div", { y: "50%", ease: Linear.easeNone })
                    .addTo(controller);
            }, 1000);
            // build scenes
            setTimeout(function() {

                new ScrollMagic.Scene({ triggerElement: "#parallax2" })
                    .setTween("#parallax2 > div", { y: "50%", ease: Linear.easeNone })
                    // .addIndicators()
                    .addTo(controller);
            }, 1000);


            //Section animation
            var tweenSec1 = TweenMax.staggerFromTo(".sec-1 .details", 0.5, { x: -40 }, { x: 0, ease: Linear.easeOut });
            new ScrollMagic.Scene({ triggerElement: ".sec-1" })
                .setTween(tweenSec1)
                .addTo(controller);

            var third = TweenMax.staggerFromTo(".sec-2 .details", 0.5, { x: -40 }, { x: 0, ease: Linear.easeOut });
            new ScrollMagic.Scene({ triggerElement: "#third" })
                .setTween(third)
                .addTo(controller);

            var tweenSec3 = TweenMax.staggerFromTo(".sec-3 .details", 0.5, { x: -40 }, { x: 0, ease: Linear.easeOut });
            new ScrollMagic.Scene({ triggerElement: ".sec-3" })
                //.setTween(".sec-3", {opacity:0, y:100, delay:1,ease: Linear.easeNone})
                .setTween(tweenSec3)
                .addTo(controller);

            var tweenSec3 = TweenMax.staggerFromTo(".location-space .location-detail", 0.5, { x: -30 }, { x: 0, ease: Linear.easeOut });
            new ScrollMagic.Scene({ triggerElement: ".location-space" })
                //.setTween(".sec-3", {opacity:0, y:100, delay:1,ease: Linear.easeNone})
                .setTween(tweenSec3)
                .addTo(controller);


            // ON SCROLL COMACT NAV
            setTimeout(function() {
                $('#header_nav').data('size', 'big');
            }, 1000);

            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if ($(document).scrollTop() > 90) {
                    if ($('#header_nav').data('size') == 'big') {

                        $('#header_nav').data('size', 'small');

                        $('#header_nav').addClass('out'); 
                        $('#sub_header_nav').addClass('in');

                        $('#header_nav').css({ 'overflow': 'hidden' });
                        $('#sub_header_nav').removeAttr('style');
                    }
                } else {
                    if ($('#header_nav').data('size') == 'small') {

                        $('#header_nav').data('size', 'big');
                        $('#sub_header_nav').removeClass('in');
                        $('#header_nav').removeClass('out');

                        $('#sub_header_nav').css({ 'overflow': 'hidden' });
                        $('#header_nav').removeAttr('style');


                    }
                }
            });

        } else {

        }
   

        // var tween = TweenMax.staggerFromTo(" #fourth .full-sec-body2 > div", 0.5, {
        //   x: 100
        // }, {
        //   x: 0,
        //   ease: Linear.easeOut
        // }, 0.15);
        // new ScrollMagic.Scene({
        //     triggerElement: "#fourth"
        //   })
        //   .setTween(tween)
        //   .addTo(controller);

        //  TweenLite.from('.thumb-img', 1, {opacity:0, x:50,delay:1})
        //            .to('.thumb-img', 1, {opacity:1, x:50,delay:2});
        $(function() {
            $('#header_nav').data('size', 'big');
        });
        //TweenLite.from('.logo-bg a img', 1, {opacity:0, x:-20, delay:.5});
        //TweenLite.from('.container', 1, {opacity:0, y:50, delay:.5});
        //TweenLite.from('#header_nav', 1, {opacity:0, y:-80, delay:.5  });

        if ($(window).width() <= 425) {
            $('.navbar-collapse').css('max-height', '800px');
        } else {}

    }

    function stickyHeader() {
        // $(function() {
        //   $('#header_nav').data('size', 'big');
        // });
        //
        // $(window).scroll(function() {
        //   var scroll = $(window).scrollTop();
        //   //console.log(scroll);
        //   if ($(document).scrollTop() > 0) {
        //     if ($('#header_nav').data('size') == 'big') {
        //        $('#header_nav').data('size', 'small');
        //        TweenLite.from('.logo-bg a img', 1, {height:81, delay:.5})
        //                    .to('.logo-bg a img', 1, {height:50, delay:2});
        //       // $('#header_nav').css({overflow: 'hidden'});
        //       // $('#header_nav').stop().animate({height: '53px'}, 500);
        //       // $('.logo-bg a img').stop().animate({height: '50px'}, 500);
        //       // $('.sub-header').stop().animate({height: '0px'}, 500);
        //       //$('.sub-header').slideUp();
        //     }
        //   } else {
        //     if ($('#header_nav').data('size') == 'small') {
        //       $('#header_nav').data('size', 'big');
        //       // $('.sub-header').slideDown();
        //       // $('.logo-bg a img').stop().animate({height: '81px'}, 500)
        //       // $('#header_nav').stop().animate({height: '500px'}, 500);
        //     }
        //   }
        // });

    }

    function ishInclude() {
        // $('#inc-navigation').load('http://localhost:3000/navigation.html');
        // $('#inc-footer').load('http://localhost:3000/footer.html');
        $.ajax({
            type: "GET",
            url: "navigation.html",
            data: {},
            success: function(data) {
                $('#inc-navigation').html(data);
            }
        });

        $.ajax({
            type: "GET",
            url: "footer.html",
            data: {},
            success: function(data) {
                $('#inc-footer').html(data);
            }
        });
    }

    //Toggole Icon
    function toggleIcon() {
        function toggleIcon(e) {
            $(e.target)
                .prev('.panel-heading')
                .find(".more-less")
                .toggleClass('in')
                .toggleClass('fa-angle-right fa-angle-down');

        }
        $('.panel-group').on('hidden.bs.collapse', toggleIcon);
        $('.panel-group').on('shown.bs.collapse', toggleIcon);
    }

    function Collapse() {
        // if (WW < 768) {
        //     $('ul.list-to-dropdown').each(function() {
        //         var $select = $('<select />');

        //         $(this).find('a').each(function() {
        //             var $option = $('<option />');
        //             $option.attr('value', $(this).attr('href')).html($(this).html());
        //             $select.append($option);
        //         });

        //         $(this).replaceWith($select);
        //     });
        // }

        // $('.collapse').on('shown.bs.collapse', function() {
        //     $(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
        // }).on('hidden.bs.collapse', function() {
        //     $(this).parent().find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
        // });

    }

    function boxMaxHeight() {
        setTimeout(function() {
            var maxHeight = 0;
            if (jQuery(window).width() > 767) {
                jQuery(".related-links .details").each(function() {
                    if (jQuery(this).height() > maxHeight) {
                        maxHeight = jQuery(this).height()
                    }
                });
                jQuery(".related-links .details").height(maxHeight + 30)
            }
        }, 3000)


        setTimeout(function() {
            var maxHeightSocial = 0;
            if (jQuery(window).width() >= 768) {
                jQuery(".foot-h").each(function() {
                    if (jQuery(this).height() > maxHeightSocial) {
                        maxHeightSocial = jQuery(this).height()
                    }
                });
                jQuery(".foot-h").height(maxHeightSocial)
            }
        }, 1000)

        if (WW >= 768) {
            var boxW = jQuery(".link-box").width();
            jQuery(".link-box > div").height(boxW - 36);
        }
    }

    function loader() {
        // Wait for window load
        //$(window).load(function() {
        // Animate loader off screen
        //$("#se-pre-con").fadeOut("slow");
        //});
        setTimeout(function() {
            $(".block2 div").width($(".page-heading h1").width() - 14);
        }, 1000);

    }

    function ishDropdown() {

        // $('.dropdown').mouseenter(function() {
        //     if (!$('.navbar-toggle').is(':visible')) { // disable for mobile view
        //         if (!$(this).hasClass('open')) { // Keeps it open when hover it again
        //             $('.dropdown-toggle', this).trigger('click');
        //         }
        //     }
        // });

        setTimeout(function() {
            $('ul.nav li.dropdown').hover(function() {
                $(this).find('.dropdown-menu').stop(true, true).delay(201).fadeIn(500);
            }, function() {
                $(this).find('.dropdown-menu').stop(true, true).delay(201).fadeOut(500);
            });
        }, 1000);



    }
    //Viewport animation
    // function viewportAnimation() {
    //     // Check if browser supports Css animations
    //     if (Modernizr.cssanimations) {
    //         var waypoints = $('footer').waypoint(function(direction) {
    //             switch (direction) {
    //                 case "down":
    //                     $(this).addClass('animationStart animationVisible');
    //                     break;
    //                 case "up":
    //                     $(this).removeClass('animationVisible');
    //                     break;
    //             }
    //         }, {
    //             offset: '90%'
    //         })
    //         var waypoints = $('.boxes').waypoint(function(direction) {
    //             switch (direction) {
    //                 case "down":
    //                     $(this).addClass('animationStart animationVisible');
    //                     break;
    //                 case "up":
    //                     $(this).removeClass('animationVisible');
    //                     break;
    //             }
    //         }, {
    //             offset: '90%'
    //         })
    //     }
    // }
        //GLOBLE SLEDER

        function globalSlider(){
            setTimeout(function() {
                $('.global-slider').sliderPro({
                width: $(window).width(),
                height: $(window).height()/2,
                arrows: false,
                buttons: true,
                autoplay: true,
                autoScaleLayers: false,
                imageScaleMode: 'cover',
                slideDistance: 0,
                touchSwipe: false,
            });
        }, 2000);
    }
    ISH.init = function() {
        loader();
        ishDropdown();
        scrollTop();
        thumbHeight();
        scrollPage();
        ishParallax();
        tweenMaxAnmation();
        stickyHeader();
        ishInclude();
        toggleIcon();
        boxMaxHeight();
        mobileMaxHeight();
        Collapse();
        initAccordion();
        loader();
        globalSlider();
        
        //viewportAnimation();

    };

    return ISH;

}(ISH, jQuery));

/**
 * Check if ISH exists. If it does, init ISH
 * moved from bootstrap into ISH
 */
if (!window.console) {
    var console = {
        log: function() {}
    };
}

$(document).ready(function() {
    if (typeof ISH !== undefined) {
        ISH.init();

    }
    // if ($(window).width() < 768) {
    //     $('ul.list-to-dropdown').each(function() {
    //         var $select = $('<select />');

    //         $(this).find('a').each(function() {
    //             var $option = $('<option />');
    //             $option.attr('value', $(this).attr('href')).html($(this).html());
    //             $select.append($option);
    //         });

    //         $(this).replaceWith($select);
    //     });
    // }
    // 
    window.onorientationchange = function() {
        console.log("onorientationchange");
        //alert("onorientationchange");
        //window.location.reload();
        var WW = $(document).width();
        var WH = $(document).height();
        //alert(WH);
        if(WW<WH){
        //alert(WH);
            $('#homeslider').sliderPro({
                width: WH,
                height: 300
            });
        }else{
            $('#homeslider').sliderPro({
                width: WH,
                height: 300
            });
        }
    }

    if ($(window).width() < 767) {
        $(document).on('scroll', function() {
            console.log('Event Fired');
            // jQuery(".collapse.navbar-collapse.in").stop().animate({height: '0px'}, 3000,function(){
            //     jQuery(".collapse.navbar-collapse.in").removeClass("in");
            // });
            jQuery(".collapse.navbar-collapse.in").removeClass("in");
        });
    }
});

/////////////////////////////////////////////////////////////////////////////////