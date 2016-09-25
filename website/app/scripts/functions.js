"use strict"

$(() => {

movingBg();
currencyDropDown();
smoothScroll();
entranceEvt();

});

// DropDown menu in the sections content and reserve

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

// Function for smoothScrolling anchor

let smoothScroll = () => {
  $(document).on('click', 'a[href^="#contact"], a[href^="#about"], a[href^="#content"]', (evt) => {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(evt.currentTarget, 'href') ).offset().top
    }, 500);
  });
};

// Moving bg. Parralax

let movingBg = () => {

  let parallaxBg = () => {
    let content       = $('#content'),
        about         = $('#about'),
        windowScroll  = $(window).scrollTop();
    content .css({backgroundPosition: 'center ' + (-windowScroll / 2) + 'px' });
    about   .css({backgroundPosition: 'center ' + (560 + (-windowScroll / 2 )) + 'px'});
  };

  let $window = $(window);
  $window.on('scroll', parallaxBg);

};

// Entrance event

let entranceEvt = () => {
  let anchorEntrance  = $('a[href^="#entrance"]'),
      anchorFAQ       = $('a[href^="#faq"]'),
      anchroTarify    = $('a[href^="#tarify"]'),
      entranceForm    = $('#entrance'),
      popUpContainer  = $('.pop-up-container'),
      confidentiality = $('#confidentiality'),
      faq             = $('#faq'),
      tarify          = $('#tarify'),
      closeImg        = $('.close'),
      header          = $('.main-header-fixed'),
      popUp           = $('.popup'),
      shadow          = $('.shadow');

  popUp.on('click', (evt) => {
    let $this = $(evt.currentTarget);
    let setOne = [header, shadow, popUpContainer];
    for (let item of setOne) {
      item.fadeIn(500);
    }

    if ($this.attr('href') == '#entrance') {
      if (!entranceForm.is(':visible')) {
        entranceForm .siblings().fadeOut(500);
        entranceForm .fadeIn(500);}

      else if(entranceForm.is(':visible')) {
        let setTwo = [entranceForm, popUpContainer, header]
        for (let item of setTwo) {
          item.fadeOut(500)
        }
      }

    } else if ($this.attr('href') == '#faq') {
        if (!faq.is(':visible')) {
          faq.siblings().fadeOut(500);
          faq.fadeIn(500);}

        else if(faq.is(':visible')) {
          let setThree = [faq, popUpContainer, header];
          for (let item of setThree) {
            item.fadeOut(500);
          }
        }
    } else if ($this.attr('href') == '#tarify') {
        if (!tarify.is(':visible')) {
          tarify.siblings().fadeOut(500);
          tarify.fadeIn(500);}

        else if(tarify.is(':visible')) {
          let setFour = [tarify, popUpContainer, header];
          for (let item of setFour) {
            item.fadeOut(500);
          }
        }

    } else if ($this.attr('href') == '#confidentiality') {
        if (!confidentiality.is(':visible')) {
          confidentiality.siblings().fadeOut(500);
          confidentiality.fadeIn(500);}

        else if(confidentiality.is(':visible')) {
          let setFive = [confidentiality, popUpContainer, header];
          for (let item of setFive) {
            item.fadeOut(500);
        }
      }
    }
  });

    closeImg.on('click', () => {
      let toClose = [entranceForm, faq, tarify, confidentiality, popUpContainer, header];
      for (let item of toClose) {
        item.fadeOut(500);
      }
  });
};
