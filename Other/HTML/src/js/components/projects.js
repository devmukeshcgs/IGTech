//jQuery
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import Player from '@vimeo/player';

export default class Projects {
    constructor(el) {
        this.$el = el;
        var Current = 0;
        this.filterProjectObj = [];
        this.isAnimating = false;
        this.animationDuration = 500;
        this.$controls = document.getElementsByClassName('o-button');
        this.loadingCount = 0;
        this.init();
    }
    init() {
        this.getProjects();
        this.next();
        this.onPlaying();
    }
    // fade out
    fadeOut(el) {
        return new Promise((resolve, reject) => {
            (function fade() {
                $('body').addClass("is-loaded");
                resolve(true);
            })();
        })
    }

    // fade in
    fadeIn(el, display) {
        return new Promise((resolve, reject) => {
            (function fade() {
                $('body').removeClass("is-loaded");
                resolve(true);
            })();
        });
    }
    showSpinner() {
        return new Promise((resolve, reject) => {
            if (this.loadingCount < 1) {
                this.loadingCount++;
                console.log('[showSpinner]-----> appendchild');
                this.fadeIn(this.$el.querySelector("body")).then(() => resolve(true));
            } else {
                this.loadingCount++;
                resolve(true)
            }
        });
    }
    hideSpinner() {
        return new Promise((resolve, reject) => {
            if (this.loadingCount == 1) {
                console.log('[hideSpinner] ---> target');
                this.loadingCount--;
                this.fadeOut(this.$el.querySelector("body")).then(() => resolve(true));

            } else {
                this.loadingCount--;
                resolve(true);
            }
        });
    }
    showSearchError() {
        // let range = document.createRange();
        // range.selectNode(document.body);
        // const target = this.$el.querySelector(".jcb-quote-form--categories > .container"),
        //     errorMsg = range.createContextualFragment("<p class=\"search-error-message\"><span class=\"icon\">!</span>Something went wrong. Please try again</p>");

        // target.appendChild(errorMsg);
        // anims.fadeIn(this.$el.querySelector(".search-error-message"));
    }
    hideSearchError() {
        // return new Promise((resolve, reject) => {
        //     const target = this.$el.querySelector(".search-error-message");
        //     if (target) {
        //         anims.fadeOut(target)
        //             .then(() => {
        //                 target.parentNode.removeChild(target);
        //                 resolve(true);
        //             });
        //     } else {
        //         resolve(true);
        //     }
        // })
        return new Promise((resolve, reject) => {
            resolve(true);
        })
    }

