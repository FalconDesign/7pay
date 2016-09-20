"use strict"

$(() => {

movingBg();
currencyDropDown();
smoothScroll();
entranceEvt();
});

// DropDown menu in the section content and reserve

let currencyDropDown = () => {
  let switcher        = $('.switcher');
  let currentCurrency = $('.current-currency');

  currentCurrency.on('click', (evt) => {
    let $this = $(evt.currentTarget);
    $this
      .parent()
      .toggleClass('open');
    });
};

// Function for smoothscroling anchor

let smoothScroll = () => {
  $(document).on('click', 'a[href^="#contact"]', (evt) => {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(evt.currentTarget, 'href') ).offset().top
    }, 500);
  });
};

// Moving bg. Parallax

let movingBg = () => {

  let parallaxBg = () => {
    let contact       = $('#contact'),
        about         = $('#about'),
        windowScroll  = $(window).scrollTop();
    contact.css({ backgroundPosition: 'center ' + (160 + (-windowScroll / 2)) + 'px' });
    about.css({ backgroundPosition: 'center ' + (660 + (-windowScroll / 2)) + 'px' });
  };

  let $window = $(window);
  $window.on('scroll', parallaxBg);

};

// Entrance event

let entranceEvt = () => {
  let anchorEntrance = $('a[href^="#entrance"]'),
      currencyStripe = $('.currency-stripe'),
      entranceForm   = $('#entrance'),
      closeImg       = $('.close'),
      header         = $('.main-header');


  closeImg.on('click', () => {
    header.removeClass('dark');
    currencyStripe.removeClass('move-down');
    entranceForm.removeClass('show');
  });


  anchorEntrance.on('click', () => {
    header.toggleClass('dark');
    currencyStripe.toggleClass('move-down');
    entranceForm.toggleClass('show');
  });
};
