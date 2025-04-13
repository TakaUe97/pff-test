$('head').append(
  '<style>body{display:none;}'
);
$(window).on("load", function () {
  $('body').delay(600).fadeIn('slow', function () {
    $('.inic_maincp').addClass('inic_maincp__in');
    //iframe
    $("#import").on("load", function () {
      try {
        $(this).height(0);
        $(this).height(this.contentWindow.document.documentElement.scrollHeight);
      } catch (e) {}
    });
    $("#import").trigger("load");
    //iframe
    $("#import2").on("load", function () {
      try {
        $(this).height(0);
        $(this).height(this.contentWindow.document.documentElement.scrollHeight);
      } catch (e) {}
    });
    $("#import2").trigger("load");
  });
});

$(window).scroll(function () {
  $('.fadein').each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100) {
      $(this).addClass('scrollin');
    }
  });
});
