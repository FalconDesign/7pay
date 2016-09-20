"use strict";

$(function () {

  var $window   = $(window);
  var burger    = $('.burger');
  var header    = $('.main-header');

  $window.on('load', function () {
    $('#cover').fadeOut(1000);

    // Animated rotating icons in section 'home';

    var iconContainer = $('.icon-container');
    iconContainer.addClass('animate');
  });

  // Function for responsive mibile nav-bar;

  burger.on('click', function (e) {
    $(e.currentTarget).toggleClass('closed-burger');
    header.toggleClass('opened-mobile-header');
  });

  // Function for smooth scroll to an anchor

  var scroll = $('.scroll');
  scroll.on('click', function (e) {
    var $this = $(e.currentTarget.hash);
    e.preventDefault();
    $('html, body').animate({ scrollTop: $this.offset().top - 70 }, 500);
  });

  // Function check the width & Paralax Effect

  var parallax  = function parallax() {
    var section = ['.theme', '.pricing', '.team', '.great', '.connect'];
    var item    = section;


    var theme         = $('.theme'),
        pricing       = $('.pricing'),
        team          = $('.team'),
        great         = $('.great'),
        connect       = $('.connect'),
        windowScroll  = $(window).scrollTop();

    var windowsize = $window.width();
    if (windowsize < 678) {
      $('' + item).css({ backgroundPosition: 'center center' });
      return;
    }

    var bgVertical = new Map();

    bgVertical.set(theme, 189.6);
    bgVertical.set(pricing, 340);
    bgVertical.set(team, 697.6);
    bgVertical.set(great, 962);
    bgVertical.set(connect, 1169.4);

    if (windowScroll > theme.offset().top - $window.height()) {

      bgVertical.forEach(function (value, key) {
        key.css({ backgroundPosition: 'center ' + (value + -windowScroll / 5) + 'px' });
      });
    };
  };

  $window.on('scroll', parallax);

  $window.resize(parallax);

  // Skill container loading and counter

  $window.on('scroll', function () {

    var windowScroll  = $(window).scrollTop();
    var skills        = $('.skill-container');
    var one           = $('.one');
    var two           = $('.two');
    var medFirst      = $('.med-first');
    var medSecond     = $('.med-second');

    if (windowScroll > skills.offset().top - $window.height()) {

      medFirst.addClass('rotate');
      medSecond.addClass('rotate-second');

      var animateCounter = function animateCounter(counterSelector, endPoint) {

        $(counterSelector).animate({ num: endPoint }, {
          duration: 2000,
          step: function step(num) {
            $(this).html(num.toFixed() + '%');
          }
        });
      };

      animateCounter(one, 70);
      animateCounter(two, 90);
    };
  });

  // AJAX portfolio

  var portfolioLoad = function portfolioLoad() {
    var button = $('.change');
    $.ajaxSetup({ cache: true });

    button.click(function (e) {

      var $this        = $(e.currentTarget),
          spinner      = '<div class="loader">Loading...</div>',
          newfolder    = $this.data('folder'),
          newHTML      = 'website/app/load-portfolio/' + newfolder + '.html',
          loadProject  = $('.project-load');

      loadProject.fadeOut(300, function () {
        loadProject.fadeIn().html(spinner).load(newHTML);
      });
    });
  };

  portfolioLoad();

  // Change button class 'active'

  var change = $('.change');

  change.on('click', function (e) {

    var $this = $(e.currentTarget);

    if (!$this.hasClass('active')) {

      $this.siblings().removeClass('active');
      $this.addClass('active');
    };
  });
});
