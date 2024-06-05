$(window).load(function() {
  // Animate loader off screen
  // $(".se-pre-con").fadeOut("slow");
  $('body').addClass("is-loaded");
});
$(document).ready(function () {
  //MENU Click
  $("#menu-btn").on("click", function () {
      $("body").toggleClass("overflow");
      $(this).toggleClass("active");
      $(".main-nav").toggleClass("active");
      $("#threeLines").toggleClass("active");
      animateIn.reversed() ? animateIn.play() : animateIn.reverse();
  });
  $(".search-btn").on("click", function () {
      $(".search-container").toggleClass("is-avtive");
      $(".search-input").focus();
  });

  //Animation
  var dot1 = $(".dot1");
  var dot3 = $(".dot3");

  var animateIn = new TimelineMax({ paused: true });
  animateIn
      .to(dot1, 1, { rotation: '+=180', transformOrigin: "150% 150%", ease: Power4.easeOut })
      .to(dot3, 1, { rotation: '+=180', transformOrigin: "-50% -50%", ease: Power4.easeOut }, "-=1");
  animateIn.play();
});