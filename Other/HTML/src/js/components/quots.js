import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';

export default class Quotes {
    constructor(el) {
        this.el = el;
        this.init();
        var Current = 0;
        const quotes = [{
            a: 1,
            b: 2
        }]
    }

    init() {
        // console.log("Quotes module init");
        //QUOTES
        // const quotes = ["Reliance Jewels-Aabhar",
        //     "GE AVIATION",
        //     "GE HEALTHCARE",
        //     "GE POWER",
        //     "Pursuits By Skoda | Episode 3 The Managniyar Seduction",
        //     "Pursuits By Skoda | Episode 1 Blue Tokai",
        //     "AEGON LIFE",
        //     "CNBC- HEALTH IS WEALTH",
        //     "Naya Indian Nayi Soch - Hero HF Deluxe"
        // ]


        // GET PROJECTS
        this.getProjects();
    }
    // fetch(url, {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'cors', // no-cors, cors, *same-origin
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: 'same-origin', // include, *same-origin, omit
    //     headers: {
    //         'Content-Type': 'application/json',
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     redirect: 'follow', // manual, *follow, error
    //     referrer: 'no-referrer', // no-referrer, *client
    //     body: JSON.stringify(data), // body data type must match "Content-Type" header
    // })
    getProjects() {
        function getCategoryBrochures() {
            const that = this,
                isProductSearch = window.document.querySelector(".get-pages").getAttribute("data-page-type") === "get-pages",
                URL = `https://api.vimeo.com/users/23008673/videos`;

            // showSpinner().then(() => {
            //     // hideSearchError();
            //     fetch(URL, {
            //         method: "GET",
            //         mode: 'no-cors',
            //         headers: {
            //             'Accept': 'application/json',
            //             'Content-Type': 'application/json',
            //             'Origin': '',
            //             'Host': 'api.vimeo.com',
            //             'Authorization': 'Bearer 7579d8b5279c96736a037c70677d7bad',
            //         },
            //     }).then(response => response)
            //         .then(json => {
            //             console.log(json);
            //             // if (json.length > 0) {
            //             //     renderAllPages(json)
            //             //         .then(() => hideSpinner())
            //             //         .then(() => {
            //             //             // initFilter();
            //             //             // attachResultEvents();
            //             //         })
            //             //         .catch(error => {
            //             //             console.error(error);
            //             //         });
            //             // } else {
            //             //     hideSpinner().then(() => showBrochureNotThereError());
            //             // }
            //         })
            //         .catch(error => {
            //             hideSpinner().then(() => showSearchError());
            //             console.error(error);
            //         });
            // })
        };

        function showSpinner() {
            //            console.log("showSpinner");

            return new Promise((resolve, reject) => {
                resolve(true);
            })
        }

        function hideSpinner() {
            //            console.log("hideSpinner");

            return new Promise((resolve, reject) => {
                resolve(true);
            })
        }

        function showSearchError() {
            // const target = this.el.querySelector(".jcb-brochure-download--categories > .container"),
            //     errorMsg = document.createRange().createContextualFragment("<p class=\"search-error-message\"><span class=\"icon\">!</span> " + this.i18n.genericErrorMsg +" </p>");
            // target.appendChild(errorMsg);
            // anims.fadeIn(this.el.querySelector(".search-error-message"));
        }

        function hideSearchError() {
            return new Promise((resolve, reject) => {
                //   const target = this.el.querySelector(".search-error-message");
                //   if (target) {
                //     anims.fadeOut(target)
                //       .then(() => {
                //         target.parentNode.removeChild(target);
                //         resolve(true);
                //       });
                //   } else {
                //     resolve(true);
                //   }
                resolve(true);
            })
        }

        function showBrochureNotThereError() { }


        function renderAllPages(json) {
            return new Promise((resolve, reject) => {
                // console.log("dATA::::", json);
                const target = window.document.querySelector(".get-pages");
                const pagesArray = json,
                    resultStr = document.createRange().createContextualFragment(`${pagesArray.map((item, index) => `<section>
                    <div class="grid-12 project  ${index % 2 ? "project-right" : "project-left"}">
                        <div class="box">
                            <img src="${item.acf.project_image_desktop}" alt="">
                            <div class="overlay"></div>
                        </div>
                    <div class="project-info" style="border-bottom:2px solid ${item.acf.primary_color}">
                        <p class="small-title"> ${item.acf.company}</p>
                        <p class="duration">${item.acf.project_time}</p>
                        
                        <h4 class="project-title">${item.acf.project_name}</h4>
                        <p class="type"> ${item.acf.project_type.map(typeItem => { return `<span class="typeItem">${typeItem}</span>` }).join("")}</p>
                        <p class="tech"> ${item.acf.technologies.map(techItem => { return `<span class="techItem">${techItem}</span>` }).join("")}</p>
                        <p class="project-link" > <a href="${item.acf.url}">See Case study</a></p>
                    </div>
                    </section>`).join("")}`);
                target.innerHTML = "";
                target.appendChild(resultStr);
                handleImageLoads();
                projectAnimation();
                resolve(true);
            })
        }

        function projectAnimation() {
            // var tl = new TimelineMax({ paused: false })
            // var $ht = $(document).find('.hidden-text');
            // tl.staggerFrom($ht, 1.5, { y: "110%", ease: Power4.easeOut }, 0.5)

            var controller = new ScrollMagic.Controller();

            // init controller
            $(".project").each(function () {
                var $overlay = $(this).find(".overlay"),
                    $projectInfo = $(this).find(".project-info"),
                    $smallTitle = $(this).find(".small-title"),
                    $projectLink = $(this).find(".project-link"),
                    $h4 = $(this).find("h4"),
                    $tech = $(this).find(".techItem")

                var animateIn = new TimelineMax();

                animateIn
                    .fromTo($overlay, 2, {
                        scale: 1.5,
                        skewX: 30
                    }, {
                            skewX: 0,
                            xPercent: 100,
                            transformOrigin: "0% 100%",
                            ease: Power4.easeOut
                        })
                    .from($projectInfo, 0.3, {
                        scaleY: 0,
                        transformOrigin: "bottom left"
                    }, "-=1.5")
                    .from($h4, 0.3, {
                        autoAlpha: 0,
                        x: 30,
                        ease: Power4.easeOut
                    }, "-=1.2")
                    .from($tech, 0.3, {
                        autoAlpha: 0,
                        x: 30,
                        ease: Power4.easeOut
                    }, "1")
                    .from($smallTitle, 0.3, {
                        autoAlpha: 0,
                        y: 30,
                        ease: Power4.easeOut
                    }, "-=0.5")
                    .from($projectLink, 0.3, {
                        autoAlpha: 0,
                        y: 10,
                        ease: Power4.easeOut
                    }, "-=0.3")

                //make a scrollmagic scene
                var scene = new ScrollMagic.Scene({
                    triggerElement: this,
                }).addIndicators().setTween(animateIn).addTo(controller)
            })
        }
        //Handle Image load
        function handleImageLoads() {
            // const brochureImages = Array.prototype.slice.call(this.el.querySelectorAll(".jcb-brochure-download--results--item-image img")),
            //     that = this;
            // for (let i in brochureImages) {
            //     brochureImages[i].addEventListener("onload", function () {
            //         that.shuffler.layout();
            //     });
            // }
        }
        getCategoryBrochures();

        //Vomeo Call
        var URL = "https://api.vimeo.com/users/23008673/videos";
        var videoID;
        showSpinner().then(() => { })
        fetch(URL, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer 7579d8b5279c96736a037c70677d7bad',
            }
        }).then((res) => res.json())
            .then((json) => {
                //                console.log(json.data);
                filterVideoId(json.data);
                filterVideoInfo(json.data);
                loadIframe();
            })

        var filtered = [];
        var filteredinfo = [];

        function filterVideoId(data) {
            for (var filter in data) {
                if (data[filter].uri) {
                    filtered.push(data[filter].uri);
                }
            }
            //            console.log(filtered);
        }

        function filterVideoInfo(data) {
            for (var filter in data) {
                if (data[filter].name) {
                    filteredinfo.push(data[filter].name);
                }
            }
            //            console.log(filteredinfo);
        }


        renderAllPages(filteredinfo)
        var $videoPlace = $(".player-container");
        var currentVideoIndex = 0;
        var videoIDLength = filtered.length;

        function getId(uri) {
            var url = uri,
                parts = url.split("/"),
                last_part = parts[parts.length - 1];
            return last_part
        }
        //LOAD FIRST VIDEO
        function loadIframe() {
            if ($(".player-container").empty()) {
                $('<iframe id="vPlayer" src="https://player.vimeo.com/video/' + getId(filtered[0]) + '?api=1" width="100%" height="auto" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>').appendTo($videoPlace);

                //var firstVideoId = {id: "309647978"};
                //var vimeoPlayer = new Vimeo.Player('vPlayerContainer22', firstVideoId);
                //vimeoPlayer.setVolume(0);
                //vimeoPlayer.on('play', function () {console.log('Played the first video');});
            }
        }
        const quotes = filteredinfo;
        let quotesIndex = 0;
        //NEXT Video
        $('.js-next').on('click', function () {
            if (currentVideoIndex == filtered.length - 1) {
                currentVideoIndex = 0
            } else {
                currentVideoIndex++;
            }
            //            console.log(currentVideoIndex);

            $videoPlace.empty().removeClass('videoplace js-videoplace').addClass('video');

            var iFrame = '<iframe id="vPlayer" src="https://player.vimeo.com/video/' + getId(filtered[currentVideoIndex]) + '?api=1" width="100%" height="auto" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';

            $(iFrame).appendTo($videoPlace);

        })

        //PREV Video
        $('.js-previous').on('click', function () {
            if (currentVideoIndex == 0) {
                currentVideoIndex = filtered.length - 1;
            } else {
                currentVideoIndex--;
            }
            //            console.log(currentVideoIndex);


            ////////////////////////////
            $videoPlace.empty().removeClass('videoplace js-videoplace').addClass('video');

            var iFrame = '<iframe id="vPlayer" src="https://player.vimeo.com/video/' + getId(filtered[currentVideoIndex]) + '?api=1" width="100%" height="auto" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';

            $(iFrame).appendTo($videoPlace);
            //CONTAINER animatation
            //var QC = $(".pro-vid-container");
            //TweenMax.from(QC, 1.7, {
            //                onStart: qcFun,
            //                autoAlpha: 0,
            //                opacity: 0,
            //                scale: 1.5,
            //                ease: Power3.easeInOut
            //            });
            //
            //            function qcFun() {
            //                TweenMax.from('.quote_view', 1.7, {
            //                    autoAlpha: 0,
            //                    opacity: 0,
            //                    y: 50,
            //                    ease: Power3.easeInOut
            //                });
            //                //quotesIndex = (quotesIndex == quotes.length - 1) ? 0 : (quotesIndex + 1);
            //                $('.quote_view').text(quotes[quotesIndex]);
            //            }
        })



        $('.quote_view').text(quotes[quotesIndex]);

        var qtl = new TimelineLite({ paused: true }),
            target = $('#quote_view');

        qtl.set(target, {
            autoAlpha: 0,
            opacity: 0,
            className: '+=active',
            y: -80,
            ease: Power3.easeInOut
        })
            .to(target, 2, {
                autoAlpha: 1,
                opacity: 1,
                y: 5,
                ease: Power3.easeInOut
            }, 0);
        // qtl.to(1, { x: -231, ease: Power2.easeIn });

        $('.next').click(function () {
            event.preventDefault();



            if (quotesIndex == filtered.length - 1) {
                quotesIndex = 0
            } else {
                quotesIndex++;
            }
            //            console.log(quotesIndex);


            TweenMax.from('.quote_view', 1.7, {
                onStart: zzz,
                autoAlpha: 0,
                opacity: 0,
                y: 50,
                ease: Power3.easeInOut
            });

            function zzz() {
                TweenMax.from('.quote_view', 1.7, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 50,
                    ease: Power3.easeInOut
                });
                //quotesIndex = (quotesIndex == quotes.length - 1) ? 0 : (quotesIndex + 1);
                $('.quote_view').text(quotes[quotesIndex]);
            }
        });
        $('.previous').click(function () {


            if (quotesIndex == 0) {
                quotesIndex = filtered.length - 1;
            } else {
                quotesIndex--;
            }
            //            console.log(quotesIndex);

            TweenMax.from('.quote_view', 1.7, {
                onStart: zzz,
                autoAlpha: 0,
                opacity: 0,
                y: 50,
                ease: Power3.easeInOut
            });

            function zzz() {
                TweenMax.from('.quote_view', 1.7, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 50,
                    ease: Power3.easeInOut
                });
                //quotesIndex = (quotesIndex == quotes.length - 1) ? 0 : (quotesIndex + 1);
                $('.quote_view').text(quotes[quotesIndex]);
            }
            $('.quote_view').text(quotes[quotesIndex]);
        });
        TweenMax.from('.play-btn', 1.7, {
            autoAlpha: 0,
            opacity: 0,
            y: 50,
            ease: Power3.easeInOut
        });

    }

}
