$(function() {
  var topButton;
  topButton = $('#page-top');
  topButton.hide();

  $(window).scroll(function() {
    if ($(document).height() === $(this).height() + $(this).scrollTop()) {
      topButton.fadeIn();
    } else {
      topButton.fadeOut();
    }
  });
});

$(function() {
  var bottomButton;
  bottomButton = $('#page-bottom');
  // bottomButton.hide();


  $(window).scroll(function() {
    if ($(this).scrollTop() < $('#wrap').offset().top) {
      bottomButton.fadeIn();
    } else {
      bottomButton.fadeOut();
    }
  });
});


$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      if (href == '#page-bottom') {
        var position = $(document).height();
        $('body,html').animate({scrollTop:position}, speed, 'linear');
      } else {
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'linear');
      }
      return false;
   });
});
