$(function () {

  //PAGETOPへ戻る
  var TopBtn = $('#btn-top');
  var TopBtn2 = $('#txt-top');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      TopBtn.fadeIn(500);
      TopBtn2.fadeIn(500);

    } else {
      TopBtn.fadeOut(500);
      TopBtn2.fadeOut(500);
    }
  });
  TopBtn.click(function () {
    $('body,html').animate({
      scrollTop: $('body').offset().top,
    });
    return false;
  });

  TopBtn2.click(function () {
    $('body,html').animate({
      scrollTop: $('body').offset().top,
    });
    return false;
  });

  $('a[href^="#"]').click(function () {
    //スクロールのスピード
    var speed = 500;
    //リンク元を取得
    var href = $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  //検索
  $('#top__ser').on('click', function () {
    $('.top_ser').toggleClass('active');
    $('body').toggleClass('is_pcac');
    return false;
  });

  //ハンバーガー
  $('.btn-trigger').on('click', function () {
    $(this).toggleClass('active');
    return false;
  });

  //ハンバーガーmenu
  $('.btn-trigger').on('click', function () {
    $('.menu').toggleClass('is-active');
    $('#headers').toggleClass('is__ac');
    $('body').removeClass('is_pcac');
    $('.top_ser').removeClass('active');
  });

  //sp nav アコーディオン
  $('.sp__keynav').on('click', function () {
    $(this)
      .next()
      .slideToggle();
    $(this).toggleClass('active'); //追加部分
  });

  //close
  $('.nav___bg').on('click', function () {
    $('.top_ser').toggleClass('active');
    $('body').toggleClass('is_pcac');
  });

  //セカンドナビ
  $('.gl--inic').click(function () {
    var index = $('.gl--inic').index(this);
    $('.first__view').css('display', 'none');
    $('.sd__view').css('display', 'none');
    $('.sd__view')
      .eq(index)
      .fadeIn('slow');
    $('.sd__view')
      .eq(index)
      .css('display', 'block');
    $('.gl--inic').removeClass('select');
    $(this).addClass('select');
  });
  $('.bl_active').click(function () {
    var index = $('.bl_active').index(this);
    $('.sd__view').css('display', 'none');
    $('.first__view')
      .eq(index)
      .fadeIn('slow');
    $('.first__view')
      .eq(index)
      .css('display', 'block');
  });

  $('.gl--peanuts').click(function () {
    var index = $('.gl--peanuts').index(this);
    $('.first__view').css('display', 'none');
    $('.sd__view--peanuts').css('display', 'none');
    $('.sd__view--peanuts')
      .eq(index)
      .fadeIn('slow');
    $('.sd__view--peanuts')
      .eq(index)
      .css('display', 'block');
    $('.gl--peanuts').removeClass('select');
    $(this).addClass('select');
  });
  $('.bl_active--ku').click(function () {
    var index = $('.bl_active--ku').index(this);
    $('.sd__view--peanuts').css('display', 'none');
    $('.first__view')
      .eq(index)
      .fadeIn('slow');
    $('.first__view')
      .eq(index)
      .css('display', 'block');
  });



  /*============================================================
2023/11/30　多言語バー：ヘッダーに追加
============================================================*/
  $(window).scroll(function () {
    $('#nav_lang_controller ul li>div+div').fadeOut();
    if ($(this).scrollTop() > 25) {
      $('#headers').addClass('scrolled');
      //$( 'body' ).css( 'padding-top', height);
      // 超えない場合
    } else {
      //ヘッダーのfixedクラスを外す
      $('#headers').removeClass('scrolled');
      // bodyのpadding-topをなくす
      //$( 'body' ).css( 'padding-top', 0);
    }
  });
  $('#nav_lang_controller>ul>li').find('div:first-child').on('click', function () {
    //$('#nav_lang_controller>ul>li').find('div+div').fadeOut()
    jQuery(this).next().fadeToggle();
  });
  $('#nav_lang_controller>ul>li div a').on('click', function () {
    jQuery(this).closest('div').fadeOut();
    return true;
  });

  $(window).on('resize', function () {
    $('#nav_lang_controller ul li>div+div').fadeOut();
  });

});
