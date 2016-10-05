"use strict"

$(() => {

spinnerOnLoad();
movingBg();
currencyDropDown();
smoothScroll();
entranceEvt();
mainFormSubmit();
reserveFormSubmit();
splashBLockNews();

});

// Check for the blank inputs
// Form validation

let mainFormSubmit = () => {
  let mainForm      = $('#main-form'),
      inputEmail    = $('input[name="email"]'),
      inputNumber   = $('input[name="phonenumber"]'),
      inputUGet     = $('#uget'),
      inputUGive    = $('#ugive'),
      hintMail      = $('.email'),
      hintNumber    = $('.number'),
      btnSubmit     = $('button[type="submit"]'),
      spinner       = $('.loader-submit'),
      successful    = $('.successful'),
      successfulBtn = successful.find('button'),
      allHints      = $('.hint');


  successfulBtn.on('click', (event) => {
      let $this   = $(event.currentTarget),
          parent  = $(event.currentTarget).parent();
      if (parent.is(':visible')) parent.hide();
  });

  mainForm.submit((evt) => {

    //Check if all the inputs filled
    if (inputEmail.val() != "" && inputNumber.val() != ""  && inputUGive.val() != "")  {
      let $this = $(evt.currentTarget),
          url   = $this.attr('action'),
          type  = $this.attr('method'),
          data  = {};

      $this.find('[name]').each((index, value) => {
          let item       = $(value),
              name       = item.attr('name'),
              itemValue  = item.val();
              data[name] = itemValue;
      });

      $.ajax({
        url: url,
        type: type,
        data: data,
        beforeSend: () => {
          btnSubmit.hide();
          spinner.show();
        },
        complete: () => {
          spinner.hide();
          btnSubmit.show();
        },
        success: () => {
          successful.show();
          $this.find(':input').val('');
        }
      });
      evt.preventDefault();}

      // Else if inputs are blank
      else {
        if (inputUGive.val() == "") {
          inputUGive.css({boxShadow: 'inset 0px 0px 10px 0px #ff253a'});
          evt.preventDefault();}

        else if (inputUGive.val() != "") {
          inputUGive.css({boxShadow: 'none'});
          evt.preventDefault();}

        if (inputEmail.val() == "" && inputNumber.val() == "") {
          allHints.fadeIn(300);
          evt.preventDefault();}

        else if (inputEmail .val() == "" ) {
          hintMail.fadeIn(300);
          evt.preventDefault();}

        else if (inputNumber.val() == "" ) {
          hintNumber.fadeIn(300);
          evt.preventDefault();}

        if (inputNumber.val() != "" && hintNumber.is(':visible')) {
          hintNumber.fadeOut(300);
          evt.preventDefault();}

        else if (inputEmail.val() != "" && hintMail.is(':visible')) {
          hintMail.fadeOut(300);
          evt.preventDefault();}
      }
  });

  // Disable letters in input forms

  inputUGive.add(inputNumber).on('keypress', (key) => {
    if(key.charCode < 48 || key.charCode > 57) return false;
  });

  // Input on change

  inputEmail.on('input', () => {
    if      (hintMail.is(':visible')) hintMail.fadeOut();
    else if (inputEmail.val() == "")  hintMail.fadeIn();
  });

  inputNumber.on('input', () => {
    if      (hintNumber.is(':visible')) hintNumber.fadeOut();
    else if (inputNumber.val() == "")   hintNumber.fadeIn();
  });

  inputUGive.on('input', () => {
    if (inputUGive.css({boxShadow: 'inset 0px 0px 10px 0px #ff253a'})) {
      inputUGive.css({boxShadow: 'inset 0px 0px 10px 0px transparent'});}
  });
};

