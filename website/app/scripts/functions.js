$(() => {

currencyDropDown();
smoothScroll();

});

let currencyDropDown = () => {
  let switcher        = $('.switcher');
  let currentCurrency = $('.current-currency');

  currentCurrency.on('click', (evt) => {
    $this = $(evt.currentTarget);
    $this
      .parent()
      .toggleClass('open');
    });
};

let smoothScroll = () => {
  $(document).on('click', 'a', (event) => {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(event.currentTarget, 'href') ).offset().top
    }, 500);
  });
};
