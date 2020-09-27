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
            if (WW < 767) {
                $('.navbar-collapse').height(WH);
                //Functions
                function initAccordion() {
                    $('#homeslider').sliderPro({
                        width: WW,
                        height: 700,
                        arrows: false,
                        buttons: true,
                        waitForLayers: true,
                        autoplay: true,
                        autoScaleLayers: false,
                        imageScaleMode: 'cover',
                        breakpoints: {
                            768: {
                                height: 450,
                                imageScaleMode: 'contain',
                            },
                            425: {
                                height: 250,
                                imageScaleMode: 'contain',
                            }
                        }
                    });
                    //Right Hand side Image Slider
                    $('#example2').sliderPro({
                        height: 390,
                        fadeArrows: false,
                        fade: true,
                        arrows: true,
                        buttons: false,
                    });

                    $('#example3').sliderPro({
                        height: 170,
                        fadeArrows: false,
                        fade: true,
                        arrows: false,
                        buttons: true,
                    });

                    //Celebration Slider
                    $('#example4').sliderPro({
                        fadeArrows: false,
                        fade: true,
                        arrows: false,
                        buttons: false,
                    });
                    //Birthday Slider
                    $('#example5').sliderPro({
                        fadeArrows: false,
                        fade: true,
                        arrows: true,
                        buttons: false,
                    });
                    //$subNav.on('click', '.trigger', function(e) {});

                    //NEWS SLIDER
                    $('#news-slider').sliderPro({
                        width: WW,
                        height: 400,
                        autoHeight: true,
                        fade: false,
                        updateHash: true
                    });
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
                        var thumbH = $('.related-links').find('.details').width();
                        //alert(thumbH);
                        $('.related-links .details').height(thumbH);
                    }
                }
                // SCROLL PAGE
                function scrollPage() {
                    //jQuery for page scrolling feature - requires jQuery Easing plugin
                    $(function() {
                        $(document).on('click', 'a.page-scroll', function(event) {
                            var $anchor = $(this);
                            $('html, body').stop().animate({
                                scrollTop: $($anchor.attr('href')).offset().top
                            }, 1500, 'easeInOutExpo');
                            $('a.page-scroll').removeClass('active');
                            $(this).addClass('active');
                            event.preventDefault();
                        });
                    });
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
                        new ScrollMagic.Scene({
                                triggerElement: "#parallax1"
                            })
                            .setTween("#parallax1 > div", {
                                y: "50%",
                                ease: Linear.easeNone
                            })
                            .addTo(controller);
                        // build scenes
                        new ScrollMagic.Scene({
                                triggerElement: "#parallax2"
                            })
                            .setTween("#parallax2 > div", {
                                y: "50%",
                                ease: Linear.easeNone
                            })
                            // .addIndicators()
                            .addTo(controller);

                        //Section animation
                        var tweenSec1 = TweenMax.staggerFromTo(".sec-1 .details", 0.5, { x: 80 }, { x: 0, ease: Linear.easeOut }, 0.15);
                        new ScrollMagic.Scene({
                                triggerElement: ".sec-1"
                            })
                            .setTween(tweenSec1)
                            .addTo(controller);

                        var third = TweenMax.staggerFromTo(".sec-2 .details", 0.5, { x: 80 }, { x: 0, ease: Linear.easeOut }, 0.15);
                        new ScrollMagic.Scene({
                                triggerElement: "#third"
                            })
                            .setTween(third)
                            .addTo(controller);

                        var tweenSec3 = TweenMax.staggerFromTo(".sec-3 .details", 0.5, { x: -80 }, { x: 0, ease: Linear.easeOut }, 0.15);
                        new ScrollMagic.Scene({
                                triggerElement: ".sec-3"
                            })
                            //.setTween(".sec-3", {opacity:0, y:100, delay:1,ease: Linear.easeNone})
                            .setTween(tweenSec3)
                            .addTo(controller);


                        // ON SCROLL COMACT NAV
                        setTimeout(function() {
                            $('#header_nav').data('size', 'big');
                        }, 1000)

                        $(window).scroll(function() {
                            var scroll = $(window).scrollTop();
                            if ($(document).scrollTop() > 0) {
                                if ($('#header_nav').data('size') == 'big') {
                                    $('#header_nav').data('size', 'small');
                                    $('#header_nav').addClass('compact-nav');
                                }
                            } else {
                                if ($('#header_nav').data('size') == 'small') {
                                    $('#header_nav').data('size', 'big');
                                    $('#header_nav').removeClass('compact-nav');
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

                    // READMORE BUTTON Effect

                    // function animateOver(element) {
                    //   console.log(element);
                    //   var tl = new TimelineLite();
                    //   tl.to(element, 0.2, {
                    //     marginLeft: 5
                    //   })
                    //   return tl;
                    // }
                    // $(".readmore-btn").hover(over, out);
                    //
                    // function over() {
                    //   //check if this item has an animation
                    //   if (!this.animation) {
                    //     //if not, create one
                    //     this.animation = animateOver(this);
                    //   } else {
                    //     //or else play it
                    //     this.animation.play().timeScale(1);
                    //   }
                    // }
                    //
                    // function out() {
                    //   //reverse animation 4 times normal speed
                    //   this.animation.reverse().timeScale(1);
                    // }


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
                ISH.init = function() {
                    scrollTop();
                    thumbHeight();
                    scrollPage();
                    ishParallax();
                    tweenMaxAnmation();
                    initAccordion();
                    stickyHeader();
                    ishInclude();
                    toggleIcon();
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
        });