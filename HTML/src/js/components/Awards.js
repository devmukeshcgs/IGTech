// Load application styles
import p5 from "p5";
import dat from "dat.gui";
import Stats from "stats-js";
import 'p5/lib/addons/p5.dom.js';
import 'p5/lib/addons/p5.sound.js';

export default class Awards {
    constructor(el) {
        this.el = el;
        this.init();
    }

    init() {
        console.log("Awards module init");
        // this.awardsCanvas();
        this.awardGallery();
        // this.awardsGSAP();
    }
    awardsGSAP() {
        let data = [
            {
                "name": "Promax",
                "year": "2019",
                "for": "best Comedy Promo in Asia at Channel V (Shakira and Beyonde)"
            },
            {
                "name": "ViDEA",
                "year": "2018",
                "for": "Most Innovative/ Creative Video Content in a Digital Campaign for Pursuits by Skoda, Bloomberg Quint."
            },
            {
                "name": "ViDEA",
                "year": "2017",
                "for": "Branded Video Content Special Mention in India for Pursuits by Skoda, Bloomberg Quint."
            }
        ];
        for (let i = 0; i < data.length; i++) {
            let html = `<div class="award-cont">
            <div class="award-info">
            <div>
            <div class="award-name">${data[i].name}</div>
            <p class="for">${data[i].for}</p>
            </div>
            </div>
            <div class="year">${data[i].year}</div>
            </div>`;

            // let htmlEl = document.getElementById("awards");
            let htmlEl = $("#awards");
            htmlEl.append(html);
        }
    }

