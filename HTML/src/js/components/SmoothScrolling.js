import Scrollbar from 'smooth-scrollbar';
import {
    $document
} from '../utils/environment';
import SmoothScroll from 'gsap';
//import Player from '@vimeo/player';


export default class SmoothScrolling {
    constructor(el) {
        this.el = el
        this.init();
    }

    init() {
        this.scrollAnimation();
        console.log("SmoothScrolling module init");

        // Scrollbar.init(this.el);
        // Scrollbar.init(document.getElementsByClassName('o-scroll'));
        //         Scrollbar.init(document.getElementsByTagName('body'));
        // Scrollbar.init(document.getElementsByTagName('body'));
        var scroller = new SmoothScroll({
            target: document.querySelector("#scroll-container"), // element container to scroll
            scrollEase: 0.05,
        });
        // Scrollbar.init(document.querySelector('#my-scrollbar'));
    }
    scrollAnimation() {
        // ON SCROLL ANIMATION
        var $animation_elements = $('.invert, .scrollSlideUp, .scrollFadeIn, .slideFadeLeft, .slideFadeRight');
        var $window = $(window);
        function check_if_in_view() {
            "use strict";
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $body = $('body');
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position) &&
                    (element_top_position <= window_bottom_position)) {
                    $element.addClass('visible');
                    if($element.hasClass('invert')){
                        $body.addClass('visible');
                    }else{
                        $body.removeClass('visible');
                    }
                    
                } else {
                    $element.removeClass('visible');
                    if($element.hasClass('invert')){
                        $body.removeClass('visible');
                    }

                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
    }
}
