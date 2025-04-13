$(window).on("load", function () {
  $('body').delay(600).fadeIn('slow', function () {
    $('.cate__inic--mcp').addClass('inic_maincp__in');
    //iframe
    $("#import").on("load", function () {
      try {
        $(this).height(0);
        $(this).height(this.contentWindow.document.documentElement.scrollHeight);
      } catch (e) {}
    });
    $("#import").trigger("load");
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

if (window.matchMedia("(max-width: 767px)").matches) {
  /* ウィンドウサイズが 768px以下の場合に有効にしたい処理*/
  $(function () {
    $(".itemspec--key").on("click", function () {
      $(this).next().slideToggle();
      $(this).toggleClass("active"); //追加部分
    });
  });
}

$(function(){
  $(".icon_q").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass("active");//追加部分
  });
});