import 'babel-polyfill';
//Files
import '../css/main.scss';

import { $document, $window, $html, $body } from './utils/environment';
//jQuery
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// Load application styles
import p5 from "p5";
import dat from "dat.gui";
import Stats from "stats-js";
import { hexagon, hexagonLine, squareLine } from './p5Helper/helper.js'
import { TimelineMax,TimelineLite, CSSPlugin, AttrPlugin, Power0, Power3 } from "gsap/all";

var winW = window.innerWidth;
var winH = window.innerHeight;

if (winW < 480) {
    // document.body.requestFullscreen();
}




// console.log("%cMade with ❤︎️ by Mukesh — Designer by profession, an artist by passion. — mukeshthankar.com", "background:#000;color:#fff;padding:0.5em 1em;line-height:2;");


const moduleElements = document.querySelectorAll('[data-module]')

for (var i = 0; i < moduleElements.length; i++) {
    const el = moduleElements[i]
    const name = el.getAttribute('data-module')
    const Module = require(`./components/${name}`).default
    new Module(el)
    // console.log(name); 
}