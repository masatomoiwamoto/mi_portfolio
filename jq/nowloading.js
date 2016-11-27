//通常設定ここから
$(function() {
  var h = $(window).height();

  $('#wrapper').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});

$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrapper').css('display', 'block');
});
//通常設定ここまで

//10秒強制的にnowloadingを非表示
$(function(){
  setTimeout('stopload()',10000);
});

function stopload(){
  $('#wrapper').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}
//10秒設定ここまで