    awardGallery() {
        let index = 0;
        const awardList = [
            {
                "name": "Promax",
                "year": "2019",
                "for": "best Comedy Promo in Asia at Channel V (Shakira and Beyonde)"
            },
            {
                "name": "ViDEA",
                "year": "2018",
                "for": "Most Innovative/ Creative Video Content in a Digital Campaign for Pursuits by Skoda, Bloomberg Quint."
            },
            {
                "name": "ViDEA",
                "year": "2017",
                "for": "Branded Video Content Special Mention in India for Pursuits by Skoda, Bloomberg Quint."
            }
        ];
        let delay=1000;
        // $('.award_view').text(awardList[index].name);
        setTimeout(() => {
            $('.award_view').removeClass("out");
            $('.award_view').html(`<div class="award-cont"><div class="award-info"><div><div class="award-name">${awardList[index].name}</div><p class="for">best Comedy Promo in Asia at Channel V (Shakira and Beyonde)</p></div></div><div class="year">2019</div></div>`);
        }, delay);

        console.log(awardList);
        let that = this;
        var awardTimeLine = new TimelineLite({ paused: true }),
            target = $('#award_view');

        awardTimeLine.set(target, { autoAlpha: 0, opacity: 0, className: '+=active', y: -40, ease: Power3.easeInOut })
            .to(target, 2, { autoAlpha: 1, opacity: 1, y: 5, ease: Power3.easeInOut }, 0);


        $('.award_next').click(function () {
            event.preventDefault();
            $('.award_view').addClass("out");
            index = (index == awardList.length - 1) ? 0 : (index + 1);
            setTimeout(() => {
                $('.award_view').removeClass("out");
                // $('.award_view').text(awardList[index].name);
                $('.award_view').html(`<div class="award-cont"><div class="award-info"><div><div class="award-name">${awardList[index].name}</div><p class="for">best Comedy Promo in Asia at Channel V (Shakira and Beyonde)</p></div></div><div class="year">2019</div></div>`)
            }, delay);
        });

        $('.award_previous').click(function () {
            event.preventDefault();
            $('.award_view').addClass("out");
            index = (index == 0) ? (awardList.length - 1) : (index - 1);
            setTimeout(() => {
                console.log("Clicked!");
                $('.award_view').removeClass("out");
                // $('.award_view').text(awardList[index].name);
                $('.award_view').html(`<div class="award-cont"><div class="award-info"><div><div class="award-name">${awardList[index].name}</div><p class="for">best Comedy Promo in Asia at Channel V (Shakira and Beyonde)</p></div></div><div class="year">2019</div></div>`)
            }, delay);

        });

        // $('.award_next').click(function () {
        //     event.preventDefault();
        //     if (index == that.awardList.length - 1) {
        //         index = 0;
        //     } else {
        //         index++;
        //     }
        //     $('.award_view').text(that.awardList[index].name);

        // });

        // $('.award_previous').click(function () {
        //     event.preventDefault();
        //     if (index == 0) {
        //         index = that.awardList.length - 1;
        //     } else {
        //         index--;
        //     }
        //     $('.award_view').text(awardList[index].name);
        // });
    }
    awardsCanvas() {
        var stats = new Stats();
        stats.setMode(0);
        document.body.appendChild(stats.domElement);

        // plug in dat.GUI
        window.onload = function () {
            var gui = new dat.GUI();
            var foo = {
                bar: "Hello World!"
            };
            gui.add(foo, "bar", 10, 1000);
        };

        // -----------------------------

        const Awards = p5 => {
            // Variables scoped within p5
            const canvasWidth = p5.windowWidth;
            const canvasHeight = p5.windowHeight;
            // const d = new Star(500, 300, 4);

            // make library globally available
            window.p5 = p5;

            let data = []; // Global object to hold results from the loadJSON call

            // Put any asynchronous data loading in preload to complete before "setup" is run
            function preload() {
                // data = p5.loadJSON('http://localhost:8080/src/data/awardsData.json');
            }


            // Setup function
            // ======================================
            p5.setup = () => {
                let canvas = p5.createCanvas(canvasWidth, canvasHeight);
                canvas.parent('awards');
                data = [
                    {
                        "name": "Promax",
                        "year": "2019",
                        "for": "best Comedy Promo in Asia at Channel V (Shakira and Beyonde)"
                    },
                    {
                        "name": "ViDEA",
                        "year": "2019",
                        "for": "Most Innovative/ Creative Video Content in a Digital Campaign for Pursuits by Skoda, Bloomberg Quint."
                    },
                    {
                        "name": "ViDEA",
                        "year": "2019",
                        "for": "best Comedy Promo in Asia at Channel V (Shakira and Beyonde)"
                    }
                ];
                for (let i = 0; i < data.length; i++) {
                }
                p5.background("#000");
                //Draw four rectangle
                for (let i = 0; i < 4; i++) {
                    drawShape(canvasWidth, canvasHeight, 200, 3);
                }
            };

            // Draw function
            // ======================================
            p5.draw = () => {
            };
            function drawShape(xloc, yloc, size, num) {
                const grayvalues = 255 / num;
                const steps = size / num;
                p5.beginShape();
                for (let i = 0; i < num; i++) {
                    let bottom = p5.floor(p5.random(canvasWidth * 0.4, canvasWidth * 0.6));
                    let top = p5.floor(p5.random(canvasHeight * 0.6, canvasHeight * 0.8));
                    p5.fill('rgba(0,255,0, 0.25)');
                    p5.stroke(255, 0.5);
                    if (i == 1) {
                        // p5.ellipse(bottom, yloc-canvasHeight*0.4, 15,15);
                        p5.vertex(bottom, top);
                    } else {
                        // p5.ellipse(bottom, yloc-100, 5,5);
                        p5.vertex(bottom, yloc - 100);
                    }
                }
                p5.endShape(p5.CLOSE);


            }
            function drawTarget(xloc, yloc, size, num) {
                const grayvalues = 255 / num;
                const steps = size / num;
                for (let i = 0; i < num; i++) {
                    p5.fill(i * grayvalues);
                    p5.ellipse(xloc, yloc, size - i * steps, size - i * steps);
                }
            }
        };

        new p5(Awards);

    }
}