    getProjects() {
        const that = this
        //Vomeo Call
        const URL = "https://api.vimeo.com/users/23008673/videos";
        var videoID;
        const hObj = {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer 7579d8b5279c96736a037c70677d7bad',
            }
        }
        this.showSpinner().then(() => {
            fetch(URL, hObj).then(res => res.json())
                .then(json => {
                    if (json.data.length > 0) {
                        console.log(json.data[0].pictures.sizes[9].link);
                        this.filterVideoInfo(json.data);
                        this.renderProjectList();
                        console.log(json.data[0].pictures.sizes[9].link);
                        that.hideSpinner()
                    } else {
                        that.hideSpinner()
                            .then(() => that.showSearchError());
                    }

                }).catch(error => {
                    that.hideSpinner()
                        .then(() => that.showSearchError());
                });
        })
    }
    getId(uri) {
        var url = uri;
        var parts = url.toString().split("/");
        var last_part = parts[parts.length - 1];
        return last_part
    }
    filterVideoInfo(data) {
        var NewfilterProjectObj = [];
        data.forEach(function myFunction(value, index, array) {
            var obj = {
                uri: data[index].uri,
                name: data[index].name,
            }
            NewfilterProjectObj.push(obj);
        });
        this.filterProjectObj = NewfilterProjectObj;
        $('.proj-title').text(this.filterProjectObj[0].name);
        // console.log(this.filterProjectObj);
    }
    renderProjectList() {
        this.filterProjectObj.forEach(function myFunction(value, index, array) {
            var list = `<a class=''>${value.name}</a>`
            $(".project-list").append(list);
        });
        // TweenMax.staggerFrom(".project-list a", 2, { scale: 0.5, opacity: 0, delay: 0.5, ease: Elastic.easeOut, force3D: true }, 0.2);

        // $(".project-list a").click(function () {
        //     TweenMax.staggerTo(".project-list a", 0.5, { opacity: 0, y: -100, ease: Back.easeIn }, 0.1);
        // });

    }

    next() {
        var currentVideoIndex = 0;
        var that = this;
        var $videoPlace = $(".player-container");

        //NEXT Video
        $('.js-next').on('click', function () {
            event.preventDefault();
            that.preventClick();

            if (currentVideoIndex == that.filterProjectObj.length - 1) {
                currentVideoIndex = 0
                // console.log("currentVideoIndex", currentVideoIndex);
            } else {
                currentVideoIndex++;
                // console.log("currentVideoIndex", currentVideoIndex);
            }
            nextAnim(currentVideoIndex);
            vimeoPlayer(currentVideoIndex)
        })
        //PREV Video
        $('.js-previous').on('click', function () {
            event.preventDefault();
            that.preventClick();

            if (currentVideoIndex == 0) {
                currentVideoIndex = that.filterProjectObj.length - 1;
                // console.log("currentVideoIndex", currentVideoIndex);
            } else {
                currentVideoIndex--;
                // console.log("currentVideoIndex", currentVideoIndex);
            }
            nextAnim(currentVideoIndex);
            vimeoPlayer(currentVideoIndex)
        })

        function vimeoPlayer(currentVideoIndex) {
            $videoPlace.empty().removeClass('videoplace js-videoplace').addClass('video');
            var iFrame = '<iframe id="vPlayer" src="https://player.vimeo.com/video/' + that.getId(that.filterProjectObj[currentVideoIndex].uri) + '?controls=0&&title=0&&portrait=0&&byline=0" width="100%" height="auto" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';
            $(iFrame).appendTo($videoPlace);

            // var options = {
            //     id: that.getId(that.filterProjectObj[currentVideoIndex].uri),
            //     byline:false,
            //     controls:false,
            //     title:false,

            // };

            // var vimeoPlayer = new Vimeo.Player('vPlayer', options);
            // vimeoPlayer.setVolume(0);
            // vimeoPlayer.on('play', function () {
            //     console.log('Played the first video');
            // });

            // Player 1
            // var player1 = document.getElementById('vPlayerContainer');
            // var player22;
            // var VID = that.getId(that.filterProjectObj[currentVideoIndex].uri)
            // player22 = new Player(player1, { 
            //     id:VID,
            //     controls:false,
            //     title:false,
            //     portrait:false,
            //     byline:false
            // });

            // player22.unload().then(function() {
            //     // the video was unloaded
            //     console.log("player unloaded");

            // }).catch(function(error) {
            //     // an error occurred
            // });
            // player22.loadVideo(VID).then(function(id) {
            //     console.log(VID);
            //     console.log("loadVideo");

            //     // the video successfully loaded
            // }).catch(function(error) {
            //     switch (error.name) {
            //         case 'TypeError':
            //             // the id was not a number
            //             break;

            //         case 'PasswordError':
            //             // the video is password-protected and the viewer needs to enter the
            //             // password first
            //             break;

            //         case 'PrivacyError':
            //             // the video is password-protected or private
            //             break;

            //         default:
            //             // some other error occurred
            //             break;
            //     }
            // });



            // player22.on('play', function () {
            //     console.log('played the video!');
            // });
            // player22.unload().then(function() {
            //     // the video was unloaded
            // }).catch(function(error) {
            //     // an error occurred
            // });
        }

        function nextAnim() {
            TweenMax.from('.proj-title', 0.5, {
                onStart: animStart,
                // onComplete:animEnd,
                autoAlpha: 0,
                y: 50,
                ease: Power3.easeInOut
            });

            function animStart() {
                $('.proj-title').text(that.filterProjectObj[currentVideoIndex].name);
            }

            function animEnd() {
                TweenMax.from('.proj-title', 0, {
                    autoAlpha: 0,
                    // y: 50,
                    // ease: Power3.easeInOut
                });
                // $('.proj-title').text(quotes[quotesIndex]);
            }
        }
    }

    // Prevent click
    // ==========================================================================
    preventClick() {
        this.isAnimating = true;
        this.$controls.disabled = true;

        setTimeout(() => {
            this.isAnimating = false;
            this.$controls.disabled = true;
        }, this.animationDuration);
    }

    onPlaying() {
        //Video Title Timeline

        var tl_title = new TimelineLite({
            paused: true
        });

        var tl_play_btn = new TimelineLite({
            paused: true
        });

        tl_title.to('.proj-title', 0.5, {
            y: -231,
            autoAlpha: 0,
            ease: Power2.easeIn
        });

        tl_play_btn.to('.play-btn', 0.5, {
            bottom: 0,
            ease: Power2.easeIn,
            css: {
                scale: 0.5,
                rotation: 180
            }
        });

        $('.play-btn').on('click', function (event) {
            event.preventDefault();

            //Play button Toggle
            $(this).find('use').attr("xlink:href", "http://localhost:8080/src/img/sprite.svg#icon-close");

            //Video Title
            tl_title.reversed() ? tl_title.play() : tl_title.reverse();
            tl_play_btn.reversed() ? tl_play_btn.play() : tl_play_btn.reverse();
        });
    }



}