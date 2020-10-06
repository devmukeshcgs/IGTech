export default class Social {
    constructor(el) {
        this.el = el;
        this.init();
    }

    init() {
//        console.log("Social module init");
        if (window.innerWidth > 480) {
            this.socialIcons();
        }

    }
    socialIcons() {
        var $social = [];
        var $social = $('.social ul li');
        var socialTl = new TimelineLite();

        // socialTl.staggerFromTo($social, 1, { right: -70 }, { right: 10 }, 0.25);

        var tl2 = new TimelineLite();
        tl2.staggerFromTo(".social-item", 1,
            {
                cycle: {
                    y: function (index) {
                        return index * 10;
                    },
                }, ease: Power2.easeInOut,
            },
            {
                autoAlpha: 1, opacity: 1,
                cycle: {
                    y: function () {
                        return -20;
                    },
                }, ease: Power2.easeInOut

            },
            0.2);
    }

}