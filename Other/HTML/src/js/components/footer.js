import 'babel-polyfill';

//jQuery
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import img from '../../img/type-writer.jpg';

//Libs
import 'gsap'
import { Tone } from 'tone';
import { TweenLite, TweenMax, TimelineMax, TimelineLite, Power4 } from 'gsap';
import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
 
import 'animation.gsap';
import 'debug.addIndicators';

export default class Footer {
  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    this.handleFooterPopup();
  }
  handleFooterPopup() {
    var closeFooterBtn = document.getElementById("close-footer");
    var clickBtn = document.querySelector('.toggle-me');
    var targetDiv = document.querySelector('.contact-me');
    var footerDiv = document.querySelector('.footer');
    var footerID = document.getElementById('footer');

    targetDiv.style.backgroundImage = "url(" + img + ")";

    closeFooterBtn.addEventListener('click', () => {
      targetDiv.classList.toggle('open');
    });

    clickBtn.addEventListener('click', () => {
      targetDiv.classList.toggle('open');
    });

  }
}