let reserveFormSubmit = () => {
  let formReserve = $('#form-reserve form'),
      inputEmail  = formReserve.find('input[type="email"]'),
      inputCurr   = formReserve.find('input[type="text"]'),
      btn         = formReserve.find('button[type="submit"]'),
      loader      = formReserve.find('.loader-submit'),
      ajaxSuccess = $('#form-reserve .successful');



  inputCurr.on('keypress', (key) => {
    if(key.charCode < 48 || key.charCode > 57) return false;
  });

  inputEmail.on('input', () => {
    if (inputEmail.css({boxShadow: "inset 0px 0px 0px 1px red"})) {
      inputEmail.css({boxShadow: "inset 0px 0px 0px 1px transparent"});}
  });

  inputCurr.on('input', () => {
    if (inputCurr.css({boxShadow: "inset 0px 0px 0px 1px red"})) {
      inputCurr.css({boxShadow: "inset 0px 0px 0px 1px transparent"});}
  });

  formReserve.submit((evt) => {

    if (inputEmail.val() != "" && inputCurr.val() != "") {
      let $this = $(evt.currentTarget),
          url   = $this.attr('action'),
          type  = $this.attr('method'),
          data  = {};

      $this.find('[name]').each((index, value) => {
        let item        = $(value),
            name        = item.attr('name'),
            itemValue   = item.val();
            data[name]  = itemValue;
      });

      $.ajax({
        url: url,
        type: type,
        data: data,
        beforeSend: () => {
          btn.hide();
          loader.show();},
        complete: () => {
          loader.hide();
          btn.show();},
        success: () => {
          inputEmail.add(inputCurr).val('');
          ajaxSuccess.show();
        }
      });
      evt.preventDefault();
    }

    else {
      if (inputEmail.val() == "") {
        inputEmail.css({boxShadow: "inset 0px 0px 0px 1px red"});
        evt.preventDefault();}

      else if (inputCurr.val() == "") {
        inputCurr.css({boxShadow: "inset 0px 0px 0px 1px red"});
        evt.preventDefault();}

      if (inputEmail.val() == "" && inputCurr.val() == "") {
        inputEmail.css({boxShadow: "inset 0px 0px 0px 1px red"});
        inputCurr.css({boxShadow: "inset 0px 0px 0px 1px red"});
        evt.preventDefault();}
      }
  });
}

//Spinner on fades out on window load

let spinnerOnLoad = () => {
  let loadSpinner = $('#load-spinner');
  $(document).ready(() => {
    loadSpinner.fadeOut(500);
  });
};

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
    evt.preventDefault();
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
      mainNav         = header.find('.main-nav'),
      popUp           = $('.popup'),
      shadow          = $('.shadow');

  popUp.on('click', (evt) => {
    let $this = $(evt.currentTarget);
    let setOne = [header, shadow, popUpContainer];
    for (let item of setOne) {
      item.fadeIn(350);
    }

    if ($this.attr('href') == '#entrance') {
      if (!entranceForm.is(':visible')) {
        entranceForm .siblings().fadeOut(350);
        entranceForm .fadeIn(350);}

      else if(entranceForm.is(':visible')) {
        let setTwo = [entranceForm, popUpContainer, header]
        for (let item of setTwo) {
          item.fadeOut(350)
        }
      }

    } else if ($this.attr('href') == '#faq') {
        if (!faq.is(':visible')) {
          faq.siblings().fadeOut(350);
          faq.fadeIn(350);}

        else if(faq.is(':visible')) {
          let setThree = [faq, popUpContainer, header];
          for (let item of setThree) {
            item.fadeOut(350);
          }
        }
    } else if ($this.attr('href') == '#tarify') {
        if (!tarify.is(':visible')) {
          tarify.siblings().fadeOut(350);
          tarify.fadeIn(350);}

        else if(tarify.is(':visible')) {
          let setFour = [tarify, popUpContainer, header];
          for (let item of setFour) {
            item.fadeOut(350);
          }
        }

    } else if ($this.attr('href') == '#confidentiality') {
        if (!confidentiality.is(':visible')) {
          confidentiality.siblings().fadeOut(350);
          confidentiality.fadeIn(350);}

        else if(confidentiality.is(':visible')) {
          let setFive = [confidentiality, popUpContainer, header];
          for (let item of setFive) {
            item.fadeOut(350);
        }
      }
    }
  });

    let closeTargets = [closeImg, popUpContainer, shadow, header];
    for (let targ of closeTargets) {
        targ.on('click', (e) => {
          let toClose = [entranceForm, faq, tarify, confidentiality, popUpContainer, header];
            for (let item of toClose) {
              item.fadeOut(350);
          }
      });
      targ.children().on('click', (e) => {
        e.stopPropagation();
      });
    }

};

// News splash window

let splashBLockNews = () => {
  let readAlls        = $('.read-all'),
      header          = $('.main-header-fixed'),
      shadow          = $('.shadow'),
      popUpContainer  = $('.pop-up-container'),
      article         = $('article.one');


      readAlls.on('click', (evt) => {
        let $this         = $(evt.currentTatget),
            itemsToClose  = [header, shadow, popUpContainer, article];

            for (let item of itemsToClose) {
              item.fadeIn(350);
      }
  });
};
